# Portfolio — Théo Allègre

Portfolio de Théo Allègre, chargé de communication & marketing.
Interface façon **ordinateur vintage / écran CRT** : accueil → séquence de
démarrage → menu principal → fenêtres (À propos, Expériences, Formation,
Mes projets, Logiciels & Contact).

## Stack

Site **statique**, sans build : HTML + CSS + JavaScript vanilla.

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page (écran CRT + fenêtres + visionneuses) |
| `css/style.css` | Mise en page, thème rétro, responsive (mobile / tablette / ordinateur) |
| `js/main.js` | Contenu (données) + navigation entre écrans et fenêtres |
| `assets/` | Images, vidéos, PDF |

## Lancer en local

Un serveur statique suffit. Sous Windows (PowerShell) :

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1 -Port 8080
```

Puis ouvrir http://localhost:8080

Ou avec n'importe quel serveur statique (`npx serve`, `python -m http.server`, extension Live Server…).

## Fonds d'écran & calibrage

Deux photos de fond selon la taille d'écran :

- **Ordinateur** (≥ 1024 px) : `assets/img/desk-photo-desktop.png` (1536 × 1024, 3:2)
- **Mobile / tablette** (< 1024 px) : `assets/img/desk-photo.png` (941 × 1672, 9:16)

La dalle verte (`.crt-screen`) est calée en pourcentage sur le verre noir du
tube de chaque photo. Si une photo est remplacée, il faut recalculer ces
pourcentages (voir les commentaires dans `css/style.css`). Le dossier
`assets/calibration/` (non versionné) contient les images de repère magenta
qui servent à cette mesure.

## Déploiement

Site statique : déployable tel quel sur GitHub Pages, Netlify, Vercel, etc.
Racine du site = racine du dépôt.
