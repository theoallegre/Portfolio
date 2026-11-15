/* =========================================================
   CONTENU — modifie tes infos ici (aucun autre fichier à toucher
   pour changer les textes)
   ========================================================= */

const CONTENT_FR = {
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

  // Séquence de démarrage façon BIOS (après le clic sur ENTRÉE) : tes
  // compétences se chargent comme des modules.
  boot: {
    header: 'TA-BIOS v2.6 · THÉO ALLÈGRE SYSTEMS',
    stat: { label: 'Expérience com & marketing', value: 4, unit: 'ANS' },
    modulesTitle: 'Chargement des modules :',
    modules: ['Stratégie & communication', 'Marketing digital', 'Réseaux sociaux', 'Image de marque', 'Vidéo & print'],
    access: 'ACCÈS AUTORISÉ · BIENVENUE',
  },

  menuItems: [
    { num: '01', label: 'À propos', target: 'apropos' },
    { num: '02', label: 'Expériences', target: 'parcours' },
    { num: '03', label: 'Formation', target: 'formation' },
    { num: '04', label: 'Mes projets', target: 'projets' },
    { num: '05', label: 'Logiciels et Contact', target: 'contact' },
  ],
};

/* =========================================================
   VERSION ANGLAISE — uniquement les textes. Tout le reste (photos,
   vidéos, dossiers, chiffres…) est repris de CONTENT_FR ci-dessus :
   une modification de média ne se fait donc qu'à un seul endroit.
   Les listes sont fusionnées dans l'ordre (1er élément ↔ 1er élément).
   ========================================================= */
const CONTENT_EN_TEXT = {
  tagline: 'Communications & Marketing Officer',

  aboutParagraphs: [
    "I'm Théo. I've been working in communications and marketing for 4 years, and I never get tired of it. I'm curious and creative, which is exactly why I chose this field.",
    'I love building universes, as this portfolio shows.',
    'Today I put that curiosity to work at Léo Lagrange Formation, where I run digital communications end to end: from strategy to creation.',
    "Now I'm eager to bring that energy to new projects.",
  ],

  parcours: [
    {
      postes: [
        { poste: 'Communications Officer', tag: 'Permanent', periode: 'Mar 2026 – present · 5 months · Occitanie, Nouvelle-Aquitaine, Centre-Val de Loire, Île-de-France', taches: ['Social media management', 'Post creation', 'Editorial calendar management', 'Promotional and informational print design', 'Website SEO', 'Audio and video recording, editing', 'Online reputation: monitoring Google and Anotéa reviews'] },
        { poste: 'Communications Officer', tag: 'Fixed-term', periode: 'Sep 2025 – Feb 2026 · 6 months · Occitanie, Nouvelle-Aquitaine, Centre-Val de Loire, Île-de-France', taches: ['Scope extended to the Nouvelle-Aquitaine and Centre-Val de Loire / Île-de-France regions'] },
        { poste: 'Communications Officer (Occitanie)', tag: 'Work-study', periode: 'Sep 2023 – Aug 2025 · 2 years · Toulouse, Occitanie · On-site' },
      ],
    },
    {
      postes: [
        { poste: 'Marketing & Communications Assistant', tag: 'Work-study', periode: 'Sep 2022 – Sep 2023 · 1 yr 1 mo · Toulouse, Occitanie', taches: ['Social media content creation', 'Community management on Discord', 'Streamer CRM management', 'Built a marketing board'] },
      ],
    },
    {
      postes: [
        { poste: 'Intern', tag: 'Internship', periode: 'Jun – Aug 2021', taches: ['Built a website', 'Social media content creation', 'Negotiated with suppliers'] },
      ],
    },
  ],

  formations: [
    { diplomes: [{ poste: "Master's in Digital Marketing / Communication & Social Media", periode: 'Graduated June 2025' }] },
    { diplomes: [{ poste: 'Bachelor in Marketing & Communication', periode: 'Graduated 2023', taches: ['Member of the MINDFOX student union, communications team', 'Erasmus year in Haarlem, the Netherlands'] }] },
    { diplomes: [{ poste: 'French Baccalaureate STI2D (science & technology)', periode: 'Graduated June 2019', taches: ['With honours', 'Vice-president of the student council'] }] },
  ],

  projets: [
    {
      subtitle: 'Vocational training organisation',
      description: "A vocational training organisation formed in January 2025 from the merger of eight institutes of the Fédération Léo Lagrange. I've been its communications officer for three years: first a year and a half at Instep Occitanie, then at Léo Lagrange Formation after the merger.\n\nMerging into a single organisation turned communications into a proper department. Previously alone in the role, I'm now part of a team made up of a director and two communications officers. We started from a blank page and had to rework everything.",
      statusCard: {
        label: 'Training organisation', statusText: 'current role',
        lines: ['🎓 formerly Instep Occitanie · merged in 2025'],
        stats: [{ label: 'Regional branches' }, { label: 'Regional sites' }, { label: 'Regions I handle comms for' }],
        link: { label: 'Visit the website' },
      },
      sections: [
        { tag: 'Visuals', text: 'On social media, our new brand guidelines led us to rethink all our formats. I was in charge of content creation, from photo posts to more elaborate designs.' },
        { tag: 'Videos', text: 'Developing video formats mattered to me. We chose testimonials, letting our trainees and trainers share their journeys and experiences authentically.' },
        { tag: 'Print', text: 'For print, we overhauled everything that existed to adapt course sheets, the course brochure, flyers, posters and signage to each region. Course sheets and the brochure meet Qualiopi and funder requirements, while flyers serve a more commercial, accessible purpose. Below is what this looks like in practice for one programme: “Projet Pro”.',
          docs: [{ title: 'Course sheet' }, { title: 'Brochure' }, { title: 'Flyer' }] },
        { tag: 'Intranet', text: 'With my regional director, we noticed that teams often felt lost in the amount of information to take in, long-standing and new staff alike, especially trainers. That is where the idea of a simple, accessible intranet came from, built around 5 key landmarks to know and remember.' },
      ],
    },
    {
      subtitle: 'Independent video game studio',
      description: 'Soulgame Studio is an independent video game studio based in Toulouse. I spent a year there as communications assistant, growing their social media presence to promote their new game “Minishoot Adventure”.',
      statusCard: { label: 'Video game studio', statusText: 'completed' },
      sections: [
        { tag: 'Videos', text: 'Short-form video content (TikTok, Reels, Shorts) to support the game launch.' },
      ],
    },
    {
      subtitle: 'TikTok account',
      description: 'I launched this travel TikTok account in March 2026 and run it from A to Z: editorial strategy, scriptwriting, voice-over, editing and replying to comments.\n\nFormats keep evolving with the travel trends I follow, but the goal stays the same: sharing hidden spots and gems, in France and abroad.',
      statusCard: {
        label: 'TikTok account', statusText: 'active',
        lines: ['✈️ Hidden spots', '💡 1 travel gem a day'],
        link: { label: 'Open the TikTok account' },
      },
      statsChart: {
        series: {
          abonnes: { title: 'Followers (cumulative)', total: 'total · 26.3K', axisMax: '26.3K', full: ['March', 'April', 'May', 'June', 'July', 'August'] },
          vues: { title: 'Views per month', total: 'total · 10.9M', axisMax: '4.5M', full: ['March', 'April', 'May', 'June', 'July', 'August'] },
          likes: { title: 'Likes per month', total: 'total · 500.2K', axisMax: '115.5K', full: ['March', 'April', 'May', 'June', 'July', 'August'] },
        },
        band: [{ value: '26.3K', label: 'Followers' }, { value: '10.9M', label: 'Views' }, { value: '500.2K', label: 'Likes' }],
      },
      sections: [
        { tag: 'Video', text: "Here's a selection of my best-performing videos: a reveal focused on a city, another on a hidden spot showcasing a little-known gem, and one on a region.\n\nThree destination scales, the same storytelling mechanic.",
          views: ['127K', '108K', '72.8K'] },
      ],
    },
  ],

  contactInfos: [
    { label: 'Email' },
    { label: 'Phone', value: '+33 6 82 32 64 31' },
    { label: 'LinkedIn' },
  ],

  boot: {
    stat: { label: 'Comms & marketing experience', unit: 'YRS' },
    modulesTitle: 'Loading modules:',
    modules: ['Strategy & communications', 'Digital marketing', 'Social media', 'Brand image', 'Video & print'],
    access: 'ACCESS GRANTED · WELCOME',
  },

  menuItems: [
    { label: 'About' },
    { label: 'Experience' },
    { label: 'Education' },
    { label: 'My projects' },
    { label: 'Software & Contact' },
  ],
};

// Fusion : les textes anglais remplacent les textes français, le reste est conservé.
function mergeText(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) {
    if (base.length && typeof base[0] !== 'object') return over; // liste de textes : remplacée
    return base.map((b, i) => mergeText(b, over[i]));
  }
  if (base && typeof base === 'object' && over && typeof over === 'object') {
    const out = { ...base };
    Object.keys(over).forEach((k) => { out[k] = mergeText(base[k], over[k]); });
    return out;
  }
  return over;
}

// Langue : ?lang=en|fr dans l'adresse (lien à envoyer), sinon le dernier
// choix du visiteur (bouton FR | EN), sinon le français.
const LANG = (() => {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'fr') { try { localStorage.setItem('ta-lang', q); } catch (e) { /* stockage bloqué */ } return q; }
  try { const s = localStorage.getItem('ta-lang'); if (s === 'en' || s === 'fr') return s; } catch (e) { /* idem */ }
  return 'fr';
})();
const CONTENT = LANG === 'en' ? mergeText(CONTENT_FR, CONTENT_EN_TEXT) : CONTENT_FR;

// Libellés de l'interface (boutons, titres de fenêtres, aides…).
const UI = {
  fr: {
    locale: 'fr-FR', decimal: ',',
    metaDesc: 'Portfolio de Théo Allègre, chargé de communication & marketing — réseaux sociaux, vidéo, print.',
    homeSub: 'Communication · Marketing · Vidéo & Print', enter: 'ENTRÉE',
    menuTitle: 'MENU PRINCIPAL', backHome: '‹ Retour à l\'accueil', backMenu: '‹ Retour au menu', allProjects: '‹ Tous les projets',
    winApropos: 'À PROPOS', winParcours: 'EXPÉRIENCES', winFormation: 'FORMATION', winProjets: 'MES PROJETS', winContact: 'LOGICIELS ET CONTACT',
    quote: 'Curieux, créatif, autodidacte', software: 'Logiciels & Outils', contact: 'Contact',
    close: 'Fermer', closeVideo: 'Fermer la vidéo', closeDoc: 'Fermer le document', openPdf: 'Ouvrir le PDF ↗',
    skip: 'PASSER L\'INTRO ›', soundOn: 'SON : ON', soundOff: 'SON : OFF', soundBlocked: '🔊 ACTIVER LE SON',
    copy: 'COPIER', copied: 'COPIÉ ✓', copyAria: 'Copier l\'adresse e-mail',
    tabAway: '▌ Reviens… l\'écran chauffe', doc: 'Document', page: 'page', visual: 'Visuel', logo: 'logo',
    playVideo: (l) => 'Lire ' + l + ' en grand avec le son', viewDoc: (t) => 'Voir « ' + t + ' » en entier',
    embedHud: 'Outil interne', embedOnline: 'En ligne', embedSub: 'Le hub des pro !', embedBtn: 'Ouvrir le hub',
    embedAria: (l) => 'Ouvrir « ' + l + ' » dans une nouvelle fenêtre',
    langAria: 'Switch to English',
  },
  en: {
    locale: 'en-GB', decimal: '.',
    metaDesc: 'Portfolio of Théo Allègre, communications & marketing officer — social media, video, print.',
    homeSub: 'Communications · Marketing · Video & Print', enter: 'ENTER',
    menuTitle: 'MAIN MENU', backHome: '‹ Back to home', backMenu: '‹ Back to menu', allProjects: '‹ All projects',
    winApropos: 'ABOUT', winParcours: 'EXPERIENCE', winFormation: 'EDUCATION', winProjets: 'MY PROJECTS', winContact: 'SOFTWARE & CONTACT',
    quote: 'Curious, creative, self-taught', software: 'Software & Tools', contact: 'Contact',
    close: 'Close', closeVideo: 'Close video', closeDoc: 'Close document', openPdf: 'Open the PDF ↗',
    skip: 'SKIP INTRO ›', soundOn: 'SOUND: ON', soundOff: 'SOUND: OFF', soundBlocked: '🔊 ENABLE SOUND',
    copy: 'COPY', copied: 'COPIED ✓', copyAria: 'Copy email address',
    tabAway: '▌ Come back… the screen is warming up', doc: 'Document', page: 'page', visual: 'Visual', logo: 'logo',
    playVideo: (l) => 'Play ' + l + ' full size with sound', viewDoc: (t) => 'View “' + t + '” in full',
    embedHud: 'Internal tool', embedOnline: 'Online', embedSub: 'The staff hub!', embedBtn: 'Open the hub',
    embedAria: (l) => 'Open “' + l + '” in a new window',
    langAria: 'Passer en français',
  },
}[LANG];

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
function mediaTile({ src, video, poster, views, label = UI.visual, aspect = '1/1' }) {
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
    tile.setAttribute('aria-label', UI.playVideo(label));
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
  tile.setAttribute('aria-label', UI.viewDoc(d.title));
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
    avatar.querySelector('img').addEventListener('error', () => { avatar.innerHTML = '<span>' + UI.logo + '</span>'; });
  } else {
    avatar.innerHTML = '<span>' + UI.logo + '</span>';
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
  card.setAttribute('aria-label', UI.embedAria(label));
  card.innerHTML =
    '<span class="interactive-embed__scanlines"></span>' +
    '<span class="interactive-embed__hud">' +
      '<span>' + UI.embedHud + '</span>' +
      '<span class="interactive-embed__status"><span class="interactive-embed__status-dot"></span>' + UI.embedOnline + '</span>' +
    '</span>' +
    '<svg class="interactive-embed__icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="4" y="8" width="40" height="27" rx="2" stroke="currentColor" stroke-width="2.5"/>' +
      '<path d="M4 14H44" stroke="currentColor" stroke-width="2.5"/>' +
      '<circle cx="9" cy="11" r="1.2" fill="currentColor"/>' +
      '<circle cx="13" cy="11" r="1.2" fill="currentColor"/>' +
      '<path d="M17 43H31M24 35V43" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>' +
    '<span class="interactive-embed__title">' + label + '</span>' +
    '<span class="interactive-embed__sub">' + UI.embedSub + '</span>' +
    '<span class="interactive-embed__btn">' + UI.embedBtn + ' <span class="interactive-embed__arrow">↗</span></span>';
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
    return (Number.isInteger(v) ? String(v) : v.toFixed(1).replace('.', UI.decimal)) + s.suffix;
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
    // Clic : même effet que l'ouverture des fenêtres (voir crtSwap).
    const open = () => crtSwap(container, document.getElementById('projetDetailScroll'), () => showProjetDetail(p.id));
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
  const back = el('div', 'projet-back', UI.backMenu);
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
  document.getElementById('projetsFooter').textContent = UI.allProjects;
}

function hideProjetDetail() {
  document.getElementById('projetDetailScroll').hidden = true;
  document.getElementById('projetsScroll').hidden = false;
  document.getElementById('projetsFooter').textContent = UI.backMenu;
}

// Liste ↔ fiche projet : exactement l'effet des fenêtres. Le panneau
// quitté se replie en ligne (win-off), le nouveau s'ouvre comme un tube
// (win-on) avec les mêmes parasites et les mêmes sons.
function crtSwap(fromEl, toEl, swap) {
  if (fromEl.classList.contains('is-crt-off')) return;
  if (reduceMotionPref) { swap(); return; }
  const win = fromEl.closest('.popup-window');
  fromEl.classList.remove('is-crt-on'); // sinon l'ouverture précédente l'emporte sur le repli
  fromEl.classList.add('is-crt-off');
  sfx.close();
  setTimeout(() => {
    fromEl.classList.remove('is-crt-off');
    swap();
    toEl.classList.remove('is-crt-on'); void toEl.offsetWidth; toEl.classList.add('is-crt-on');
    win.classList.remove('is-static'); void win.offsetWidth; win.classList.add('is-static');
    sfx.open();
  }, 260);
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
    // E-mail : bouton « Copier » (plus rapide qu'ouvrir un logiciel de mail).
    if (c.href && c.href.startsWith('mailto:') && navigator.clipboard) {
      const btn = el('button', 'copy-btn', UI.copy);
      btn.type = 'button';
      btn.setAttribute('aria-label', UI.copyAria);
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(c.value).then(() => {
          btn.textContent = UI.copied; btn.classList.add('is-done'); sfx.ok();
          setTimeout(() => { btn.textContent = UI.copy; btn.classList.remove('is-done'); }, 1600);
        }).catch(() => { window.location.href = c.href; });
      });
      meta.appendChild(btn);
    }
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
    const label = el('span', 'menu-item__label', item.label);
    row.appendChild(label);
    const open = () => openWindow(item.target);
    row.addEventListener('click', open);
    // Survol ou flèches : la ligne est « sélectionnée » (curseur ▶).
    row.addEventListener('mouseenter', () => selectMenuRow(row));
    row.addEventListener('focus', () => selectMenuRow(row));
    row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    list.appendChild(row);
  });
}

let selectedMenuRow = null;
function selectMenuRow(row) {
  if (selectedMenuRow === row) return;
  if (selectedMenuRow) selectedMenuRow.classList.remove('is-selected');
  selectedMenuRow = row;
  row.classList.add('is-selected');
  sfx.hover();
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

/* --- Son : bruitages synthétisés (Web Audio, aucun fichier à charger).
 *  L'intro se lance toute seule. Le son joue d'emblée si le navigateur
 *  l'autorise ; sinon (cas le plus courant à la 1re visite) il démarre au
 *  premier clic ou à la première touche, calé sur l'image en cours.
 *  Coupable via le bouton « SON », mémorisé. --- */
const sfx = (() => {
  let ctx = null, on = true, out = null, introBus = null, master = null, shaped = null, onRunning = null;
  try { on = localStorage.getItem('ta-sound') !== 'off'; } catch (e) { /* navigation privée */ }
  const btn = document.getElementById('soundToggle');
  // Trois états affichés : coupé, bloqué par le navigateur (pas encore de
  // clic : règle de tous les navigateurs), ou actif.
  const blocked = () => on && (!ctx || ctx.state !== 'running');
  const paint = () => {
    btn.textContent = !on ? UI.soundOff : blocked() ? UI.soundBlocked : UI.soundOn;
    btn.classList.toggle('is-blocked', blocked());
    btn.setAttribute('aria-pressed', String(on && !blocked()));
  };
  const save = () => { try { localStorage.setItem('ta-sound', on ? 'on' : 'off'); } catch (e) { /* idem */ } };
  function unlock() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      // Compresseur final : tout reste présent sans saturer.
      master = ctx.createDynamicsCompressor();
      master.threshold.value = -20; master.knee.value = 10; master.ratio.value = 4;
      master.attack.value = 0.003; master.release.value = 0.2;
      // Volume général régulé (ne pas « casser les oreilles ») + limiteur qui
      // plafonne les crêtes, quel que soit le nombre de sons superposés.
      const volume = ctx.createGain(); volume.gain.value = 0.45;
      const limiter = ctx.createDynamicsCompressor();
      limiter.threshold.value = -12; limiter.knee.value = 0; limiter.ratio.value = 20;
      limiter.attack.value = 0.001; limiter.release.value = 0.15;
      master.connect(volume).connect(limiter).connect(ctx.destination);
      // Dès que le son devient disponible (clic, ou navigateur qui l'autorise
      // tout seul après coup) : bouton à jour + bande-son de l'intro si elle tourne.
      ctx.onstatechange = () => { paint(); if (ctx.state === 'running' && onRunning) onRunning(); };
      // Saturation douce (intro + impacts) : ajoute des harmoniques, pour que
      // les graves s'entendent aussi sur des haut-parleurs de portable.
      shaped = ctx.createWaveShaper();
      const curve = new Float32Array(1024);
      for (let i = 0; i < 1024; i++) { const x = i / 511.5 - 1; curve[i] = Math.tanh(x * 2.6) / Math.tanh(2.6); }
      shaped.curve = curve; shaped.oversample = '2x';
      shaped.connect(master);
    }
    if (ctx.state === 'suspended') return ctx.resume().catch(() => {});
    return Promise.resolve();
  }
  // Rien n'est planifié tant que le son n'est pas réellement autorisé :
  // sinon tout partirait d'un coup au moment du déblocage.
  const live = () => on && ctx && ctx.state === 'running';
  // Sortie courante : le bus de l'intro pendant sa planification, sinon les haut-parleurs.
  const dest = () => out || master;
  function tone(freq, dur, type, vol, when, slideTo) {
    if (!live()) return;
    const t = ctx.currentTime + (when || 0);
    if (t + dur < ctx.currentTime) return; // déjà passé (reprise en cours d'intro)
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol || 0.05, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain).connect(dest());
    osc.start(t); osc.stop(t + dur + 0.03);
  }
  let noiseBuf = null;
  const getNoise = () => {
    if (!noiseBuf) {
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    return noiseBuf;
  };
  function noise(dur, vol, freq, when) {
    if (!live()) return;
    const t = ctx.currentTime + (when || 0);
    if (t + dur < ctx.currentTime) return;
    const src = ctx.createBufferSource(), filt = ctx.createBiquadFilter(), gain = ctx.createGain();
    src.buffer = getNoise(); src.loop = true;
    filt.type = 'bandpass'; filt.frequency.value = freq || 2000;
    gain.gain.setValueAtTime(vol || 0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filt).connect(gain).connect(dest());
    src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
  }

  // Bande-son de l'intro, planifiée d'un coup sur l'horloge audio (donc
  // calée sur l'image), dans un bus (avec écho) qu'on coupe net si on passe.
  // T = durées en ms : { noise, title, hold, decode } (voir asciiDecode).
  // elapsed = ms déjà écoulées de l'intro (son débloqué en cours de route) :
  // l'horloge de départ est reculée d'autant, ce qui est passé est ignoré.
  function introScore(T, elapsed) {
    if (!live()) return;
    const el = (elapsed || 0) / 1000, s = (ms) => ms / 1000;
    const tTitle = s(T.noise), tHold = s(T.noise + T.title);
    const tDecode = s(T.noise + T.title + T.hold), tEnd = tDecode + s(T.decode);
    if (el >= tEnd) return;
    introStop();
    introBus = ctx.createGain(); introBus.gain.value = 0.7; introBus.connect(shaped); // intro un peu en retrait (demande de Théo)
    // Écho léger : donne de l'espace aux bips et à l'impact.
    const dl = ctx.createDelay(1), fb = ctx.createGain(), wet = ctx.createGain();
    dl.delayTime.value = 0.17; fb.gain.value = 0.32; wet.gain.value = 0.28;
    introBus.connect(dl); dl.connect(fb).connect(dl); dl.connect(wet).connect(master);
    const bus = introBus;
    setTimeout(() => { try { wet.disconnect(); } catch (e) { /* déjà coupé */ } }, (tEnd - el + 3) * 1000);
    out = introBus;
    const now = ctx.currentTime - el;
    const at = (sec) => sec - el; // délai depuis maintenant, pour tone()/noise()
    const ramp = (param, pts) => { // [[temps, valeur], ...] en exponentiel
      param.setValueAtTime(pts[0][1], now + pts[0][0]);
      for (let i = 1; i < pts.length; i++) param.exponentialRampToValueAtTime(pts[i][1], now + pts[i][0]);
    };

    // A. Grondement de fond sur toute l'intro : deux scies graves désaccordées.
    const dg = ctx.createGain(), dlp = ctx.createBiquadFilter();
    dlp.type = 'lowpass'; dlp.Q.value = 3;
    ramp(dlp.frequency, [[0, 600], [tHold, 1600], [tDecode, 900], [tEnd, 4200]]);
    ramp(dg.gain, [[0, 0.0001], [0.4, 0.09], [tHold, 0.13], [tDecode, 0.08], [tEnd - 0.04, 0.18], [tEnd + 0.03, 0.0001]]);
    dlp.connect(dg).connect(bus);
    [55, 55.6, 110.3].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(f, now);
      o.frequency.exponentialRampToValueAtTime(f * 2, now + tEnd); // monte d'une octave sur toute l'intro
      const g = ctx.createGain(); g.gain.value = i === 2 ? 0.4 : 1;
      o.connect(g).connect(dlp); o.start(now); o.stop(now + tEnd + 0.1);
    });

    // B. Souffle de données : bruit filtré qui monte, s'efface sous le nom, remonte.
    const hiss = ctx.createBufferSource(), hf = ctx.createBiquadFilter(), hg = ctx.createGain();
    hiss.buffer = getNoise(); hiss.loop = true;
    hf.type = 'bandpass'; hf.Q.value = 0.9;
    ramp(hf.frequency, [[0, 1500], [tEnd, 6000]]);
    ramp(hg.gain, [[0, 0.0001], [tTitle, 0.05], [tHold, 0.03], [tEnd, 0.1]]);
    hiss.connect(hf).connect(hg).connect(bus);
    hiss.start(now); hiss.stop(now + tEnd + 0.05);

    // C. « Bavardage » de données (style modem) : rapide pendant le bruit,
    //    plus clairsemé ensuite.
    for (let t = 0.05; t < tEnd; t += (t < tTitle ? 0.045 : 0.11)) {
      if (t > tHold - 0.05 && t < tHold + 0.25) continue; // laisse respirer l'impact
      tone(300 + Math.random() * 2700, 0.024, 'square', t < tTitle ? 0.035 : 0.025, at(t));
    }

    // D. Le nom se forme : arpège montant + montée grave qui gonfle.
    const notes = [523, 659, 784, 1047, 1319, 1568, 2093];
    let n = 0;
    for (let ms = 0; ms < T.title; ms += 30, n++) {
      const f = notes[n % notes.length] * (n % 14 < 7 ? 1 : 2);
      tone(f, 0.045, 'square', 0.06, at(tTitle + s(ms)));
    }
    const sub = ctx.createOscillator(), sg = ctx.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(45, now + tTitle);
    sub.frequency.exponentialRampToValueAtTime(110, now + tHold);
    ramp(sg.gain, [[tTitle, 0.0001], [tHold - 0.02, 0.28], [tHold + 0.05, 0.0001]]);
    sub.connect(sg).connect(bus);
    sub.start(now + tTitle); sub.stop(now + tHold + 0.1);

    // E. Nom complet : gros impact + accord + éclat aigu (avec écho).
    tone(120, 1.1, 'sine', 0.42, at(tHold), 34);
    tone(320, 0.35, 'triangle', 0.3, at(tHold), 90);   // « coup » audible partout
    noise(0.3, 0.28, 900, at(tHold));
    noise(0.12, 0.2, 5000, at(tHold));
    [523.25, 659.25, 783.99, 1046.5].forEach((f) => tone(f, 1.1, 'sawtooth', 0.05, at(tHold)));
    [2093, 3136].forEach((f, i) => tone(f, 1.0, 'sine', 0.03, at(tHold + 0.03 * i)));

    // F. Juste avant le décodage : petit bégaiement numérique.
    for (let i = 0; i < 4; i++) noise(0.035, 0.32, 2500 + i * 900, at(tDecode - 0.2 + i * 0.05));

    // G. Décodage : montée filtrée + balayage aigu + grésillements de plus en plus denses.
    const rise = ctx.createOscillator(), rf = ctx.createBiquadFilter(), rg = ctx.createGain();
    rise.type = 'sawtooth';
    rise.frequency.setValueAtTime(110, now + tDecode);
    rise.frequency.exponentialRampToValueAtTime(990, now + tEnd);
    rf.type = 'lowpass'; rf.Q.value = 8;
    ramp(rf.frequency, [[tDecode, 300], [tEnd, 6500]]);
    ramp(rg.gain, [[tDecode, 0.0001], [tEnd - 0.05, 0.2], [tEnd + 0.02, 0.0001]]);
    rise.connect(rf).connect(rg).connect(bus);
    rise.start(now + tDecode); rise.stop(now + tEnd + 0.05);
    tone(220, tEnd - tDecode, 'triangle', 0.07, at(tDecode), 2600);
    for (let i = 0; i < 90; i++) {
      const p = Math.sqrt(Math.random()); // plus dense vers la fin
      noise(0.016, 0.24, 2500 + Math.random() * 5000, at(tDecode + p * (tEnd - tDecode)));
    }
    out = null;
  }
  function introStop() {
    if (!introBus || !ctx) return;
    const bus = introBus; introBus = null;
    bus.gain.setTargetAtTime(0, ctx.currentTime, 0.03);
    setTimeout(() => bus.disconnect(), 400);
  }

  paint();
  btn.addEventListener('click', () => {
    // Son bloqué par le navigateur : ce clic le débloque (sans le couper).
    // La bande-son de l'intro démarre alors via l'écouteur global plus bas.
    if (btn.classList.contains('is-blocked')) { unlock(); return; }
    on = !on; save(); paint();
    if (on) { unlock(); tone(880, 0.06, 'square', 0.03); } else introStop();
  });
  // Au chargement : essai sans clic (accepté si le navigateur le permet).
  unlock();
  paint();
  setTimeout(() => btn.classList.add('is-visible'), 700);
  return {
    unlock, introScore, introStop,
    onRunning(fn) { onRunning = fn; if (ctx && ctx.state === 'running') fn(); },
    hasIntro: () => !!introBus,
    setOn(v) { on = !!v; save(); paint(); },
    // Bouton ⏻ : clic d'interrupteur + « toc » + bourdonnement qui démarre.
    switchOn() {
      noise(0.025, 0.35, 2400); tone(95, 0.35, 'sine', 0.2, 0, 45);
      tone(60, 0.6, 'sawtooth', 0.025, 0.05); noise(0.5, 0.03, 500, 0.05);
    },
    // Fin de l'intro, au flash : gros impact + éclat aigu.
    impact() {
      out = shaped;
      tone(90, 1.6, 'sine', 0.55, 0, 26); tone(45, 1.2, 'sine', 0.3, 0.02, 30);
      tone(260, 0.5, 'triangle', 0.35, 0, 70);
      noise(0.9, 0.32, 4200); noise(1.1, 0.24, 300); noise(0.2, 0.3, 1200);
      [1568, 2093, 2637, 3520].forEach((f, i) => tone(f, 1.4, 'sine', 0.05, 0.03 * i));
      out = null;
    },
    // Allumage du tube : « toc » de dégaussage + bourdonnement + sifflement.
    crtOn() {
      tone(150, 0.25, 'sine', 0.16, 0, 60); tone(50, 0.5, 'square', 0.03, 0.02, 62);
      noise(0.3, 0.05, 800, 0.02); tone(7800, 1.4, 'sine', 0.004, 0.1);
    },
    // ENTRÉE : clic + « toc » grave + sifflement du tube cathodique.
    power() {
      noise(0.03, 0.3, 2600); tone(120, 0.5, 'sine', 0.2, 0, 40);
      noise(0.4, 0.05, 700, 0.02); tone(7800, 1.1, 'sine', 0.004, 0.05);
    },
    keys(n) { for (let i = 0; i < n; i++) noise(0.016, 0.1, 1600 + Math.random() * 1800, i * 0.035 + Math.random() * 0.015); },
    ok() { tone(1320, 0.055, 'square', 0.022); },
    tick() { tone(2400, 0.02, 'square', 0.012); },
    granted() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i === 3 ? 0.3 : 0.11, 'square', 0.028, i * 0.09)); },
    hover() { tone(1800, 0.025, 'square', 0.01); },
    open() { tone(420, 0.13, 'triangle', 0.06, 0, 900); },
    close() { tone(760, 0.11, 'triangle', 0.05, 0, 320); },
  };
})();


// Démarrage façon BIOS : en-tête, compteur d'expérience, modules qui se
// chargent un à un avec [ OK ], accès autorisé, barre en blocs, puis menu.
let bootTimers = [];
function startBoot() {
  bootTimers.forEach(clearTimeout); bootTimers = [];
  const at = (ms, fn) => bootTimers.push(setTimeout(fn, ms));
  const B = CONTENT.boot;
  const scene = document.getElementById('deviceStage');
  const box = document.getElementById('bootLines');
  box.innerHTML = '';
  showScreen('boot');
  scene.classList.add('is-busy'); // voyant du moniteur qui clignote

  const line = (cls, html) => { const n = el('div', 'boot-line ' + cls, html); box.appendChild(n); return n; };
  const row = (label, value) => line('boot-row', `<span>${label}</span><i></i><b>${value}</b>`);

  at(250, () => { line('boot-line--head', B.header); sfx.keys(6); });

  at(550, () => {
    const n = row(B.stat.label, `0 ${B.stat.unit}`);
    const b = n.querySelector('b');
    for (let v = 1; v <= B.stat.value; v++) {
      at(v * 110, () => { b.textContent = `${v} ${B.stat.unit}`; sfx.tick(); });
    }
    at((B.stat.value + 1) * 110, () => { b.textContent = `${B.stat.value} ${B.stat.unit} · OK`; sfx.ok(); });
  });

  let t = 1300;
  at(t, () => { line('boot-line--dim', B.modulesTitle); sfx.keys(4); });
  B.modules.forEach((m) => {
    t += 220;
    at(t, () => {
      const n = row('&nbsp;&nbsp;' + m, '····');
      n.classList.add('is-loading');
      at(160 + Math.random() * 120, () => { n.querySelector('b').textContent = '[ OK ]'; n.classList.remove('is-loading'); sfx.ok(); });
    });
  });

  t += 650;
  at(t, () => { line('boot-line--highlight boot-line--access', B.access); sfx.granted(); });

  t += 350;
  at(t, () => {
    const wrap = el('div', 'boot-progress');
    const track = el('div', 'boot-progress__track');
    const fill = el('div', 'boot-progress__fill');
    const pct = el('div', 'boot-progress__pct', '0%');
    track.appendChild(fill); wrap.appendChild(track); wrap.appendChild(pct);
    box.appendChild(wrap);
    for (let i = 1; i <= 20; i++) {
      at(i * 32, () => { fill.style.width = i * 5 + '%'; pct.textContent = i * 5 + '%'; if (i % 4 === 0) sfx.tick(); });
    }
  });

  at(t + 20 * 32 + 450, () => { scene.classList.remove('is-busy'); showScreen('menu'); });
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
  sfx.open();
  updateCrtVisibility();
}

function closeWindow(name) {
  const node = document.getElementById('window' + capitalize(name));
  if (!node || node.hidden) return;
  node.classList.add('is-closing');
  sfx.close();
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

// Fenêtre ouverte : l'écran CRT reste allumé derrière (sinon on croit que le
// moniteur s'éteint) ; seul son contenu, le menu, s'atténue et se floute.
// Une fenêtre en train de se refermer (.is-closing) ne compte plus comme
// "ouverte", pour que le menu revienne pendant le fondu.
function updateCrtVisibility() {
  const anyOpen = document.querySelector('.popup-window:not([hidden]):not(.is-closing)');
  document.getElementById('crtScreen').classList.toggle('has-window', !!anyOpen);
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* =========================================================
   INIT
   ========================================================= */

// Langue : textes fixes de la page (data-i18n), attribut lang, description.
document.documentElement.lang = LANG;
document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = UI[n.dataset.i18n]; });
document.querySelectorAll('[data-i18n-aria]').forEach((n) => { n.setAttribute('aria-label', UI[n.dataset.i18nAria]); });
document.querySelector('meta[name="description"]').setAttribute('content', UI.metaDesc);
(() => {
  const btn = document.getElementById('langToggle');
  btn.querySelector('[data-lang="' + LANG + '"]').classList.add('is-active');
  btn.setAttribute('aria-label', UI.langAria);
  btn.addEventListener('click', () => {
    const next = LANG === 'fr' ? 'en' : 'fr';
    try { localStorage.setItem('ta-lang', next); sessionStorage.setItem('ta-nointro', '1'); } catch (e) { /* stockage bloqué */ }
    const url = new URL(location.href); url.searchParams.set('lang', next);
    location.replace(url.toString());
  });
})();

document.getElementById('homeName').textContent = CONTENT.displayName;
document.getElementById('homeName').dataset.text = CONTENT.displayName; // copies du glitch (CSS)
document.getElementById('homeTagline').textContent = CONTENT.tagline;

// Étiquette "PORTFOLIO - <MOIS> <ANNÉE>" : se met à jour toute seule à
// chaque chargement, plus besoin d'y retoucher à la main chaque mois.
(() => {
  const label = document.getElementById('sysLabel');
  const moisAnnee = new Date().toLocaleDateString(UI.locale, { month: 'long', year: 'numeric' });
  label.textContent = `PORTFOLIO - ${moisAnnee.toUpperCase()}`;
})();

// Le nom se « décode » lettre à lettre (glyphes aléatoires → texte final).
function scrambleText(node, finalText, dur) {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&@$';
  const chars = [...finalText], order = chars.map(() => 0.15 + Math.random() * 0.85);
  const t0 = performance.now();
  clearInterval(node._scramble);
  node._scramble = setInterval(() => {
    const p = (performance.now() - t0) / dur;
    node.textContent = chars.map((c, i) => (c === '\n' || c === ' ' || p >= order[i]
      ? c : pool[(Math.random() * pool.length) | 0])).join('');
    if (p >= 1) { clearInterval(node._scramble); node.textContent = finalText; }
  }, 45);
}
const reduceMotionPref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function playHomeIntro() {
  if (reduceMotionPref) return;
  setTimeout(() => scrambleText(document.getElementById('homeName'), CONTENT.displayName, 900), 380);
}

// Allumage de l'écran CRT : noir/éteint par défaut (voir .crt-tube dans
// css/style.css), déclenché une fois l'intro ASCII terminée (onDone).
// .is-turning-on joue l'allumage de tube cathodique (point → ligne blanche
// → image qui s'ouvre en tremblant), puis .is-on = état stable.
let startCrtPowerOn = () => {
  startCrtPowerOn = () => {}; // ne joue qu'une fois
  const screenEl = document.getElementById('crtScreen');
  const ON_MS = 800; // durée de l'animation crt-on
  screenEl.classList.add('is-turning-on');
  sfx.crtOn();
  playHomeIntro();
  document.getElementById('soundToggle').classList.add('is-visible');
  setTimeout(() => {
    screenEl.classList.remove('is-turning-on');
    screenEl.classList.add('is-on');
  }, ON_MS);
};
// Filet de sécurité : si la photo (et son repli) n'ont vraiment pas pu se
// charger, l'effet ASCII ne se déclenche jamais — on force quand même la
// scène et l'écran à apparaître plutôt que de rester bloqué. (12 s : l'intro
// complète dure ~4 s une fois la photo chargée.)
setTimeout(() => {
  const scene = document.getElementById('deviceStage');
  scene.classList.add('is-revealed', 'is-screen-on');
  startCrtPowerOn();
}, 12000);

// Son disponible (premier clic / touche, ou autorisé par le navigateur) :
// si l'intro tourne encore, sa bande-son démarre, calée sur l'image.
sfx.onRunning(() => {
  const scene = document.getElementById('deviceStage');
  const st = scene._introSound && scene._introSound();
  if (st && !sfx.hasIntro()) sfx.introScore(st.T, st.elapsed);
});
['pointerdown', 'keydown', 'touchend'].forEach((ev) => window.addEventListener(ev, () => sfx.unlock(), { passive: true }));

renderMenu();
renderAbout();
renderTimeline('parcoursScroll', CONTENT.parcours, 'entreprise', 'postes');
renderTimeline('formationScroll', CONTENT.formations, 'ecole', 'diplomes');
renderProjetsList();
renderSoftware();
renderContact();

// ENTRÉE : son (premier clic = le navigateur l'autorise), la caméra plonge
// vers l'écran, puis le démarrage BIOS.
document.getElementById('btnEntree').addEventListener('click', () => {
  sfx.unlock(); sfx.power();
  document.getElementById('deviceStage').classList.add('is-zoomed');
  startBoot();
});
document.getElementById('btnBackHome').addEventListener('click', () => {
  document.getElementById('deviceStage').classList.remove('is-zoomed');
  sfx.close();
  showScreen('home');
  playHomeIntro();
});

document.querySelectorAll('[data-close]').forEach((node) => {
  node.addEventListener('click', () => closeWindow(node.getAttribute('data-close')));
});

// Pied de la fenêtre "Mes projets" : pas de data-close fixe, son action
// dépend de la vue en cours (liste -> menu, détail -> liste), voir
// showProjetDetail() / hideProjetDetail() pour le texte affiché.
document.getElementById('projetsFooter').addEventListener('click', () => {
  const detail = document.getElementById('projetDetailScroll');
  if (!detail.hidden) crtSwap(detail, document.getElementById('projetsScroll'), hideProjetDetail);
  else closeWindow('projets');
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
  document.getElementById('docLightboxTitle').textContent = title || UI.doc;
  document.getElementById('docLightboxOpen').href = file;
  const base = file.replace(/\.pdf$/i, '');
  const total = pages || 1;
  let html = '';
  for (let i = 1; i <= total; i++) {
    html += '<img class="doc-lightbox__page" src="' + base + '-p' + i + '.jpg" ' +
            'alt="' + (title || UI.doc) + ' — ' + UI.page + ' ' + i + '/' + total + '" loading="lazy">';
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

// Intro « décodage ASCII », en 4 temps, dessinée dans un <canvas> :
//   1. bruit : des glyphes aléatoires, discrets ;
//   2. titre : ton nom se forme en grandes lettres ASCII au milieu du bruit ;
//   3. décodage : la photo apparaît en caractères, en onde qui part de
//      l'écran du moniteur vers les bords (l'œil va d'abord à l'ordinateur) ;
//      chaque caractère est éclairé selon la lumière de la photo (lampe,
//      reflets) au lieu d'un vert uniforme ;
//   4. flash : décalage rouge/cyan, flash blanc, et la vraie photo prend le
//      relais (voir .is-flashing / .is-revealed dans css/style.css).
// Sert aussi de temps de chargement déguisé : ne démarre qu'une fois la
// photo chargée. scene = #deviceStage ; o.onDone = l'écran peut s'allumer.
function asciiDecode(scene, o) {
  o = Object.assign({
    cols: 120, cellRatio: 1.7, noise: 450, title: 1000, titleHold: 650, decode: 1800, hold: 110,
    onDone: null, name: 'THÉO ALLÈGRE',
    ramp: ' .,:;-=+*#%@', glyphs: '@#%*+=-:.!?/\\|<>[]{}$&01', titleGlyphs: '#@%&$',
  }, o);
  const img = scene.querySelector('#deskPhotoImg'), cv = scene.querySelector('#deskPhotoAscii');
  if (scene._raf) cancelAnimationFrame(scene._raf);
  clearTimeout(scene._t1); clearTimeout(scene._t2);
  scene.classList.remove('is-revealed', 'is-screen-on', 'is-flashing');
  cv.classList.remove('is-chroma');

  const W = scene.clientWidth, H = scene.clientHeight;
  // Scène pas encore mise en page (onglet ou panneau masqué au chargement) :
  // sans ce garde-fou, rows vaut NaN et getImageData plante. On réessaie.
  if (!W || !H) { scene._t1 = setTimeout(() => asciiDecode(scene, o), 150); return; }

  // Zone VRAIMENT visible de la scène : sur ordinateur, la photo est agrandie
  // pour couvrir tout l'écran et déborde (rognée en haut/bas ou sur les
  // côtés selon le format de la fenêtre). Taille des caractères et nom sont
  // calculés sur cette zone, pas sur la photo entière.
  const sr = scene.getBoundingClientRect();
  const vx0 = Math.max(0, -sr.left), vx1 = Math.min(W, window.innerWidth - sr.left);
  const vy0 = Math.max(0, -sr.top), vy1 = Math.min(H, window.innerHeight - sr.top);
  const VW = Math.max(50, vx1 - vx0), VH = Math.max(50, vy1 - vy0);

  // Grille : o.cols colonnes sur la largeur visible ; plafond de cellules
  // (perf) pour les formats extrêmes (fenêtre très haute sur ordinateur).
  let cw0 = VW / o.cols;
  while (Math.ceil(W / cw0) * Math.round(H / (cw0 * o.cellRatio)) > 8500) cw0 *= 1.1; // plafond de cellules (fluidité)
  const cols = Math.ceil(W / cw0), cw = W / cols;
  const rows = Math.max(10, Math.round(H / (cw * o.cellRatio)));
  const ch = H / rows, ratio = ch / cw, N = cols * rows;
  const dpr = Math.min(1.25, window.devicePixelRatio || 1); // plafonné : fluidité avant finesse
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  // (contexte de dessin choisi au démarrage : WebGL si possible, sinon 2D)

  // 1) La photo en luminance, cadrage cover (comme object-fit: cover).
  const c = document.createElement('canvas'); c.width = cols; c.height = rows;
  const x = c.getContext('2d', { willReadFrequently: true });
  const iw = img.naturalWidth, ih = img.naturalHeight, br = W / H;
  let sw, sh;
  if (iw / ih > br) { sh = ih; sw = ih * br; } else { sw = iw; sh = iw / br; }
  x.drawImage(img, (iw - sw) / 2, (ih - sh) / 2, sw, sh, 0, 0, cols, rows);
  const d = x.getImageData(0, 0, cols, rows).data;
  const L = new Float32Array(N);
  for (let i = 0; i < N; i++) L[i] = d[i * 4] * 0.3 + d[i * 4 + 1] * 0.59 + d[i * 4 + 2] * 0.11;
  const sorted = Array.from(L).sort((a, b) => a - b);
  const lo = sorted[Math.floor(N * 0.03)], hi = sorted[Math.floor(N * 0.97)], R = o.ramp;
  const LV = 10; // niveaux de luminosité de la photo (teintes : voir colors plus bas)
  const target = new Array(N), level = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const v = Math.max(0, Math.min(1, (L[i] - lo) / (hi - lo || 1)));
    target[i] = R[Math.min(R.length - 1, Math.floor(v * R.length))];
    level[i] = Math.min(LV - 1, Math.floor(v * LV));
  }

  // 2) Onde de décodage centrée sur l'écran du moniteur.
  const crt = scene.querySelector('#crtScreen');
  const mx = crt.offsetLeft + crt.offsetWidth / 2, my = crt.offsetTop + crt.offsetHeight / 2;
  // Rayon = coin visible le plus éloigné : l'onde balaie tout l'écran
  // dans le temps imparti, quel que soit le rognage.
  const far = Math.hypot(Math.max(mx - vx0, vx1 - mx), Math.max(my - vy0, vy1 - my));
  const lock = new Float32Array(N);
  for (let r = 0, k = 0; r < rows; r++) {
    for (let cc = 0; cc < cols; cc++, k++) {
      const dist = Math.hypot((cc + 0.5) * cw - mx, (r + 0.5) * ch - my) / far;
      lock[k] = Math.min(0.97, dist * 0.8 + Math.random() * 0.17);
    }
  }

  // 3) Masque du nom en grandes lettres (2 lignes), centré dans la zone
  //    visible et dimensionné pour y tenir entièrement.
  // On dessine dans un repère « carré » (hauteur × ratio) puis on écrase :
  // les cellules étant plus hautes que larges, les lettres gardent leurs
  // proportions une fois affichées.
  const titleA = new Float32Array(N), titleLock = new Float32Array(N), titleGlyph = new Uint8Array(N);
  const buildTitle = () => {
    const m = document.createElement('canvas'); m.width = cols; m.height = rows;
    const mc = m.getContext('2d', { willReadFrequently: true });
    const lines = o.name.split(' ');
    const font = (s) => `800 ${s}px Archivo, 'Arial Black', sans-serif`;
    mc.font = font(100);
    const wMax = Math.max(...lines.map((l) => mc.measureText(l).width)) / 100;
    // Unités : 1 = largeur d'une cellule (repère carré).
    const lh = 0.95, visW = VW / cw, visH = (VH / ch) * ratio;
    const size = Math.min((visW * 0.84) / wMax, (visH * 0.5) / (lines.length * lh));
    const cx = (vx0 + VW / 2) / cw, cy = ((vy0 + VH / 2) / ch) * ratio;
    mc.setTransform(1, 0, 0, 1 / ratio, 0, 0);
    mc.font = font(size); mc.textAlign = 'center'; mc.textBaseline = 'middle'; mc.fillStyle = '#fff';
    lines.forEach((l, i) => mc.fillText(l, cx, cy + (i - (lines.length - 1) / 2) * size * lh));
    const a = mc.getImageData(0, 0, cols, rows).data;
    for (let i = 0; i < N; i++) {
      titleA[i] = a[i * 4 + 3] / 255;
      titleLock[i] = Math.random();
      titleGlyph[i] = (Math.random() * o.titleGlyphs.length) | 0;
    }
  };

  const G = o.glyphs, TG = o.titleGlyphs;
  const T1 = o.noise, T3 = T1 + o.title + o.titleHold;

  // Teintes : 0 = rien, 1..LV = niveaux de la photo, puis bruit, blanc, bord du nom.
  const S_NOISE = LV + 1, S_WHITE = LV + 2, S_EDGE = LV + 3, NS = LV + 4;
  const hsl = (h, s, l) => { // → [r, g, b] entre 0 et 1
    const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
    return [0, 8, 4].map((n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1)));
  };
  const colors = new Float32Array(16 * 4); // RVBA par teinte
  const setColor = (i, rgb, a) => colors.set([rgb[0], rgb[1], rgb[2], a], i * 4);
  for (let i = 0; i < LV; i++) setColor(i + 1, hsl(142 - i * 2, 1, 0.22 + i * 0.07), 0.3 + i * 0.075);
  setColor(S_WHITE, [0.94, 1, 0.96], 1);
  setColor(S_EDGE, [0.5, 1, 0.63], 0.75);
  setColor(S_NOISE, [0.3, 1, 0.54], 0.2);

  // Caractères → indices (une seule table pour la photo, le bruit et le nom).
  const charset = [...new Set((R + G + TG + '+').replace(/ /g, ''))];
  const cIdx = {}; charset.forEach((c, i) => { cIdx[c] = i; });
  const targetI = new Int16Array(N);
  for (let i = 0; i < N; i++) targetI[i] = target[i] === ' ' ? -1 : cIdx[target[i]];
  const gI = [...G].map((c) => cIdx[c]), tgI = [...TG].map((c) => cIdx[c]), plusI = cIdx['+'];
  const sid = new Uint8Array(N), gid = new Uint8Array(N);
  // Bruit : glyphes et « trous » renouvelés par petites touches à chaque
  // image (scintillement doux au lieu d'un mur qui change d'un bloc).
  const noiseG = new Uint8Array(N), noiseOn = new Uint8Array(N);
  for (let i = 0; i < N; i++) { noiseG[i] = (Math.random() * gI.length) | 0; noiseOn[i] = Math.random() < 0.62 ? 1 : 0; }

  // Police calée pour qu'un caractère fasse exactement une cellule de large.
  const fontFor = (px) => `700 ${px.toFixed(3)}px 'Space Mono', monospace`;
  const measureFontPx = () => {
    const m = document.createElement('canvas').getContext('2d');
    m.font = fontFor(100);
    return cw / ((m.measureText('MMMMMMMMMM').width / 1000) || 0.6);
  };

  // ——— Rendu par la carte graphique (WebGL) ———
  // Chaque caractère est dessiné UNE fois dans une texture ; ensuite chaque
  // cellule n'est qu'un point que la carte graphique remplit avec le bon
  // caractère et la bonne teinte. Quelques milliers de cellules : coût quasi nul.
  const makeGL = () => {
    if (cv._mode === '2d') return null;
    const gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false });
    if (!gl) { cv._mode = '2d'; return null; }
    cv._mode = 'gl';
    const sx = cv.width / W, sy = cv.height / H;
    const cwD = Math.max(1, Math.round(cw * sx)), chD = Math.max(1, Math.round(ch * sy));
    const size = Math.max(cwD, chD);
    if (size > gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]) return null;

    // Texture des caractères (blancs, légère lueur), un emplacement par caractère.
    const atlas = document.createElement('canvas');
    atlas.width = cwD * charset.length; atlas.height = chD;
    const ag = atlas.getContext('2d');
    ag.font = fontFor(measureFontPx() * sy); ag.textBaseline = 'middle'; ag.fillStyle = '#fff';
    ag.shadowColor = 'rgba(255,255,255,0.8)'; ag.shadowBlur = chD * 0.12;
    charset.forEach((c, i) => ag.fillText(c, i * cwD, chD / 2));

    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, `
      attribute vec2 a_pos; attribute vec2 a_cell;
      uniform vec2 u_res; uniform vec2 u_cellpx; uniform float u_size; uniform vec4 u_colors[16];
      varying float v_glyph; varying vec4 v_color;
      void main() {
        int s = int(a_cell.y + 0.5);
        vec2 c = a_pos + u_cellpx * 0.5;
        gl_Position = s > 0 ? vec4(c.x / u_res.x * 2.0 - 1.0, 1.0 - c.y / u_res.y * 2.0, 0.0, 1.0) : vec4(2.0, 2.0, 0.0, 1.0);
        gl_PointSize = u_size;
        v_glyph = a_cell.x; v_color = u_colors[s];
      }`));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, `
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
      #else
      precision mediump float;
      #endif
      uniform sampler2D u_atlas; uniform vec2 u_cellpx; uniform float u_size; uniform float u_count;
      varying float v_glyph; varying vec4 v_color;
      void main() {
        vec2 q = gl_PointCoord * u_size - (vec2(u_size) - u_cellpx) * 0.5;
        if (q.x < 0.0 || q.y < 0.0 || q.x >= u_cellpx.x || q.y >= u_cellpx.y) discard;
        float a = texture2D(u_atlas, vec2((v_glyph * u_cellpx.x + q.x) / (u_count * u_cellpx.x), q.y / u_cellpx.y)).a * v_color.a;
        gl_FragColor = vec4(v_color.rgb * a, a);
      }`));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);

    const pos = new Float32Array(N * 2);
    for (let r = 0, k = 0; r < rows; r++) for (let c = 0; c < cols; c++, k++) { pos[k * 2] = Math.round(c * cw * sx); pos[k * 2 + 1] = Math.round(r * ch * sy); }
    const attr = (name, data, usage) => {
      const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, usage);
      const loc = gl.getAttribLocation(prog, name); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      return b;
    };
    attr('a_pos', pos, gl.STATIC_DRAW);
    const cell = new Float32Array(N * 2);
    const cellBuf = attr('a_cell', cell, gl.DYNAMIC_DRAW);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const U = (n) => gl.getUniformLocation(prog, n);
    gl.uniform2f(U('u_res'), cv.width, cv.height);
    gl.uniform2f(U('u_cellpx'), cwD, chD);
    gl.uniform1f(U('u_size'), size);
    gl.uniform1f(U('u_count'), charset.length);
    gl.uniform1i(U('u_atlas'), 0);
    const uColors = U('u_colors');
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.viewport(0, 0, cv.width, cv.height);
    gl.clearColor(0, 0, 0, 0);

    return () => {
      for (let k = 0; k < N; k++) { cell[k * 2] = gid[k]; cell[k * 2 + 1] = sid[k]; }
      gl.bindBuffer(gl.ARRAY_BUFFER, cellBuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, cell);
      gl.uniform4fv(uColors, colors);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINTS, 0, N);
    };
  };

  // ——— Secours sans WebGL : une chaîne par ligne et par teinte (canvas 2D) ———
  const make2D = () => {
    const g = cv.getContext('2d');
    if (!g) return () => {};
    cv._mode = '2d';
    const font = fontFor(measureFontPx());
    const bufs = Array.from({ length: NS }, () => new Array(cols).fill(' '));
    const written = Array.from({ length: NS }, () => []);
    const css = (i) => `rgba(${(colors[i * 4] * 255) | 0},${(colors[i * 4 + 1] * 255) | 0},${(colors[i * 4 + 2] * 255) | 0},${colors[i * 4 + 3].toFixed(3)})`;
    return () => {
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, cv.width, cv.height);
      g.setTransform(cv.width / W, 0, 0, cv.height / H, 0, 0);
      g.font = font; g.textAlign = 'left'; g.textBaseline = 'middle';
      const styles = Array.from({ length: NS }, (_, i) => css(i));
      for (let r = 0, k = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++, k++) {
          const s = sid[k];
          if (s) { bufs[s][c] = charset[gid[k]]; written[s].push(c); }
        }
        const y = (r + 0.5) * ch;
        for (let s = 1; s < NS; s++) {
          const w = written[s];
          if (!w.length) continue;
          g.fillStyle = styles[s];
          g.fillText(bufs[s].join(''), 0, y);
          for (let i = 0; i < w.length; i++) bufs[s][w[i]] = ' ';
          w.length = 0;
        }
      }
    };
  };

  const run = scene._run = {}; // un nouvel appel (changement de cadrage) annule celui-ci
  // « Passer l'intro » (bouton, Entrée, Échap, Espace) : saute à la fin.
  const skipBtn = document.getElementById('skipIntro');
  scene._skip = () => { run.skipped = true; sfx.introStop(); };
  sfx.introStop();
  const T = { noise: T1, title: o.title, hold: o.titleHold, decode: o.decode };
  const start = () => {
    if (scene._run !== run) return;
    buildTitle();
    const draw = makeGL() || make2D();
    skipBtn.classList.add('is-visible');
    const t0 = performance.now();
    // Son : joué si le navigateur l'autorise déjà ; sinon il démarre dès que
    // le son est débloqué (clic / touche), calé sur l'image.
    scene._introSound = () => (run.skipped || scene._run !== run ? null : { T, elapsed: performance.now() - t0 });
    sfx.introScore(T, 0);
    (function frame(now) {
      scene._raf = requestAnimationFrame(frame);
      const t = run.skipped ? T3 + o.decode : now - t0;
      const pt = Math.max(0, Math.min(1, (t - T1) / o.title)); // formation du nom
      const p = (t - T3) / o.decode;                              // décodage photo
      // Le bruit monte, puis s'efface derrière le nom pour le faire ressortir.
      colors[S_NOISE * 4 + 3] = t < T1 ? 0.12 + 0.3 * (t / T1) : 0.42 - 0.3 * pt;
      // Fin du décodage : léger tremblement horizontal (glitch), très peu coûteux.
      cv.style.transform = p > 0.86 && p < 1 ? `translateX(${((Math.random() - 0.5) * 6).toFixed(1)}px)` : '';
      for (let n = (N * 0.05) | 0; n > 0; n--) {
        const i = (Math.random() * N) | 0;
        noiseG[i] = (Math.random() * gI.length) | 0;
        if (Math.random() < 0.3) noiseOn[i] ^= 1;
      }
      // Teinte + caractère de chaque cellule.
      for (let k = 0; k < N; k++) {
        const lk = lock[k];
        if (p >= lk) {
          if (p - lk < 0.045) { sid[k] = S_WHITE; gid[k] = gI[noiseG[k]]; } // crête de l'onde
          else if (targetI[k] < 0) sid[k] = 0;
          else { sid[k] = level[k] + 1; gid[k] = targetI[k]; }
        } else if (titleA[k] > 0.3 && pt >= titleLock[k]) {
          if (titleA[k] > 0.6) { sid[k] = S_WHITE; gid[k] = tgI[titleGlyph[k]]; } else { sid[k] = S_EDGE; gid[k] = plusI; }
        } else if (noiseOn[k]) { sid[k] = S_NOISE; gid[k] = gI[noiseG[k]]; }
        else sid[k] = 0;
      }
      draw();
      if (p >= 1) {
        cancelAnimationFrame(scene._raf);
        scene._skip = null; scene._introSound = null;
        cv.style.transform = '';
        skipBtn.classList.remove('is-visible');
        sfx.impact();
        // Flash blanc, puis la photo prend le relais au pic du flash.
        scene.classList.add('is-flashing');
        scene._t1 = setTimeout(() => {
          scene.classList.add('is-revealed', 'is-screen-on');
          scene.dispatchEvent(new CustomEvent('ascii:done', { bubbles: true }));
          if (o.onDone) o.onDone();
        }, o.hold);
        scene._t2 = setTimeout(() => scene.classList.remove('is-flashing'), 900);
      }
    })(t0);
  };

  // Nom en Archivo, caractères en Space Mono : on attend les polices (1 s max).
  const fontReady = document.fonts && document.fonts.load
    ? Promise.race([
      Promise.all([document.fonts.load("800 40px Archivo"), document.fonts.load("700 20px 'Space Mono'")]),
      new Promise((r) => setTimeout(r, 1000)),
    ])
    : Promise.resolve();
  fontReady.catch(() => {}).then(start);
}

// Photo de bureau : deux cadrages selon la taille d'écran —
//   paysage (desk-photo-desktop.jpg) sur ordinateur,
//   portrait (desk-photo.png) sur mobile / tablette.
// Le calage de l'écran vert (.crt-screen) est fait par CSS pour chaque cadrage.
// Repli : la photo portrait, puis placeholder visuel.
(() => {
  const img = document.getElementById('deskPhotoImg');
  const scene = document.getElementById('deviceStage');
  const placeholder = document.getElementById('deskPhotoPlaceholder');
  const mqDesktop = window.matchMedia('(min-width: 1024px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const srcFor = () => (mqDesktop.matches
    ? 'assets/img/desk-photo-desktop.jpg'
    : 'assets/img/desk-photo.png');

  // Changement de langue (bouton FR | EN) : on ne rejoue pas l'intro.
  let noIntro = false;
  try { noIntro = sessionStorage.getItem('ta-nointro') === '1'; sessionStorage.removeItem('ta-nointro'); } catch (e) { /* idem */ }
  const play = () => {
    if (reduceMotion || noIntro) {
      // Pas d'effet : la scène et l'écran apparaissent directement.
      scene.classList.add('is-revealed', 'is-screen-on');
      startCrtPowerOn();
      return;
    }
    // Déjà vue pendant cette visite (rechargement) : intro en version courte.
    let seen = false;
    try { seen = sessionStorage.getItem('ta-intro') === '1'; sessionStorage.setItem('ta-intro', '1'); } catch (e) { /* stockage bloqué */ }
    asciiDecode(scene, Object.assign({
      // Moins de colonnes = caractères plus gros : l'image se lit tout de
      // suite, et le nom en lettres ASCII reste lisible.
      cols: mqDesktop.matches ? 118 : 80, // colonnes sur la largeur VISIBLE
      onDone: startCrtPowerOn,
    }, seen ? { noise: 200, title: 550, titleHold: 300, decode: 1100 } : {}));
  };

  const load = (src, isFallback) => {
    const probe = new Image();
    probe.onload = () => {
      // Évite un remplacement inutile si le cadrage n'a pas changé entre-temps.
      if (!isFallback && src !== srcFor()) { load(srcFor(), false); return; }
      img.src = probe.src;
      img.hidden = false;
      placeholder.hidden = true;
      // img.src vient d'être posé : on attend qu'il soit décodable avant de
      // lire ses pixels (première apparition, ou rejoué au changement de
      // cadrage — voir onChange plus bas).
      const ready = img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; });
      ready.then(play);
    };
    probe.onerror = () => { if (!isFallback) load('assets/img/desk-photo.png', true); };
    probe.src = src;
  };

  load(srcFor(), false);
  // Rebascule si on franchit le point de rupture (rotation, redimensionnement) —
  // l'effet est rejoué avec la nouvelle photo.
  const onChange = () => load(srcFor(), false);
  if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', onChange);
  else mqDesktop.addListener(onChange);
})();

// Pièce vivante (ordinateur, souris uniquement) : la scène bouge un peu
// avec la souris (parallaxe) et le reflet sur le verre suit le curseur.
// translate (pas transform) : ne gêne ni le zoom ni la dérive de caméra.
(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduce) return;
  const cam = document.getElementById('sceneCam');
  const crt = document.getElementById('crtScreen');
  let raf = 0, nx = 0, ny = 0;
  window.addEventListener('mousemove', (e) => {
    nx = e.clientX / window.innerWidth - 0.5;
    ny = e.clientY / window.innerHeight - 0.5;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      cam.style.translate = `${(-nx * 16).toFixed(1)}px ${(-ny * 10).toFixed(1)}px`;
      crt.style.setProperty('--rx', `${(30 - nx * 40).toFixed(1)}%`);
      crt.style.setProperty('--ry', `${(22 - ny * 30).toFixed(1)}%`);
    });
  });
})();

/* =========================================================
   2e VAGUE : clavier, passer l'intro, économiseur d'écran,
   titre d'onglet, poussière dans la lumière de la lampe
   ========================================================= */

const isOpen = (id) => !document.getElementById(id).hidden;
const anyWindowOpen = () => document.querySelector('.popup-window:not([hidden]):not(.is-closing)');

// Passer l'intro : bouton ou Entrée / Échap / Espace pendant l'intro.
document.getElementById('skipIntro').addEventListener('click', () => {
  const scene = document.getElementById('deviceStage');
  if (scene._skip) scene._skip();
});

// Clavier façon terminal :
//   accueil : Entrée = ENTRÉE ;
//   menu    : ↑ ↓ pour choisir, Entrée pour ouvrir, Échap = accueil ;
//   fenêtre : Échap la ferme (les visionneuses gèrent leur propre Échap).
document.addEventListener('keydown', (e) => {
  const scene = document.getElementById('deviceStage');
  if (scene._skip && ['Enter', 'Escape', ' '].includes(e.key)) { e.preventDefault(); scene._skip(); return; }
  if (!scene.classList.contains('is-screen-on')) return;
  if (!document.getElementById('videoLightbox').hidden || !document.getElementById('docLightbox').hidden) return;
  const tag = (e.target.tagName || '').toLowerCase();

  const open = anyWindowOpen();
  if (open) {
    if (e.key === 'Escape') closeWindow(open.getAttribute('data-window'));
    return;
  }
  if (isOpen('screenHome') && e.key === 'Enter' && tag !== 'button' && tag !== 'a') {
    e.preventDefault();
    document.getElementById('btnEntree').click();
  } else if (isOpen('screenMenu')) {
    const rows = [...document.querySelectorAll('#menuList .menu-item')];
    const i = rows.indexOf(selectedMenuRow);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = rows[(i + (e.key === 'ArrowDown' ? 1 : -1) + rows.length) % rows.length] || rows[0];
      next.focus({ preventScroll: true });
    } else if (e.key === 'Enter' && i >= 0 && tag !== 'div') {
      e.preventDefault();
      selectedMenuRow.click();
    } else if (e.key === 'Escape') {
      document.getElementById('btnBackHome').click();
    }
  }
});

// Titre de l'onglet quand on part voir ailleurs.
(() => {
  const base = document.title;
  document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? UI.tabAway : base;
  });
})();

// Économiseur d'écran : après 40 s sans activité sur l'accueil ou le menu,
// le CRT passe en champ d'étoiles avec le nom qui rebondit. Le moindre
// mouvement le coupe.
(() => {
  if (reduceMotionPref) return;
  const saver = document.getElementById('screensaver');
  const cv = saver.querySelector('canvas');
  const g = cv.getContext('2d');
  const IDLE_MS = 40000;
  let idleTimer = 0, raf = 0;

  const canRun = () => document.getElementById('deviceStage').classList.contains('is-screen-on')
    && (isOpen('screenHome') || isOpen('screenMenu')) && !anyWindowOpen()
    && document.getElementById('videoLightbox').hidden && document.getElementById('docLightbox').hidden;

  function start() {
    if (!canRun()) { arm(); return; }
    saver.hidden = false;
    const dpr = Math.min(1.25, window.devicePixelRatio || 1); // plafonné : fluidité avant finesse
    cv.width = Math.round(saver.clientWidth * dpr); cv.height = Math.round(saver.clientHeight * dpr);
    const w = saver.clientWidth, h = saver.clientHeight;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const stars = Array.from({ length: 140 }, () => ({ x: (Math.random() - 0.5) * w, y: (Math.random() - 0.5) * h, z: Math.random() * w }));
    const fs = Math.max(12, w * 0.075);
    g.font = `800 ${fs}px Archivo, sans-serif`;
    const label = 'THÉO ALLÈGRE';
    const tw = g.measureText(label).width;
    let x = Math.random() * (w - tw), y = fs + Math.random() * (h - fs * 1.5), vx = w * 0.0025, vy = h * 0.003, hue = 140;
    (function frame() {
      raf = requestAnimationFrame(frame);
      g.fillStyle = 'rgba(2,6,3,0.35)';
      g.fillRect(0, 0, w, h);
      for (const s of stars) {
        s.z -= w * 0.006;
        if (s.z <= 1) { s.x = (Math.random() - 0.5) * w; s.y = (Math.random() - 0.5) * h; s.z = w; }
        const k = (w * 0.5) / s.z, px = w / 2 + s.x * k, py = h / 2 + s.y * k;
        const a = Math.min(1, 1.4 - s.z / w);
        g.fillStyle = `rgba(160,255,190,${a.toFixed(2)})`;
        g.fillRect(px, py, 1.5 * k * 0.6 + 0.6, 1.5 * k * 0.6 + 0.6);
      }
      x += vx; y += vy;
      if (x < 0 || x + tw > w) { vx = -vx; hue = (hue + 67) % 360; sfx.tick(); }
      if (y - fs * 0.8 < 0 || y > h - fs * 0.15) { vy = -vy; hue = (hue + 67) % 360; sfx.tick(); }
      g.shadowColor = `hsl(${hue},100%,60%)`; g.shadowBlur = 14;
      g.fillStyle = `hsl(${hue},100%,72%)`;
      g.font = `800 ${fs}px Archivo, sans-serif`;
      g.fillText(label, x, y);
      g.shadowBlur = 0;
    })();
  }
  function stop() {
    if (saver.hidden) return;
    cancelAnimationFrame(raf);
    saver.hidden = true;
  }
  function arm() { clearTimeout(idleTimer); idleTimer = setTimeout(start, IDLE_MS); }
  ['pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => {
    window.addEventListener(ev, () => { stop(); arm(); }, { passive: true });
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else arm(); });
  arm();
})();

// Poussière qui flotte dans la lumière de la lampe (ordinateur seulement).
(() => {
  const cv = document.getElementById('lampDust');
  const mq = window.matchMedia('(min-width: 1024px)');
  if (reduceMotionPref) return;
  const g = cv.getContext('2d');
  let motes = [], raf = 0, w = 0, h = 0;
  function setup() {
    const dpr = Math.min(1.25, window.devicePixelRatio || 1); // plafonné : fluidité avant finesse
    w = cv.clientWidth; h = cv.clientHeight;
    if (!w || !h) return false;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    motes = Array.from({ length: 70 }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: 0.5 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 0.12, vy: -0.03 - Math.random() * 0.1, ph: Math.random() * 6.28,
    }));
    return true;
  }
  function frame(t) {
    raf = requestAnimationFrame(frame);
    g.clearRect(0, 0, w, h);
    for (const m of motes) {
      m.x += m.vx + Math.sin(t / 1700 + m.ph) * 0.08;
      m.y += m.vy;
      if (m.y < -4) { m.y = h + 4; m.x = Math.random() * w; }
      if (m.x < -4) m.x = w + 4; else if (m.x > w + 4) m.x = -4;
      const a = 0.35 + 0.45 * Math.sin(t / 900 + m.ph * 3) ** 2;
      g.fillStyle = `rgba(255,224,170,${a.toFixed(2)})`;
      g.beginPath(); g.arc(m.x, m.y, m.r, 0, 6.283); g.fill();
    }
  }
  function toggle() {
    cancelAnimationFrame(raf);
    const scene = document.getElementById('deviceStage');
    if (mq.matches && !document.hidden && scene.classList.contains('is-revealed') && setup()) raf = requestAnimationFrame(frame);
  }
  document.getElementById('deviceStage').addEventListener('ascii:done', toggle);
  document.addEventListener('visibilitychange', toggle);
  if (mq.addEventListener) mq.addEventListener('change', toggle);
  setTimeout(toggle, 12500); // cas du filet de sécurité (intro jamais jouée)
})();
