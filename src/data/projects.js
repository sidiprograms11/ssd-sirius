// ------------------------------------------------------------------
// Données des réalisations (repli local).
// Utilisées quand Supabase n'est pas configuré ou ne renvoie rien.
//
// FLASH MARKET = projet phare de SSD Sirius (produit interne, pas une commande client).
// Contenu et stack technique fournis par l'équipe — ne pas embellir.
// Les 3 autres entrées restent des placeholders à remplacer.
// ------------------------------------------------------------------

// Passer à `false` pour revenir aux aperçus dégradés.
// Les vraies captures vont dans public/realisations/flash-market/
// (voir le README de ce dossier). Si un fichier manque, le site retombe
// automatiquement sur l'aperçu dégradé : rien ne casse.
const FLASH_SCREENSHOTS_READY = true;

const flashShot = (file, tone, label) => ({
  tone,
  label,
  url: FLASH_SCREENSHOTS_READY ? `/realisations/flash-market/${file}` : "",
});

export const PROJECTS = [
  {
    slug: "flash-market",
    title: "Flash Market",
    client_name: "",
    own_product: true,
    type: "application",
    category: "Marketplace mobile",
    featured: true,
    flagship: true,
    status: "published",
    sort_order: 1,
    link_url: "https://link-my.app/flash-market-install",
    link_label: "Installer Flash Market",
    cover: "flash",
    logo_url: "/realisations/flash-market/logo.jpg",
    platforms: ["iOS", "Android"],
    payment: {
      aggregator: "XPaye Africa",
      operators: ["Orange Money"],
      countries: ["Mali", "Côte d'Ivoire"],
    },
    credits: ["Sidi Oumar GANO", "Mohamed Lamine"],
    summary:
      "La marketplace mobile pensée pour acheter, vendre et trouver des professionnels au Mali. Conçue et développée intégralement par SSD Sirius.",
    context:
      "Flash Market met en relation particuliers, vendeurs et professionnels dans une expérience simple, rapide et adaptée aux usages locaux : interface en français, prix en FCFA, et échanges qui se poursuivent dans l'application ou via les coordonnées du vendeur.",
    problem:
      "Acheter et vendre localement passait par des canaux dispersés, sans recherche fiable, sans tri par proximité et sans vitrine durable pour les professionnels. Il fallait réunir la découverte, la mise en relation et la gestion d'une activité dans une seule application, utilisable sur des connexions modestes.",
    solution:
      "SSD Sirius a conçu, développé et publié Flash Market de bout en bout : application React Native / Expo en TypeScript, back-end Supabase (PostgreSQL, Auth, Realtime, Storage), politiques RLS pour isoler les données privées, notifications push, géolocalisation, interface d'administration et pages publiques — jusqu'aux builds et mises à jour EAS.",
    description:
      "Flash Market démontre toute la palette technique de SSD Sirius sur le développement d'application : une base de code unique pour iOS et Android, un back-end complet avec sécurité au niveau des lignes, du temps réel, du paiement mobile pour la promotion d'annonces, et une chaîne de publication maîtrisée jusqu'aux stores.",
    highlights: [
      {
        icon: "Smartphone",
        title: "Application iOS & Android",
        text: "Une base de code unique en React Native, Expo et TypeScript, livrée sur les deux plateformes.",
      },
      {
        icon: "ShieldCheck",
        title: "Données protégées côté serveur",
        text: "Politiques PostgreSQL RLS : les données privées sont isolées dans la base, pas seulement masquées dans l'interface.",
      },
      {
        icon: "RefreshCw",
        title: "Temps réel",
        text: "Messagerie et données synchronisées en direct via Supabase Realtime.",
      },
      {
        icon: "Store",
        title: "Espace professionnel complet",
        text: "Boutique, catalogue, vitrine de services, portfolio, tarifs, commandes, devis et statistiques de visibilité.",
      },
      {
        icon: "Wallet",
        title: "Paiement Mobile Money intégré",
        text: "Boost d'annonces et services payants réglés en Mobile Money via l'agrégateur XPaye Africa et Orange Money.",
      },
      {
        icon: "BellRing",
        title: "Notifications push",
        text: "Notifications transactionnelles et push via Expo Push API et pg_net.",
      },
    ],
    featureGroups: [
      {
        label: "Pour les acheteurs",
        items: [
          "Parcours d'annonces par catégorie et sous-catégorie",
          "Recherche et filtres par prix, état, localisation et type de vendeur",
          "Tri par proximité grâce à la géolocalisation",
          "Fiches détaillées avec photos, prix et informations vendeur",
          "Favoris pour retrouver facilement une annonce",
          "Messagerie en temps réel",
          "Découverte des boutiques et professionnels",
          "Demandes de devis pour les prestations de services",
          "Avis et signalement de contenus",
        ],
      },
      {
        label: "Pour les vendeurs et professionnels",
        items: [
          "Publication et modification d'annonces",
          "Gestion des annonces depuis un espace personnel",
          "Profil public avec photo, biographie et réseaux sociaux",
          "Boutique professionnelle avec catalogue de produits",
          "Vitrine de services, portfolio, disponibilités et tarifs",
          "Gestion des commandes et demandes clients",
          "Statistiques de visibilité et de contacts",
          "Notifications transactionnelles et push",
          "Programme de parrainage",
        ],
      },
      {
        label: "Plateforme",
        items: [
          "Connexion par e-mail, téléphone, Google ou Apple",
          "Données synchronisées en temps réel",
          "Stockage sécurisé des images",
          "Politiques PostgreSQL RLS pour isoler les données privées",
          "Outils de modération et d'administration",
          "Pages publiques de présentation, support et informations légales",
        ],
      },
    ],
    principles: [
      "L'accès reste gratuit pour les acheteurs.",
      "Les annonces pertinentes priment toujours sur la promotion payante.",
      "Les vendeurs professionnels disposent d'une présence durable et identifiable.",
      "La proximité, la confiance et la simplicité guident l'expérience.",
      "Les données privées sont protégées côté serveur, pas uniquement dans l'interface.",
    ],
    screens: [
      flashShot("05-accueil.jpg", "flash", "Accueil — pros et annonces récentes"),
      flashShot("01-recherche.jpg", "flash", "Recherche géolocalisée et catégories"),
      flashShot("04-profil-vendeur.jpg", "flash-2", "Profil vendeur — annonces & espace pro"),
      flashShot("03-choix-operateur.jpg", "flash-pay", "Paiement — choix du pays et de l'opérateur"),
      flashShot("02-paiement-orange-money.jpg", "flash-pay", "Confirmation Orange Money"),
      // À venir : 06-espace-pro.jpg (onglet Performances de l'espace professionnel)
    ],
    techGroups: [
      { label: "Application mobile", items: ["React Native", "Expo", "TypeScript"] },
      { label: "Navigation", items: ["React Navigation"] },
      { label: "Backend", items: ["Supabase", "PostgreSQL"] },
      { label: "Authentification", items: ["Supabase Auth", "Google Sign-In", "Apple Sign-In"] },
      { label: "Temps réel", items: ["Supabase Realtime"] },
      { label: "Stockage", items: ["Supabase Storage"] },
      { label: "Notifications", items: ["Expo Notifications", "Expo Push API", "pg_net"] },
      { label: "Géolocalisation", items: ["Expo Location"] },
      { label: "Déploiement mobile", items: ["EAS Build", "EAS Update"] },
      { label: "Administration", items: ["HTML", "CSS", "JavaScript"] },
      { label: "Paiement", items: ["XPaye Africa", "Orange Money", "Mobile Money"] },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    metrics: [
      { label: "Plateformes", value: "iOS + Android" },
      { label: "Connexion", value: "E-mail, téléphone, Google, Apple" },
      { label: "Sécurité des données", value: "PostgreSQL RLS" },
    ],
  },

  {
    slug: "plateforme-e-commerce",
    title: "Plateforme e-commerce",
    client_name: "Projet interne SSD Sirius",
    type: "plateforme",
    category: "E-commerce",
    featured: false,
    status: "published",
    sort_order: 2,
    link_url: "",
    cover: "commerce",
    summary:
      "Une expérience d'achat fluide et sécurisée, conçue pour le marché africain.",
    context:
      "Permettre à des commerçants de vendre en ligne sans dépendre d'une place de marché tierce, avec un paiement adapté aux usages locaux.",
    problem:
      "Les solutions existantes sont lentes sur mobile, complexes à administrer et mal intégrées aux moyens de paiement locaux.",
    solution:
      "Une plateforme e-commerce sur mesure : catalogue rapide, tunnel de commande court, paiement carte et Mobile Money, back-office simple pour produits, stocks et commandes.",
    features: [
      "Catalogue et fiches produits optimisés mobile",
      "Panier et tunnel de commande en 3 étapes",
      "Paiement carte et Mobile Money",
      "Back-office produits, stocks et commandes",
      "Tableau de bord des ventes et exports",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Mobile Money", "Docker"],
    metrics: [
      { label: "Paiement", value: "Carte + Mobile Money" },
      { label: "Cible", value: "Mobile-first" },
    ],
    gallery: [
      { tone: "commerce", label: "Page d'accueil boutique" },
      { tone: "commerce-2", label: "Fiche produit" },
      { tone: "commerce-3", label: "Tunnel de paiement" },
      { tone: "dark", label: "Back-office commandes" },
    ],
  },

  {
    slug: "passerelle-paiement",
    title: "Passerelle de paiement",
    client_name: "Projet interne SSD Sirius",
    type: "site",
    category: "Performance & architecture",
    featured: false,
    status: "published",
    sort_order: 3,
    link_url: "",
    cover: "pay",
    summary:
      "Une architecture robuste pour encaisser de façon fiable, même en connexion instable.",
    context: "Centraliser les encaissements Mobile Money de plusieurs services derrière une seule intégration.",
    problem:
      "Chaque service réintégrait les opérateurs de paiement à sa manière, sans réconciliation ni visibilité commune.",
    solution:
      "Une passerelle : API unique d'initiation de paiement, gestion des callbacks, reprise sur incident, réconciliation automatique et tableau de bord des transactions.",
    features: [
      "API unique d'initiation de paiement",
      "Gestion des callbacks et des états de transaction",
      "Reprise automatique sur incident réseau",
      "Réconciliation et rapprochement comptable",
      "Tableau de bord des encaissements et alertes",
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "Google Cloud Run"],
    metrics: [
      { label: "Intégration", value: "API unifiée multi-opérateurs" },
      { label: "Fiabilité", value: "Reprise sur incident" },
    ],
    gallery: [
      { tone: "pay", label: "Tableau de bord transactions" },
      { tone: "pay-2", label: "Détail d'une transaction" },
      { tone: "pay-3", label: "Réconciliation" },
      { tone: "dark", label: "Journal et alertes" },
    ],
  },

  {
    slug: "marketplace-locale",
    title: "Marketplace locale",
    client_name: "Projet interne SSD Sirius",
    type: "site",
    category: "Web & conversion",
    featured: false,
    status: "published",
    sort_order: 4,
    link_url: "",
    cover: "market",
    summary:
      "Un site pensé pour la conversion : parcours court, recherche efficace, mise en relation rapide.",
    context: "Mettre en relation vendeurs et acheteurs d'une même ville, avec une navigation claire et un temps de chargement minimal.",
    problem: "Trop d'étapes entre la recherche et le contact vendeur, et une expérience peu lisible sur petit écran.",
    solution:
      "Refonte de l'architecture de l'information et des parcours : recherche filtrée, fiches lisibles, contact vendeur en un geste, interface entièrement responsive.",
    features: [
      "Recherche filtrée par catégorie et localisation",
      "Fiches annonces lisibles et rapides",
      "Contact vendeur direct (WhatsApp / téléphone)",
      "Espace vendeur pour publier et gérer les annonces",
      "Design responsive du mobile au desktop",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "CSS", "Vercel"],
    metrics: [
      { label: "Parcours", value: "Recherche → contact en 2 clics" },
      { label: "Responsive", value: "Mobile → desktop" },
    ],
    gallery: [
      { tone: "market", label: "Accueil et recherche" },
      { tone: "market-2", label: "Résultats filtrés" },
      { tone: "market-3", label: "Fiche annonce" },
      { tone: "dark", label: "Espace vendeur" },
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}
