param([int]$Port = 8080)

$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$Port/"

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css"
  ".js"   = "application/javascript"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".png"  = "image/png"
  ".webp" = "image/webp"
  ".mp4"  = "video/mp4"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".pdf"  = "application/pdf"
}
# Le code (HTML/CSS/JS) ne doit jamais rester en cache pendant qu'on développe.
# Les photos non plus : contrairement aux vidéos (jamais renommées, juste
# ajoutées), les logos/avatars sont réenregistrés plusieurs fois sous le
# même nom pendant l'itération — avec un cache d'1h et aucun ETag/
# Last-Modified pour le revalider, le navigateur resservait l'ancienne image
# sans même recontacter le serveur. Seules les vidéos restent cache 1h,
# pour profiter des requêtes "Range" ci-dessous sans tout retélécharger à
# chaque survol.
$noCacheExt = @(".html", ".css", ".js", ".jpg", ".jpeg", ".png", ".webp", ".svg", ".ico", ".pdf")

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $request = $context.Request
  $response = $context.Response
  try {
    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $root ($path.TrimStart("/") -replace "/", [IO.Path]::DirectorySeparatorChar)
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [IO.Path]::GetExtension($filePath)
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      $response.Headers.Add("Cache-Control", $(if ($noCacheExt -contains $ext) { "no-store" } else { "public, max-age=3600" }))
      $response.Headers.Add("Accept-Ranges", "bytes")

      $fileInfo = Get-Item $filePath
      $fileLength = $fileInfo.Length
      $rangeHeader = $request.Headers["Range"]

      $stream = [IO.File]::OpenRead($filePath)
      try {
        if ($rangeHeader -and $rangeHeader -match "bytes=(\d*)-(\d*)") {
          $start = if ($matches[1]) { [int64]$matches[1] } else { 0 }
          $end = if ($matches[2]) { [int64]$matches[2] } else { $fileLength - 1 }
          if ($end -ge $fileLength) { $end = $fileLength - 1 }
          $chunkLength = $end - $start + 1

          $response.StatusCode = 206
          $response.ContentType = $contentType
          $response.Headers.Add("Content-Range", "bytes $start-$end/$fileLength")
          $response.ContentLength64 = $chunkLength

          $stream.Seek($start, [IO.SeekOrigin]::Begin) | Out-Null
          $buffer = New-Object byte[] 65536
          $remaining = $chunkLength
          while ($remaining -gt 0) {
            $toRead = [Math]::Min($buffer.Length, $remaining)
            $read = $stream.Read($buffer, 0, $toRead)
            if ($read -le 0) { break }
            $response.OutputStream.Write($buffer, 0, $read)
            $remaining -= $read
          }
        } else {
          $response.ContentType = $contentType
          $response.ContentLength64 = $fileLength
          $stream.CopyTo($response.OutputStream)
        }
      } finally {
        $stream.Close()
      }
    } else {
      $response.StatusCode = 404
      $notFound = [Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $response.OutputStream.Write($notFound, 0, $notFound.Length)
    }
  } catch {
    # Le navigateur coupe/relance sans arrêt les requêtes "Range" pendant la
    # lecture vidéo (normal) — on ignore silencieusement, rien à signaler.
    try { $response.StatusCode = 500 } catch {}
  } finally {
    try { $response.OutputStream.Close() } catch {}
  }
}
