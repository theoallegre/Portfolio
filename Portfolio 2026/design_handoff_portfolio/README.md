# Handoff: Portfolio Théo Allègre — "Terminal Vintage"

## Overview
Portfolio personnel façon "vieil ordinateur" : l'utilisateur atterrit sur un écran d'accueil monté dans une photo de bureau/ordinateur vintage, clique "ENTRÉE", regarde une séquence de boot façon terminal (texte tapé lettre par lettre + barre de progression), puis arrive sur un menu principal. Depuis le menu, 5 sections s'ouvrent chacune comme une fenêtre pop-up flottante par-dessus l'écran : À propos, Expériences, Formation, Mes projets, Logiciels et Contact.

## About the Design Files
The files in this bundle are **design references built in HTML** (a Claude-authored prototype), not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, static site, etc.) using its established patterns, component library, and build tooling — or, if no environment exists yet, pick the framework best suited to a personal portfolio site (a static site generator or lightweight React/Vite app both fit well) and implement the design there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, layout percentages, and animation timings in this doc are final — reproduce them precisely. Placeholder image slots (photo, project visuals) should become real `<img>`/`<video>` elements wired to real assets.

## Global look & feel
- Dark, warm background (`#1a1712`) behind a centered "device" composition, max-width 620px, aspect-ratio 1080/1350 (portrait).
- A photo background (bureau + ordinateur vintage) fills that whole area — currently an empty drop-zone; needs a real photo asset.
- A CRT-style "screen" is absolutely positioned over the photo at `left:19.5%; top:19%; width:58%; height:34%` of the composition. This screen shows Home / Boot / Menu states in sequence.
- All 5 content sections (À propos, Expériences, Formation, Mes projets, Logiciels et Contact) render as **floating pop-up windows** layered on top of everything (`position:absolute; left:6%; top:9%; width:88%; height:66%`, one variant `top:11.5%; height:61%` for Contact), not inside the small CRT screen — this makes them readable at a much bigger size than the screen itself.

## Design Tokens
**Colors**
- Background (page): `#1a1712`
- Screen background: `radial-gradient(120% 130% at 50% 40%, #0e2417 0%, #071208 55%, #030704 100%)`
- Pop-up window background: same radial gradient, or flat `#0a1610` / `rgba(3,7,4,0.55)` for scrollable content panes (kept above the scanline overlay for legibility)
- Primary accent green (glow/text): `#4dff8a` / `#7fffa0` (bright), `#4fbf72` / `#5fd684` (muted labels), `#3f8f5c` (dim/secondary links)
- Body copy on dark: `#c8ffd8`, headings: `#a8ffc0`
- Button text on green: `#08120c` (near-black)

**Typography** (Google Fonts: VT323, Space Mono 400/700, Playfair Display italic 700/800, Archivo 700/800)
- Playfair Display, italic, weight 800 — used ONLY for section titles / the person's name (e.g. "MENU PRINCIPAL", "EXPÉRIENCES", the big name on the home screen). Glow via `text-shadow: 0 0 10-18px rgba(77,255,138,0.4-0.6)`.
- Archivo, weight 700/800 — job titles, project names, menu item labels, button label.
- Space Mono, weight 400/500/700 — system labels, boot terminal text, body copy inside windows, back-links.
- Font sizes use `clamp()` scaled to the composition width, roughly: system labels 7-9px, body 9-11px, job/project titles 11-15px, section window titles 12-19px, home name 28-46px. These are tuned for the 620px-wide composition; a responsive rebuild should preserve the *relative* scale (labels smallest, section titles largest) rather than these exact px values.

**Spacing / shape**
- Window corner radius: 6px. CRT screen corner radius: 4px.
- Window border/glow: `box-shadow: 0 30px 60px rgba(0,0,0,0.65), 0 10px 20px rgba(0,0,0,0.45), 0 0 0 1px rgba(127,255,160,0.35), inset 0 1px 0 rgba(127,255,160,0.15), 0 0 50px rgba(77,255,138,0.18)`
- HUD corner brackets: 16×16px L-shaped borders (`border-left+border-top` top-left, `border-right+border-bottom` bottom-right), 1px solid `rgba(127,255,160,0.4)`, inset 10px from window edges.
- Small status dot (blinking) next to every window title: 7-8px circle, `#7fffa0`, glow shadow, `animation: blink 1.6s ease-in-out infinite`.

## CRT screen effect (reused everywhere — screen + all pop-up windows)
Three stacked overlay layers, in this order, all `pointer-events:none`:
1. Scanlines: `repeating-linear-gradient(0deg, rgba(0,0,0,0.3-0.35) 0px, same 1px, transparent 1px, transparent 3px)`, `mix-blend-mode:multiply`.
2. (screen only) Diagonal glass reflection: `linear-gradient(115deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 12%, transparent 28%, transparent 100%)`.
3. Vignette: `inset 0 0 60-70px rgba(0,0,0,0.85-0.9)` box-shadow.
The screen additionally has `animation: flicker 6s infinite` (opacity 0.97 → 1 → 0.98).

Inside pop-up windows, the actual scrollable text content sits in its own div with a solid/near-solid background (`#0a1610` or `rgba(3,7,4,0.55)`) placed *above* these overlay layers (`z-index:5`) so the effect stays on the window chrome but the text itself stays fully legible/high-contrast.

## Screens / Views

### 1. Home (on the CRT screen)
- Centered column, gap ~6% of screen height: system label ("PORTFOLIO - JUILLET 2026"), big italic name (`displayName` prop, default "THÉO ALLÈGRE"), tagline (`tagline` prop), a fixed line "Communication · Marketing · Vidéo & Print", then a pill button "ENTRÉE ▶".
- Button: green fill `#4dff8a`, black text, fully rounded, `animation: pulseGlow 2.2s ease-in-out infinite` (breathing glow), scales up 1.06 on hover, scales down 0.96 on active/click, its arrow icon slides right 3px on hover.
- Click → starts the Boot sequence.

### 2. Boot (on the CRT screen)
- 4 lines, each typed letter-by-letter (22ms/char), one after another (380ms gap once a line finishes):
  1. "> Connexion en cours..." (plain)
  2. "> Vérification des identifiants..." (plain)
  3. "> Accès autorisé..." (highlighted: bold, glow)
  4. "> Chargement du menu..." (highlighted: bold, glow)
- A blinking block cursor (`7px × 0.9em`) follows the currently-typing line.
- After the last line finishes typing (+350ms), a progress bar fills 0→100% in 5% steps every 40ms (a green bar with glow + numeric %).
- On completion (+500ms) → auto-navigates to Menu.

### 3. Menu (on the CRT screen)
- Title "MENU PRINCIPAL" (Playfair italic) + a thin gradient underline.
- Vertical list of 5 items, each: number (`01`-`05`) in muted green + label in Archivo bold white-green. Hover: slight background tint, 2px left accent border, translateX(4px).
- Items: 01 À propos, 02 Expériences, 03 Formation, 04 Mes projets, 05 Logiciels et Contact.
- Each item click opens the corresponding pop-up window (see below). A "‹ Retour à l'accueil" link at the bottom returns to Home.

### 4-8. Pop-up windows (À propos / Expériences / Formation / Mes projets / Logiciels et Contact)
Shared chrome: absolute-positioned floating window over the whole composition (not confined to the CRT screen), CRT effect layers, HUD corner brackets, header bar with blinking status dot + Playfair italic title + circular ✕ close button, footer "‹ Retour au menu" link. Open animation: `popIn` keyframes (scale 0.88→1, translateY 10px→0, fade in, 0.22s ease). Close animation: scale down to 0.82 + translateY(24px) + fade out, 0.28s ease-in, then unmount.

**À propos**: one big italicized pull-quote ("« Créer des contenus qui touchent ma cible. »"), thin divider, then a bulleted list of short paragraphs (bio content) with small green bullet dots.

**Expériences** (labelled "parcours" internally): grouped by company, each company block has a title + a vertical left-border timeline of positions. Each position shows: job title + a rounded pill tag (CDI/CDD/Alternance/Stage), an italic period/location line, and a bulleted list of responsibilities.
Content: Léo Lagrange Formation (CDI mars 2026-present, CDD sept 2025-fév 2026, Alternance sept 2023-août 2025), Soulgame (Alternance sept 2022-sept 2023), Ecodistrib (Stage juin-août 2021).

**Formation**: same visual pattern as Expériences (grouped by school, vertical timeline), but each entry has no tag pill, just diploma title + period + a short bullet list.
Content: ISEGCOM Toulouse (Master Digital Marketing, obtenu juin 2025), IPAC Bachelor Factory Toulouse (Bachelor Marketing Communication, obtenu 2023, + Erasmus Haarlem), Lycée Albert Einstein Bagnols-sur-Cèze (Bac STI2D, obtenu juin 2019).

**Mes projets**: two states —
- List view: rows of `numéro · nom d'entreprise · liste de tags` (clickable, same hover treatment as menu items).
- Detail view (after clicking a project): "‹ Tous les projets" back-link, then a bordered card containing the entreprise name + (for SpotyVoyage only) a full-width profile screenshot image + description paragraph. Below the card, one block per section-tag (e.g. "Visuels", "Vidéos", "Print", "Réseaux sociaux"): a pill-shaped tag label, descriptive text, then a grid of image placeholders (3 columns normally, aspect-ratio 1/1; SoulGame's video section is 9:16 aspect but still 3 columns) with a hover zoom+glow effect on each tile.
Content: Léo Lagrange Formation (Visuels/Vidéos/Print sections), SoulGame Studio (Vidéos, 9:16, 6 tiles), SpotyVoyage (Réseaux sociaux, profile screenshot + 4 tiles).

**Logiciels et Contact**: single window, vertically split into two blocks separated by a thin divider — "Logiciels & Outils" (4-column grid of small rounded-square icon badges, each with a 2-letter/symbol monogram + name below; hover: scale 1.18 + slight rotate + glow) listing Premiere Pro, Illustrator, InDesign, Notion, Canva, CapCut, HubSpot, Office 365; then "Contact" (vertical list of circular icon badges — same visual treatment as software icons but round — + value/label pairs) listing Email (theoallegre@gmail.com), Téléphone (06 82 32 64 31), LinkedIn (@theoallegre).

## Interactions & Behavior Summary
- Home → click ENTRÉE → Boot (auto) → Menu (auto, ~3s total).
- Menu → click any of the 5 items → corresponding window pops in over everything.
- Any window → click ✕ or "Retour au menu" → window animates out, returns to Menu.
- Mes projets window → click a project row → shows detail (in place, same window) → "Tous les projets" returns to the list (still inside the same open window).
- All interactive rows/icons/buttons have hover states (background tint, translate, scale, or glow) — no hover state should be silently dropped in the rebuild.
- No sound; all transitions are pure CSS/JS timers, no user-triggered video/audio playback in-window.

## State Management
Minimal state machine, screen-scoped: `screen: 'home' | 'boot' | 'menu'` for the CRT-screen content, plus one boolean pair (`xOpen` / `xClosing`) per pop-up window to drive mount/unmount + exit animation, plus `projetDetail: string | null` for the Mes Projets sub-view. Boot sequence is driven by chained `setTimeout`s typing one character at a time — a real implementation can use the same approach or a small animation library.

## Assets
- **Screenshots**: `screenshots/02-menu.png`, `03-apropos.png`, `05-experiences.png`, `07-formation.png`, `09-projets.png`, `11-contact.png` (included in this bundle) — visual reference for the menu and each pop-up window state.
- **Background photo** (ordinateur vintage / bureau): not yet supplied — currently an empty drop-zone in the prototype. Needs a real photo, portrait orientation, matching a 1080×1350 canvas, with the "screen" area sitting at roughly the position described above.
- **SpotyVoyage profile screenshot**: `uploads/pasted-1784196018227-0.png` (included in this bundle) — a TikTok profile screenshot used as-is inside the Mes Projets detail view.
- **Project visuals** (Léo Lagrange Formation photos/videos/print, SoulGame 9:16 videos, SpotyVoyage social clips): all currently placeholders (`<image-slot>` custom element, a prototype-only drag-and-drop stand-in) — replace with real `<img>`/`<video>` tags pointing at the client's real assets.
- **Software/contact icons**: currently plain text monograms (Pr, Ai, Id, N, C, Cc, H, O, @, ☎, in) inside styled badges — a production build should likely swap these for real brand SVG icons (Adobe apps, Notion, Canva, CapCut, HubSpot, Microsoft, LinkedIn) styled to match the badge treatment described above, rather than shipping the text monograms.

## Files
- `Portfolio.dc.html` — the full prototype source (HTML structure + inline styles + the JS class driving state/animations). This is a Claude "Design Component" wrapper format (`<x-dc>` / `data-dc-script` / a `DCLogic` class) — read past that wrapper for the actual markup/CSS/JS logic; don't ship the wrapper syntax itself.
- `image-slot.js` — the prototype-only drag-and-drop image placeholder component referenced by `Portfolio.dc.html`. Not for production use; each usage marks where a real image/video asset belongs.
