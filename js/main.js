/* =========================================================
   CONTENU — modifie tes infos ici (aucun autre fichier à toucher
   pour changer les textes)
   ========================================================= */

const CONTENT = {
  displayName: 'THÉO\nALLÈGRE',
  tagline: 'Chargé de communication & marketing',

  aboutParagraphs: [
    "Moi c'est Théo. Ça fait 4 ans que je fais de la com et du marketing, et je ne m'en lasse pas. Je suis curieux et créatif, et c'est pour ça que j'ai choisi ce métier.",
    "J'aime développer des univers, comme le montre mon portfolio.",
    "Cette curiosité, je la mets aujourd'hui au service de Léo Lagrange Formation, où je pilote la communication digitale de bout en bout : de la stratégie à la création.",
    "Aujourd'hui, j'ai envie de mettre cette énergie au service de nouveaux projets.",
  ],

  parcours: [
    {
      entreprise: 'Léo Lagrange Formation',
      postes: [
        { poste: 'Chargé de communication', tag: 'CDI', periode: "mars 2026 - aujourd'hui · 5 mois · Occitanie, Nouvelle-Aquitaine, Centre-Val de Loire, Île-de-France", taches: ['Gestion des réseaux sociaux', 'Création des posts', 'Pilotage du calendrier éditorial', "Création des prints promotionnels et d'information", 'Référencement du site internet', 'Enregistrements audio et vidéo, montage', 'E-réputation : veille avis Google et Anotéa'] },
        { poste: 'Chargé de communication', tag: 'CDD', periode: 'sept. 2025 - fév. 2026 · 6 mois · Occitanie, Nouvelle-Aquitaine, Centre-Val de Loire, Île-de-France', taches: ['Élargissement des missions aux régions NAQ et CVL/IDF'] },
        { poste: 'Chargé de communication (Occitanie)', tag: 'Alternance', periode: 'sept. 2023 - août 2025 · 2 ans · Toulouse, Occitanie · Sur site', taches: [] },
      ],
    },
    {
      entreprise: 'Soulgame',
      postes: [
        { poste: 'Assistant en marketing/communication', tag: 'Alternance', periode: 'sept. 2022 - sept. 2023 · 1 an 1 mois · Toulouse, Occitanie', taches: ['Création de contenu sur les réseaux sociaux', 'Gestion de communauté par le biais de Discord', 'Gestion du CRM Streamers', "Création d'un board marketing"] },
      ],
    },
    {
      entreprise: 'Ecodistrib',
      postes: [
        { poste: 'Stagiaire', tag: 'Stage', periode: 'juin - août 2021', taches: ["Création d'un site internet", 'Création de contenu sur les réseaux sociaux', 'Négociation avec des fournisseurs'] },
      ],
    },
  ],

  formations: [
    { ecole: 'ISEGCOM Toulouse', diplomes: [{ poste: 'Master Digital Marketing / Communication et Médias Sociaux', periode: 'Obtenu en juin 2025', taches: [] }] },
    { ecole: 'IPAC Bachelor Factory Toulouse', diplomes: [{ poste: 'Bachelor Marketing Communication', periode: 'Obtenu en 2023', taches: ['Membre du BDE MINDFOX au pôle communication', 'Année Erasmus à Haarlem au Pays-Bas'] }] },
    { ecole: 'Lycée Albert Einstein, Bagnols-sur-Cèze', diplomes: [{ poste: 'Baccalauréat STI2D', periode: 'Obtenu en juin 2019', taches: ['Mention assez bien', 'Vice-président du conseil des élèves'] }] },
  ],

  // Pour ajouter une vraie photo/vidéo : mets le fichier dans assets/img ou
  // assets/video, puis renseigne son chemin dans `src` (image) ou `video` (clip).
  // Sans src/video, un tuile "placeholder" s'affiche à la place.
  projets: [
    {
      id: 'llf', num: '01', entreprise: 'Léo Lagrange Formation',
      subtitle: 'Organisme de formation professionnelle',
      description: "Organisme de formation professionnelle né en janvier 2025 de la fusion de huit instituts de la Fédération Léo Lagrange. J'y suis chargé de communication depuis trois ans : d'abord un an et demi au sein d'Instep Occitanie, puis au sein de Léo Lagrange Formation après la fusion.\n\nLa fusion en une structure unique a permis de structurer la communication en véritable service. Auparavant seul sur ce poste, je fais désormais partie d'une équipe composée d'un directeur et de deux chargés de communication. Nous sommes partis d'une page blanche et avons dû tout retravailler.",
      // Carte de statut en tête de fiche : les chiffres (délégations,
      // implantations, régions) vivent ici plutôt que noyés dans le texte.
      statusCard: {
        label: 'Organisme de formation', statusText: 'en poste', active: true,
        avatarShape: 'circle', avatarSrc: 'assets/img/llf-logo.png',
        lines: ['🎓 ex-Instep Occitanie · fusion en 2025'],
        stats: [
          { value: '6', label: 'Délégations régionales' },
          { value: '105', label: 'Implantations régionales' },
          { value: '3', label: "Régions dont j'assure la com'" },
        ],
        link: { href: 'https://www.leolagrange-formation.fr', label: "Voir le site de l'organisme" },
      },
      sections: [
        { tag: 'Visuels', text: "Sur les réseaux sociaux, notre nouvelle charte graphique nous a amenés à repenser l'ensemble de nos formats. Je me suis chargé de la création de contenus, aussi bien des publications photo que des posts plus travaillés.", count: 9, folder: 'assets/img/llf/visuels', ext: 'jpg' },
        { tag: 'Vidéos', text: "Développer des formats vidéo était important pour moi. Nous avons choisi le témoignage, permettant à nos stagiaires et formateurs de partager authentiquement leurs parcours et expériences.", count: 3, folder: 'assets/video/llf', ext: 'mp4', isVideo: true, aspect: '9/16' },
        { tag: 'Print', text: "Pour les supports print, nous avons dû refondre l'ensemble de l'existant afin d'adapter fiches formation, plaquette formations, flyers, affiches et signalétique à chaque territoire. Les fiches formation et la plaquette formations répondent aux exigences Qualiopi et de nos financeurs, tandis que les flyers relèvent davantage d'un usage commercial, plus accessible. Je vous montre ci-dessous ce que cela donne concrètement sur un dispositif : « Projet Pro ».",
          docs: [
            { title: 'Fiche formation', file: 'assets/print/llf/fiche-formation.pdf', cover: 'assets/print/llf/fiche-formation.jpg', pages: 3 },
            { title: 'Plaquette', file: 'assets/print/llf/plaquette.pdf', cover: 'assets/print/llf/plaquette.jpg', pages: 1 },
            { title: 'Flyer', file: 'assets/print/llf/flyer.pdf', cover: 'assets/print/llf/flyer.jpg', pages: 2 },
          ] },
        { tag: 'Intranet', text: "Avec ma directrice régionale, nous avons constaté que les équipes se sentaient souvent perdues face à la quantité d'informations à assimiler, des anciens comme des nouveaux, en particulier côté formateurs. C'est de ce constat qu'est née l'idée d'un intranet simple et accessible, organisé autour de 5 repères essentiels à connaître et à retenir.", interactive: 'assets/interactive/llf/intranet.html' },
      ],
    },
    {
      id: 'soulgame', num: '02', entreprise: 'SoulGame Studio',
      subtitle: 'Studio de jeux vidéo indépendant',
      description: "Soulgame Studio est un studio de jeux vidéo indépendant basé à Toulouse. J'y ai occupé le poste d'assistant en communication pendant un an, où j'ai développé leur présence sur les réseaux sociaux afin de promouvoir leur nouveau jeu «Minishoot Adventure».",
      statusCard: {
        label: 'Studio de jeux vidéo', statusText: 'mission terminée', active: false,
        avatarShape: 'circle', avatarSrc: 'assets/img/soulgame-logo.png',
        lines: ['🎮 Minishoot Adventure · Toulouse'],
      },
      sections: [
        {
          tag: 'Vidéos', text: 'Création de contenu vidéo court format (TikTok, Reels, Shorts) pour accompagner le lancement du jeu.',
          count: 6, aspect: '9/16', folder: 'assets/video/soulgame', ext: 'mp4', isVideo: true,
          // Nombre de vues par vidéo (1 -> vidéo 1, etc.) — remplace ces
          // valeurs par les vrais chiffres, ou mets null pour masquer la pastille.
          views: ['108K', '77K', '24K', '17K', '11K', '10K'],
        },
      ],
    },
    {
      id: 'spotyvoyage', num: '03', entreprise: 'SpotyVoyage',
      subtitle: 'Compte Tiktok',
      profileImage: null, // ex: 'assets/img/spotyvoyage-profile.jpg'
      description: "J'ai lancé ce compte TikTok voyage en mars 2026, que je gère de A à Z : stratégie éditoriale, écriture des scripts, voix off, montage et réponse aux commentaires.\n\nLes formats évoluent sans cesse en fonction des tendances voyage que j'observe, mais l'objectif reste le même : partager des spots cachés et des pépites, en France comme à l'étranger.",
      statusCard: {
        label: 'Compte TikTok', statusText: 'actif', active: true,
        avatarShape: 'circle', avatarSrc: 'assets/img/spotyvoyage-avatar.jpg',
        title: '@SpotyVoyage',
        lines: ['✈️ Spots cachés', '💡 1 pépite voyage par jour'],
        link: { href: 'https://www.tiktok.com/@spotyvoyage', label: 'Ouvrir le compte TikTok' },
      },
      // Widget interactif (courbe + bandeau cliquable) : abonnés, vues et
      // likes par mois, avec bascule au clic et infobulle au survol.
      statsChart: {
        default: 'abonnes',
        series: {
          abonnes: {
            title: 'Abonnés (cumul)', total: 'total · 26,3K', axisMax: '26,3K', suffix: 'K',
            months: ['M', 'A', 'M', 'J', 'J', 'A'],
            full: ['mars', 'avril', 'mai', 'juin', 'juillet', 'août'],
            values: [2.8, 6.1, 10.2, 14.9, 21, 26.3],
          },
          vues: {
            title: 'Vues par mois', total: 'total · 10,9M', axisMax: '4,5M', suffix: 'M',
            months: ['M', 'A', 'M', 'J', 'J', 'A'],
            full: ['mars', 'avril', 'mai', 'juin', 'juillet', 'août'],
            values: [1.3, 1.6, 1.4, 4.5, 1.1, 1],
          },
          likes: {
            title: 'Likes par mois', total: 'total · 500,2K', axisMax: '115,5K', suffix: 'K',
            months: ['M', 'A', 'M', 'J', 'J', 'A'],
            full: ['mars', 'avril', 'mai', 'juin', 'juillet', 'août'],
            values: [85, 105.2, 115.5, 64.7, 70.8, 59],
          },
        },
        band: [
          { key: 'abonnes', value: '26,3K', label: 'Abonnés' },
          { key: 'vues', value: '10,9M', label: 'Vues' },
          { key: 'likes', value: '500,2K', label: 'Likes' },
        ],
      },
      sections: [
        {
          tag: 'Vidéo', text: "Voici une sélection de mes vidéos les plus performantes : un reveal centré sur une ville, un autre sur un spot caché mettant en valeur une pépite méconnue, et une région.\n\nTrois échelles de destination, une même mécanique de storytelling.",
          count: 3, aspect: '9/16', folder: 'assets/video/spotyvoyage', ext: 'mp4', isVideo: true,
          views: ['127K', '108K', '72,8K'],
        },
      ],
    },
  ],

  logiciels: [
    { name: 'Premiere Pro', short: 'Pr' },
    { name: 'Illustrator', short: 'Ai' },
    { name: 'InDesign', short: 'Id' },
    { name: 'Notion', short: 'N' },
    { name: 'Canva', short: 'C' },
    { name: 'CapCut', short: 'Cc' },
    { name: 'HubSpot', short: 'H' },
    { name: 'Office 365', short: 'O' },
  ],

  contactInfos: [
    { label: 'Email', value: 'theoallegre@gmail.com', icon: '@', href: 'mailto:theoallegre@gmail.com' },
    { label: 'Téléphone', value: '06 82 32 64 31', icon: '☎', href: 'tel:+33682326431' },
    { label: 'LinkedIn', value: '@theoallegre', icon: 'in', href: 'https://www.linkedin.com/in/theoallegre' },
  ],

  bootTexts: [
    { text: '> Connexion en cours...', highlight: false },
    { text: '> Vérification des identifiants...', highlight: false },
    { text: '> Accès autorisé...', highlight: true },
    { text: '> Chargement du menu...', highlight: true },
  ],

  menuItems: [
    { num: '01', label: 'À propos', target: 'apropos' },
    { num: '02', label: 'Expériences', target: 'parcours' },
    { num: '03', label: 'Formation', target: 'formation' },
    { num: '04', label: 'Mes projets', target: 'projets' },
    { num: '05', label: 'Logiciels et Contact', target: 'contact' },
  ],
};

/* =========================================================
   HELPERS
   ========================================================= */

function el(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.innerHTML = content;
  return node;
}

/** Tuile média : image/vidéo réelle si `src`/`video` est fourni,
 *  sinon un placeholder visuel — remplace-le plus tard sans changer le HTML. */
function mediaTile({ src, video, poster, views, label = 'Visuel', aspect = '1/1' }) {
  const tile = el('div', 'media-tile');
  tile.style.aspectRatio = aspect;
  if (video) {
    tile.classList.add('media-tile--video');
    const posterAttr = poster ? ' poster="' + poster + '"' : '';
    const viewsBadge = views ? '<span class="media-tile__views">▶ ' + views + '</span>' : '';
    tile.innerHTML = '<video muted loop playsinline preload="metadata"' + posterAttr + ' src="' + video + '"></video>' + viewsBadge;
    const v = tile.querySelector('video');
    // v.currentTime = 0 ne réaffiche pas fiablement le poster une fois la
    // lecture démarrée (certains navigateurs gardent la dernière image
    // affichée) — load() remet vraiment la vignette dans son état initial.
    // Sans coût réseau supplémentaire une fois le fichier mis en cache par
    // le serveur (voir serve.ps1).
    const resetPreview = () => { v.pause(); v.load(); };
    tile.addEventListener('mouseenter', () => v.play().catch(() => {}));
    tile.addEventListener('mouseleave', resetPreview);
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('role', 'button');
    tile.setAttribute('aria-label', 'Lire ' + label + ' en grand avec le son');
    const open = () => { resetPreview(); openVideoLightbox(video, poster); };
    tile.addEventListener('click', open);
    tile.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    v.addEventListener('error', () => showTilePlaceholder(tile, label));
  } else if (src) {
    tile.innerHTML = '<img src="' + src + '" alt="' + label + '" loading="lazy">';
    // Tant que le fichier n'existe pas encore (chemin prêt mais photo pas
    // encore déposée), on retombe proprement sur le placeholder plutôt que
    // d'afficher une icône d'image cassée.
    tile.querySelector('img').addEventListener('error', () => showTilePlaceholder(tile, label));
  } else {
    showTilePlaceholder(tile, label);
  }
  return tile;
}

function showTilePlaceholder(tile, label) {
  tile.classList.add('media-tile--empty');
  tile.innerHTML = '<span>' + label + '</span>';
}

/** Tuile document : aperçu de la 1re page + clic pour ouvrir le PDF en entier
 *  dans la visionneuse (défilement de toutes les pages, zoom, téléchargement). */
function docTile(d) {
  const tile = el('a', 'doc-tile');
  tile.href = d.file;
  tile.target = '_blank';
  tile.rel = 'noopener';
  tile.setAttribute('aria-label', 'Voir « ' + d.title + ' » en entier');
  tile.innerHTML =
    '<img class="doc-tile__cover" src="' + d.cover + '" alt="' + d.title + '" loading="lazy">' +
    '<span class="doc-tile__label">' + d.title + '</span>';
  tile.querySelector('img').addEventListener('error', () => showTilePlaceholder(tile, d.title));
  tile.addEventListener('click', (e) => { e.preventDefault(); openPdfLightbox(d.file, d.title, d.pages); });
  return tile;
}

/** Construit le chemin attendu pour le n-ième fichier d'une section
 *  (1.jpg, 2.jpg, ... dans le dossier indiqué par `folder`). */
function sectionMediaPath(sec, index) {
  return sec.folder ? sec.folder + '/' + index + '.' + (sec.ext || 'jpg') : null;
}

/** Chemin de la miniature d'une vidéo (ex: assets/video/llf/1-poster.jpg),
 *  affichée avant lecture — évite de charger la vidéo juste pour la vignette. */
function sectionPosterPath(sec, index) {
  return sec.folder ? sec.folder + '/' + index + '-poster.jpg' : null;
}

/** Ouvre une vraie fenêtre séparée (pas un onglet) : window.open() avec des
 *  dimensions fixes force ce comportement, là où target="_blank" seul
 *  laisse le navigateur choisir (et il choisit presque toujours l'onglet). */
function openExternalWindow(href) {
  window.open(href, '_blank', 'noopener,width=460,height=860');
}

/** Pill CTA vers un compte/une page externe (ex: voir plus de vidéos sur le
 *  compte TikTok), en complément d'une sélection déjà affichée. */
function sectionLinkOut(linkOut) {
  const link = document.createElement('a');
  link.className = 'section-link-out';
  link.href = linkOut.href;
  link.target = '_blank';
  link.rel = 'noopener';
  link.innerHTML =
    '<svg class="section-link-out__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
      '<path d="M15 3h6v6"/><path d="M10 14 21 3"/>' +
    '</svg>' +
    '<span>' + linkOut.label + '</span>' +
    '<span class="section-link-out__arrow">▶</span>';
  link.addEventListener('click', (e) => { e.preventDefault(); openExternalWindow(linkOut.href); });
  return link;
}

/** Carte de statut en tête de fiche projet (compte / organisme) : pastille
 *  label + badge de statut (actif, en poste, mission terminée...), une
 *  ligne avatar/logo + infos, des stats optionnelles, un lien optionnel
 *  vers le compte/site réel. */
function projetStatusCard(status) {
  const box = el('div', 'projet-status');

  const header = el('div', 'projet-status__header');
  header.appendChild(el('span', 'projet-status__label', status.label));
  const pill = el('span', 'projet-status__pill' + (status.active ? ' is-active' : ''));
  pill.innerHTML = '<span class="projet-status__dot"></span>' + status.statusText;
  header.appendChild(pill);
  box.appendChild(header);

  const hasMore = !!(status.stats && status.stats.length) || !!status.link;
  const body = el('div', 'projet-status__body' + (hasMore ? ' projet-status__body--divider' : ''));
  const avatar = el('div', 'projet-status__avatar projet-status__avatar--' + (status.avatarShape || 'square'));
  if (status.avatarSrc) {
    avatar.innerHTML = '<img src="' + status.avatarSrc + '" alt="">';
    avatar.querySelector('img').addEventListener('error', () => { avatar.innerHTML = '<span>logo</span>'; });
  } else {
    avatar.innerHTML = '<span>logo</span>';
  }
  body.appendChild(avatar);

  const info = el('div', 'projet-status__info');
  if (status.title) info.appendChild(el('div', 'projet-status__title', status.title));
  const lines = el('div', 'projet-status__lines');
  (status.lines || []).forEach((line) => lines.appendChild(el('span', null, line)));
  info.appendChild(lines);
  body.appendChild(info);
  box.appendChild(body);

  if (status.stats && status.stats.length) {
    const statsRow = el('div', 'projet-status__stats');
    status.stats.forEach((s) => {
      const cell = el('div', 'projet-status__stat');
      cell.appendChild(el('span', 'projet-status__stat-value', s.value));
      cell.appendChild(el('span', 'projet-status__stat-label', s.label));
      statsRow.appendChild(cell);
    });
    box.appendChild(statsRow);
  }

  if (status.link) {
    const link = document.createElement('a');
    link.className = 'projet-status__link';
    link.href = status.link.href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = status.link.label + ' <span>↗</span>';
    link.addEventListener('click', (e) => { e.preventDefault(); openExternalWindow(status.link.href); });
    box.appendChild(link);
  }

  return box;
}

/** Bloc pour une démo interactive (ex: prototype HTML) : une carte cliquable
 *  qui ouvre la démo dans un nouvel onglet — plus fiable qu'une iframe (pas
 *  de souci de mise à l'échelle, la démo garde sa taille et son confort
 *  d'origine). */
function interactiveEmbed(src, label) {
  const card = document.createElement('a');
  card.className = 'interactive-embed';
  card.href = src;
  card.target = '_blank';
  card.rel = 'noopener';
  card.setAttribute('aria-label', 'Ouvrir « ' + label +' » dans une nouvelle fenêtre');
  card.innerHTML =
    '<span class="interactive-embed__scanlines"></span>' +
    '<span class="interactive-embed__hud">' +
      '<span>Outil interne</span>' +
      '<span class="interactive-embed__status"><span class="interactive-embed__status-dot"></span>En ligne</span>' +
    '</span>' +
    '<svg class="interactive-embed__icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="4" y="8" width="40" height="27" rx="2" stroke="currentColor" stroke-width="2.5"/>' +
      '<path d="M4 14H44" stroke="currentColor" stroke-width="2.5"/>' +
      '<circle cx="9" cy="11" r="1.2" fill="currentColor"/>' +
      '<circle cx="13" cy="11" r="1.2" fill="currentColor"/>' +
      '<path d="M17 43H31M24 35V43" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>' +
    '<span class="interactive-embed__title">' + label + '</span>' +
    '<span class="interactive-embed__sub">Le hub des pro !</span>' +
    '<span class="interactive-embed__btn">Ouvrir le hub <span class="interactive-embed__arrow">↗</span></span>';
  // Ouvre une vraie fenêtre séparée : des dimensions explicites forcent ce
  // comportement là où target="_blank" seul laisse (presque toujours) le
  // navigateur ouvrir un onglet. Si window.open est bloqué (popup blocker,
  // iframe sans allow-popups...), on NE bloque PAS l'événement : le lien
  // <a target="_blank"> natif prend alors le relais et ouvre un onglet.
  card.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const sw = window.screen.availWidth || 1440;
    const sh = window.screen.availHeight || 900;
    const w = Math.min(1280, Math.round(sw * 0.9));
    const h = Math.min(900, Math.round(sh * 0.9));
    const x = Math.round((sw - w) / 2);
    const y = Math.round((sh - h) / 2);
    const win = window.open(src, '_blank', 'noopener,width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
    if (win) { e.preventDefault(); try { win.focus(); } catch (_) {} }
    // sinon : on laisse le comportement natif du lien ouvrir un nouvel onglet
  });
  return card;
}

/** Widget de stats interactif : bandeau cliquable (abonnés/vues/likes) +
 *  courbe mensuelle avec infobulle au survol. Se redessine en interne à
 *  chaque interaction (clic sur le bandeau, survol du graphe). */
function statsChartWidget(config) {
  const W = 300, H = 96, PAD = 8;
  const state = { serie: config.default || Object.keys(config.series)[0], hover: null };
  const root = el('div', 'stats-widget');
  root.innerHTML = '<span class="stats-widget__scanlines"></span><div class="stats-widget__inner"></div>';
  const inner = root.querySelector('.stats-widget__inner');

  function fmt(key, v) {
    const s = config.series[key];
    return (Number.isInteger(v) ? String(v) : v.toFixed(1).replace('.', ',')) + s.suffix;
  }

  function curve(key) {
    const s = config.series[key], max = Math.max(...s.values);
    const pts = s.values.map((v, i) => ({
      x: (i / (s.values.length - 1)) * W,
      y: H - PAD - (v / max) * (H - PAD * 2),
      m: s.months[i], full: s.full[i], v,
      last: i === s.values.length - 1,
    }));
    let line = 'M ' + pts[0].x + ' ' + pts[0].y;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
      line += ' C ' + (p1.x + (p2.x - p0.x) / 6) + ' ' + (p1.y + (p2.y - p0.y) / 6) + ', '
            + (p2.x - (p3.x - p1.x) / 6) + ' ' + (p2.y - (p3.y - p1.y) / 6) + ', ' + p2.x + ' ' + p2.y;
    }
    return { s, pts, line, area: line + ' L ' + W + ' ' + H + ' L 0 ' + H + ' Z' };
  }

  function render() {
    const c = curve(state.serie), hv = state.hover;
    const readout = hv != null ? c.pts[hv].full : c.s.total;

    const band = config.band.map((b) => {
      const on = state.serie === b.key;
      return '<div class="stats-widget__band-item' + (on ? ' is-active' : '') + '" data-serie="' + b.key + '">'
        + '<div class="stats-widget__value">' + b.value + '</div>'
        + '<div class="stats-widget__label-row"><span class="stats-widget__label">' + b.label + '</span>'
        + '<span class="stats-widget__dot"></span></div></div>';
    }).join('');

    const grid = [12, 34, 56, 78].map((y) =>
      '<line x1="0" y1="' + y + '" x2="300" y2="' + y + '" class="stats-widget__grid-line"></line>'
    ).join('');

    const dots = c.pts.map((p, i) =>
      '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + (p.last ? 3.4 : 2) + '" class="stats-widget__dot-point' + (hv === i ? ' is-active' : '') + '"></circle>'
    ).join('');

    let tip = '';
    if (hv != null) {
      const p = c.pts[hv], left = (p.x / W) * 100 + '%';
      // Aux deux extrémités, l'infobulle centrée déborderait du cadre
      // (transform -50%) : on la cale à plat contre le bord au lieu de la
      // laisser se faire couper par l'overflow:hidden du widget.
      const edgeClass = hv === 0 ? ' is-first' : (hv === c.pts.length - 1 ? ' is-last' : '');
      tip = '<div class="stats-widget__tip-line" style="left:' + left + '"></div>'
        + '<div class="stats-widget__tooltip' + edgeClass + '" style="left:' + left + ';top:' + ((p.y / H) * 104 - 8) + 'px">'
        + '<span class="stats-widget__tooltip-value">' + fmt(state.serie, p.v) + '</span>'
        + '<span class="stats-widget__tooltip-label">' + p.full + '</span></div>';
    }

    const zones = c.pts.map((p, i) =>
      '<div class="stats-widget__zone" data-i="' + i + '" style="left:' + (i / c.pts.length) * 100 + '%;width:' + 100 / c.pts.length + '%"></div>'
    ).join('');

    // Répartition en flex (space-between) plutôt qu'un positionnement
    // absolu en % + translateX(-50%) : ce dernier faisait déborder le
    // premier libellé ("M" de mars) hors du cadre, où l'overflow:hidden
    // du widget le coupait purement et simplement.
    const labels = c.pts.map((p) =>
      '<span class="stats-widget__month">' + p.m + '</span>'
    ).join('');

    inner.innerHTML =
      '<div class="stats-widget__band">' + band + '</div>' +
      '<div class="stats-widget__chart">' +
        '<div class="stats-widget__head"><span>' + c.s.title + '</span>' +
        '<span class="stats-widget__readout' + (hv != null ? ' is-hover' : '') + '">' + readout + '</span></div>' +
        '<div class="stats-widget__plot">' +
          '<svg viewBox="0 0 300 96" preserveAspectRatio="none" class="stats-widget__svg">' +
            '<defs><linearGradient id="statsWidgetFill" x1="0" y1="0" x2="0" y2="1">' +
              '<stop offset="0%" stop-color="#7fffa0" stop-opacity="0.34"></stop>' +
              '<stop offset="100%" stop-color="#7fffa0" stop-opacity="0"></stop></linearGradient></defs>' +
            grid +
            '<path d="' + c.area + '" fill="url(#statsWidgetFill)"></path>' +
            '<path d="' + c.line + '" class="stats-widget__line"></path>' +
            dots +
          '</svg>' +
          '<div class="stats-widget__axis-max">' + c.s.axisMax + '</div>' +
          tip + zones +
        '</div>' +
        '<div class="stats-widget__months">' + labels + '</div>' +
      '</div>';
  }

  root.addEventListener('click', (e) => {
    const card = e.target.closest('[data-serie]');
    if (card) { state.serie = card.dataset.serie; state.hover = null; render(); }
  });
  root.addEventListener('mouseover', (e) => {
    const z = e.target.closest('[data-i]');
    if (z) { const i = +z.dataset.i; if (state.hover !== i) { state.hover = i; render(); } }
  });
  root.addEventListener('mouseleave', (e) => {
    if (e.target.closest('.stats-widget__plot') && state.hover !== null) { state.hover = null; render(); }
  }, true);

  render();
  return root;
}

/* =========================================================
   RENDU DU CONTENU STATIQUE (une fois au chargement)
   ========================================================= */

function renderAbout() {
  const container = document.getElementById('aboutParagraphs');
  CONTENT.aboutParagraphs.forEach((p) => {
    const item = el('div', 'bullet-item');
    item.appendChild(el('div', 'bullet-item__dot'));
    item.appendChild(el('div', 'bullet-item__text', p));
    container.appendChild(item);
  });
}

function renderTimeline(containerId, groups, groupKey, entriesKey) {
  const container = document.getElementById(containerId);
  groups.forEach((group) => {
    const block = el('div');
    const head = el('div', 'timeline-group__head');
    head.appendChild(el('div', 'timeline-group__dot'));
    head.appendChild(el('div', 'timeline-group__title', group[groupKey]));
    block.appendChild(head);

    const entries = el('div', 'timeline-entries');
    group[entriesKey].forEach((entry) => {
      const entryEl = el('div');
      const entryHead = el('div', 'timeline-entry__head');
      entryHead.appendChild(el('span', 'timeline-entry__title', entry.poste));
      if (entry.tag) entryHead.appendChild(el('span', 'timeline-entry__tag', entry.tag));
      entryEl.appendChild(entryHead);
      entryEl.appendChild(el('div', 'timeline-entry__period', entry.periode));
      if (entry.taches && entry.taches.length) {
        const tasks = el('div', 'timeline-entry__tasks');
        entry.taches.forEach((t) => tasks.appendChild(el('div', null, '– ' + t)));
        entryEl.appendChild(tasks);
      }
      entries.appendChild(entryEl);
    });
    block.appendChild(entries);
    container.appendChild(block);
  });
}

function renderProjetsList() {
  const container = document.getElementById('projetsScroll');
  container.innerHTML = '';
  container.style.gap = '4px';
  CONTENT.projets.forEach((p) => {
    const row = el('div', 'projet-row');
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.appendChild(el('span', 'projet-row__num', p.num));
    const meta = el('div', 'projet-row__meta');
    meta.appendChild(el('span', 'projet-row__name', p.entreprise));
    meta.appendChild(el('span', 'projet-row__tags', p.subtitle || p.sections.map((s) => s.tag).join(' · ')));
    row.appendChild(meta);
    const open = () => showProjetDetail(p.id);
    row.addEventListener('click', open);
    row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    container.appendChild(row);
  });
}

function showProjetDetail(id) {
  const p = CONTENT.projets.find((x) => x.id === id);
  if (!p) return;
  const list = document.getElementById('projetsScroll');
  const detail = document.getElementById('projetDetailScroll');
  detail.innerHTML = '';

  // Lien du haut = sortie directe vers le menu (le retour à la liste se
  // fait via le pied de fenêtre, voir plus bas et hideProjetDetail()).
  const back = el('div', 'projet-back', '‹ Retour au menu');
  back.setAttribute('tabindex', '0');
  const goToMenu = () => closeWindow('projets');
  back.addEventListener('click', goToMenu);
  back.addEventListener('keydown', (e) => { if (e.key === 'Enter') goToMenu(); });
  detail.appendChild(back);

  const card = el('div', 'projet-card');
  card.appendChild(el('span', 'projet-card__scanlines'));
  const head = el('div', 'projet-card__head');
  head.appendChild(el('div', 'timeline-group__dot'));
  head.appendChild(el('div', 'projet-card__title', p.entreprise));
  card.appendChild(head);
  if (p.profileImage) {
    const mediaWrap = el('div', 'projet-card__media');
    mediaWrap.appendChild(mediaTile({ src: p.profileImage, label: 'Capture profil', aspect: '1350/300' }));
    card.appendChild(mediaWrap);
  }
  if (p.statusCard) {
    card.appendChild(projetStatusCard(p.statusCard));
  }
  card.appendChild(el('div', 'projet-card__desc', p.description));
  if (p.stats && p.stats.length) {
    const stats = el('div', 'projet-stats' + (p.stats.length === 1 ? ' projet-stats--single' : ''));
    p.stats.forEach((s) => {
      const stat = el('div', 'stat-card');
      stat.appendChild(el('div', 'stat-card__value', s.value));
      stat.appendChild(el('div', 'stat-card__label', s.label));
      stats.appendChild(stat);
    });
    card.appendChild(stats);
  }
  detail.appendChild(card);

  // Le widget de stats vit hors du cadre de la carte (bloc à part entière),
  // plutôt qu'imbriqué dans le encart description/chiffres. Une pastille
  // "Statistiques" (même traitement que les tags de section plus bas) sert
  // de transition, pour ne pas enchaîner texte -> chiffres sans signal.
  if (p.statsChart) {
    const statsSection = el('div', 'projet-section');
    statsSection.appendChild(el('span', 'projet-section__tag', 'Statistiques'));
    statsSection.appendChild(statsChartWidget(p.statsChart));
    detail.appendChild(statsSection);
  }

  p.sections.forEach((sec) => {
    const secEl = el('div', 'projet-section');
    secEl.appendChild(el('span', 'projet-section__tag', sec.tag));
    secEl.appendChild(el('div', 'projet-section__text', sec.text));
    if (sec.interactive) {
      secEl.appendChild(interactiveEmbed(sec.interactive, sec.tag));
    } else if (sec.docs) {
      const grid = el('div', 'projet-grid projet-grid--docs');
      sec.docs.forEach((d) => grid.appendChild(docTile(d)));
      secEl.appendChild(grid);
    } else {
      const grid = el('div', 'projet-grid');
      for (let i = 1; i <= sec.count; i++) {
        const path = sectionMediaPath(sec, i);
        grid.appendChild(mediaTile({
          src: sec.isVideo ? undefined : path,
          video: sec.isVideo ? path : undefined,
          poster: sec.isVideo ? sectionPosterPath(sec, i) : undefined,
          views: sec.views ? sec.views[i - 1] : undefined,
          label: sec.tag,
          aspect: sec.aspect || '1/1',
        }));
      }
      secEl.appendChild(grid);
      if (sec.linkOut) secEl.appendChild(sectionLinkOut(sec.linkOut));
    }
    detail.appendChild(secEl);
  });

  list.hidden = true;
  detail.hidden = false;
  // Repart toujours du haut : sans ça, la fenêtre garde le défilement du
  // projet précédemment consulté (même élément DOM réutilisé).
  detail.scrollTop = 0;
  // Le pied de fenêtre ramène maintenant à la liste des projets (le retour
  // direct au menu se fait via le lien en haut du détail, voir plus haut).
  document.getElementById('projetsFooter').textContent = '‹ Tous les projets';
}

function hideProjetDetail() {
  document.getElementById('projetDetailScroll').hidden = true;
  document.getElementById('projetsScroll').hidden = false;
  document.getElementById('projetsFooter').textContent = '‹ Retour au menu';
}

function renderSoftware() {
  const grid = document.getElementById('softwareGrid');
  CONTENT.logiciels.forEach((l) => {
    const item = el('div', 'software-item');
    const badge = el('div', 'badge', '<span>' + l.short + '</span>');
    item.appendChild(badge);
    item.appendChild(el('div', 'software-item__name', l.name));
    grid.appendChild(item);
  });
}

function renderContact() {
  const list = document.getElementById('contactList');
  CONTENT.contactInfos.forEach((c) => {
    const item = el('div', 'contact-item');
    item.appendChild(el('div', 'badge', '<span>' + c.icon + '</span>'));
    const meta = el('div');
    const valueHtml = c.href ? '<a href="' + c.href + '">' + c.value + '</a>' : c.value;
    meta.appendChild(el('div', 'contact-item__value', valueHtml));
    meta.appendChild(el('div', 'contact-item__label', c.label));
    item.appendChild(meta);
    list.appendChild(item);
  });
}

function renderMenu() {
  const list = document.getElementById('menuList');
  CONTENT.menuItems.forEach((item) => {
    const row = el('div', 'menu-item');
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.appendChild(el('span', 'menu-item__num', item.num));
    row.appendChild(el('span', 'menu-item__label', item.label));
    const open = () => openWindow(item.target);
    row.addEventListener('click', open);
    row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    list.appendChild(row);
  });
}

/* =========================================================
   ÉTAT / NAVIGATION (accueil → boot → menu, fenêtres)
   ========================================================= */

const screens = {
  home: document.getElementById('screenHome'),
  boot: document.getElementById('screenBoot'),
  menu: document.getElementById('screenMenu'),
};

function showScreen(name) {
  Object.entries(screens).forEach(([key, node]) => { node.hidden = key !== name; });
}

function startBoot() {
  showScreen('boot');
  const container = document.getElementById('bootLines');
  container.innerHTML = '';
  const lineNodes = CONTENT.bootTexts.map(() => {
    const node = el('div', 'boot-line');
    container.appendChild(node);
    return node;
  });

  const progressWrap = el('div', 'boot-progress');
  progressWrap.hidden = true;
  const track = el('div', 'boot-progress__track');
  const fill = el('div', 'boot-progress__fill');
  const pct = el('div', 'boot-progress__pct', '0%');
  track.appendChild(fill);
  progressWrap.appendChild(track);
  progressWrap.appendChild(pct);
  container.appendChild(progressWrap);

  function typeLine(lineIndex, charIndex) {
    if (lineIndex >= CONTENT.bootTexts.length) return;
    const def = CONTENT.bootTexts[lineIndex];
    const node = lineNodes[lineIndex];
    if (def.highlight) node.classList.add('boot-line--highlight');
    if (charIndex <= def.text.length) {
      node.innerHTML = def.text.slice(0, charIndex) + '<span class="boot-cursor"></span>';
      setTimeout(() => typeLine(lineIndex, charIndex + 1), 22);
    } else {
      node.textContent = def.text;
      const isLast = lineIndex === CONTENT.bootTexts.length - 1;
      if (isLast) {
        setTimeout(runProgress, 350);
      } else {
        setTimeout(() => typeLine(lineIndex + 1, 0), 380);
      }
    }
  }

  function runProgress() {
    progressWrap.hidden = false;
    let p = 0;
    function tick() {
      p = Math.min(100, p + 5);
      fill.style.width = p + '%';
      pct.textContent = p + '%';
      if (p < 100) {
        setTimeout(tick, 40);
      } else {
        setTimeout(() => showScreen('menu'), 500);
      }
    }
    setTimeout(tick, 40);
  }

  typeLine(0, 0);
}

const CLOSE_ANIM_MS = 280;

function openWindow(name) {
  const node = document.getElementById('window' + capitalize(name));
  if (!node) return;
  node.classList.remove('is-closing');
  node.hidden = false;
  // relance l'animation popIn même si la fenêtre était déjà montée
  node.style.animation = 'none';
  void node.offsetWidth;
  node.style.animation = '';
  updateCrtVisibility();
}

function closeWindow(name) {
  const node = document.getElementById('window' + capitalize(name));
  if (!node || node.hidden) return;
  node.classList.add('is-closing');
  // L'écran CRT redevient visible dès le début du fondu de fermeture (pas
  // seulement une fois la fenêtre totalement fermée) : sinon le menu reste
  // invisible pendant les 280ms de transition et "saute" d'un coup à la fin.
  updateCrtVisibility();
  setTimeout(() => {
    node.hidden = true;
    node.classList.remove('is-closing');
    if (name === 'projets') hideProjetDetail();
  }, CLOSE_ANIM_MS);
}

// Une fenêtre pop-up plus courte que son contenu ne recouvre pas forcément
// tout l'écran CRT (positionné indépendamment derrière) — on le masque tant
// qu'une fenêtre est pleinement ouverte pour éviter qu'il ne dépasse en
// dessous. Une fenêtre en train de se refermer (.is-closing) ne compte plus
// comme "ouverte" ici, pour laisser le CRT réapparaître pendant le fondu.
function updateCrtVisibility() {
  const anyOpen = document.querySelector('.popup-window:not([hidden]):not(.is-closing)');
  document.getElementById('crtScreen').style.visibility = anyOpen ? 'hidden' : '';
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* =========================================================
   INIT
   ========================================================= */

document.getElementById('homeName').textContent = CONTENT.displayName;
document.getElementById('homeTagline').textContent = CONTENT.tagline;

// Étiquette "PORTFOLIO - <MOIS> <ANNÉE>" : se met à jour toute seule à
// chaque chargement, plus besoin d'y retoucher à la main chaque mois.
(() => {
  const label = document.getElementById('sysLabel');
  const moisAnnee = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  label.textContent = `PORTFOLIO - ${moisAnnee.toUpperCase()}`;
})();

// Allumage de l'écran CRT : l'écran est noir/éteint par défaut (voir
// .crt-tube dans css/style.css), le moniteur (photo) est donc déjà là dès
// l'arrivée. Une fois la photo chargée (plus bas), startCrtPowerOn() joue
// le balayage ligne à ligne (.is-turning-on) puis bascule sur l'état
// allumé stable (.is-on, scintillement normal) — jamais de flash de
// contenu qui apparaît puis se recache. Filet de sécurité : l'allumage se
// déclenche quand même après 2,5s si la photo (et son repli) n'ont pas pu
// se charger.
let startCrtPowerOn = () => {
  startCrtPowerOn = () => {}; // ne joue qu'une fois
  const screenEl = document.getElementById('crtScreen');
  const ON_MS = 1150; // durée de l'animation crt-reveal
  screenEl.classList.add('is-turning-on');
  setTimeout(() => {
    screenEl.classList.remove('is-turning-on');
    screenEl.classList.add('is-on');
  }, ON_MS);
};
setTimeout(() => startCrtPowerOn(), 2500);

renderMenu();
renderAbout();
renderTimeline('parcoursScroll', CONTENT.parcours, 'entreprise', 'postes');
renderTimeline('formationScroll', CONTENT.formations, 'ecole', 'diplomes');
renderProjetsList();
renderSoftware();
renderContact();

document.getElementById('btnEntree').addEventListener('click', startBoot);
document.getElementById('btnBackHome').addEventListener('click', () => showScreen('home'));

document.querySelectorAll('[data-close]').forEach((node) => {
  node.addEventListener('click', () => closeWindow(node.getAttribute('data-close')));
});

// Pied de la fenêtre "Mes projets" : pas de data-close fixe, son action
// dépend de la vue en cours (liste -> menu, détail -> liste), voir
// showProjetDetail() / hideProjetDetail() pour le texte affiché.
document.getElementById('projetsFooter').addEventListener('click', () => {
  const detailVisible = !document.getElementById('projetDetailScroll').hidden;
  if (detailVisible) hideProjetDetail(); else closeWindow('projets');
});

/* --- Visionneuse vidéo (clic sur une vidéo = grand format, avec le son) --- */
const videoLightbox = document.getElementById('videoLightbox');
const videoLightboxPlayer = document.getElementById('videoLightboxPlayer');

function openVideoLightbox(src, poster) {
  videoLightboxPlayer.src = src;
  if (poster) videoLightboxPlayer.poster = poster;
  videoLightboxPlayer.muted = false;
  videoLightbox.hidden = false;
  videoLightboxPlayer.play().catch(() => {});
}

function closeVideoLightbox() {
  videoLightboxPlayer.pause();
  videoLightboxPlayer.removeAttribute('src');
  videoLightboxPlayer.load();
  videoLightbox.hidden = true;
}

document.getElementById('videoLightboxClose').addEventListener('click', closeVideoLightbox);
document.getElementById('videoLightboxBackdrop').addEventListener('click', closeVideoLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !videoLightbox.hidden) closeVideoLightbox();
});

/* --- Visionneuse document : clic sur un PDF = toutes ses pages en grand,
 *  rendues en images (fiable partout, sans dépendre du lecteur PDF du
 *  navigateur). Le lien "Ouvrir le PDF" pointe vers le vrai fichier. --- */
const docLightbox = document.getElementById('docLightbox');
const docLightboxPages = document.getElementById('docLightboxPages');

function openPdfLightbox(file, title, pages) {
  document.getElementById('docLightboxTitle').textContent = title || 'Document';
  document.getElementById('docLightboxOpen').href = file;
  const base = file.replace(/\.pdf$/i, '');
  const total = pages || 1;
  let html = '';
  for (let i = 1; i <= total; i++) {
    html += '<img class="doc-lightbox__page" src="' + base + '-p' + i + '.jpg" ' +
            'alt="' + (title || 'Document') + ' — page ' + i + '/' + total + '" loading="lazy">';
  }
  docLightboxPages.innerHTML = html;
  docLightboxPages.scrollTop = 0;
  docLightbox.hidden = false;
}

function closePdfLightbox() {
  docLightboxPages.innerHTML = '';
  docLightbox.hidden = true;
}

document.getElementById('docLightboxClose').addEventListener('click', closePdfLightbox);
document.getElementById('docLightboxBackdrop').addEventListener('click', closePdfLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !docLightbox.hidden) closePdfLightbox();
});

// Photo de bureau : deux cadrages selon la taille d'écran —
//   paysage (desk-photo-desktop.jpg) sur ordinateur,
//   portrait (desk-photo.png) sur mobile / tablette.
// Le calage de l'écran vert (.crt-screen) est fait par CSS pour chaque cadrage.
// Repli : la photo portrait, puis placeholder visuel.
(() => {
  const img = document.getElementById('deskPhotoImg');
  const placeholder = document.getElementById('deskPhotoPlaceholder');
  const mqDesktop = window.matchMedia('(min-width: 1024px)');

  const srcFor = () => (mqDesktop.matches
    ? 'assets/img/desk-photo-desktop.jpg'
    : 'assets/img/desk-photo.png');

  const load = (src, isFallback) => {
    const probe = new Image();
    probe.onload = () => {
      // Évite un remplacement inutile si le cadrage n'a pas changé entre-temps.
      if (!isFallback && src !== srcFor()) { load(srcFor(), false); return; }
      img.src = probe.src; img.hidden = false; placeholder.hidden = true;
      startCrtPowerOn();
    };
    probe.onerror = () => { if (!isFallback) load('assets/img/desk-photo.png', true); };
    probe.src = src;
  };

  load(srcFor(), false);
  // Rebascule si on franchit le point de rupture (rotation, redimensionnement).
  const onChange = () => load(srcFor(), false);
  if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', onChange);
  else mqDesktop.addListener(onChange);
})();
