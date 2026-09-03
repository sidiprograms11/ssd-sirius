// ------------------------------------------------------------------
// Données des réalisations (repli local).
// Utilisées quand Supabase n'est pas configuré ou ne renvoie rien.
//
// FLASH MARKET = projet phare, vitrine du savoir-faire "développement d'application".
// Les 3 autres entrées sont des placeholders à remplacer par de vrais projets.
//
// TODO (à confirmer avec Sidi) : stack technique exacte de Flash Market,
// nom du client / de la marque, liens App Store / Play Store, chiffres vérifiables.
// ------------------------------------------------------------------

// Passer à `true` une fois les vraies captures déposées dans
// public/realisations/flash-market/ (voir le README de ce dossier).
// Tant que c'est `false`, les aperçus dégradés aux couleurs de Flash sont affichés.
const FLASH_SCREENSHOTS_READY = false;

const flashShot = (file, tone, label) => ({
  tone,
  label,
  url: FLASH_SCREENSHOTS_READY ? `/realisations/flash-market/${file}` : "",
});

export const PROJECTS = [
  {
    slug: "flash-market",
    title: "Flash Market",
    client_name: "Flash",
    type: "application",
    category: "Application e-commerce & marketplace",
    featured: true,
    flagship: true,
    status: "published",
    sort_order: 1,
    link_url: "",
    cover: "flash",
    platforms: ["iOS", "Android"],
    summary:
      "Une marketplace mobile complète : petites annonces, boutiques professionnelles, boost payant et paiements Mobile Money multi-pays. Notre référence en développement d'application.",
    context:
      "Flash voulait une application de référence pour l'achat-vente entre particuliers et professionnels en Afrique francophone : pensée mobile d'abord, rapide même en connexion instable, et alignée sur les moyens de paiement locaux.",
    problem:
      "Réunir dans une seule application fluide : la publication et la promotion d'annonces depuis un téléphone, l'encaissement en Mobile Money sur plusieurs pays et opérateurs, et un véritable espace de gestion pour les vendeurs professionnels.",
    solution:
      "SSD Sirius a conçu et développé Flash Market de bout en bout : applications iOS et Android, back-end et base de données, passerelle de paiement Mobile Money multi-opérateurs, espace professionnel avec statistiques, messagerie et notifications — puis la publication sur l'App Store et le Google Play Store.",
    description:
      "Flash Market démontre toute la palette technique de SSD Sirius sur le développement d'application : une base de code unique pour deux stores, des paiements mobiles réels, une architecture back-end complète et une mise en production maîtrisée.",
    highlights: [
      {
        icon: "Smartphone",
        title: "Application iOS & Android",
        text: "Une seule base de code, une expérience soignée sur les deux stores.",
      },
      {
        icon: "Wallet",
        title: "Paiement Mobile Money intégré",
        text: "Boost d'annonces et services payants réglés en Mobile Money, multi-opérateurs et multi-pays (Mali, Côte d'Ivoire…).",
      },
      {
        icon: "Store",
        title: "Espace professionnel complet",
        text: "Boutique en ligne, catalogue, gestion des demandes et tableau de bord de performances pour les vendeurs pros.",
      },
      {
        icon: "MapPin",
        title: "Recherche géolocalisée",
        text: "Navigation par catégories et résultats classés par proximité.",
      },
      {
        icon: "BarChart3",
        title: "Statistiques vendeur",
        text: "Vues, contacts reçus, appels, messages et commandes sur 30 jours.",
      },
      {
        icon: "BellRing",
        title: "Messagerie & notifications",
        text: "Discussions acheteur-vendeur et notifications push en temps réel.",
      },
    ],
    features: [
      "Petites annonces : publication guidée, photos, catégories, favoris et articles récemment consultés",
      "Boost d'annonces et services payants réglés en Mobile Money",
      "Passerelle de paiement multi-opérateurs et multi-pays (Orange Money, paiement par QR…)",
      "Espace professionnel : boutique, catalogue, gestion des demandes et des commandes",
      "Tableau de bord de performances (vues, contacts, appels, messages)",
      "Messagerie intégrée acheteur-vendeur et notifications push",
      "Recherche géolocalisée et navigation par catégories",
    ],
    screens: [
      flashShot("01-recherche.png", "flash", "Recherche géolocalisée et catégories"),
      flashShot("02-paiement-orange-money.png", "flash-pay", "Boost d'annonce — paiement Orange Money"),
      flashShot("03-choix-operateur.png", "flash-pay", "Choix du pays et de l'opérateur"),
      flashShot("04-profil-vendeur.png", "flash-2", "Profil vendeur — annonces & espace pro"),
      flashShot("05-accueil.png", "flash", "Accueil — pros et annonces récentes"),
      flashShot("06-espace-pro.png", "flash-2", "Espace pro — catalogue & performances"),
    ],
    techGroups: [
      { label: "Application mobile", items: ["React Native", "Expo", "iOS", "Android"] },
      { label: "Back-end & données", items: ["Node.js", "API REST", "PostgreSQL"] },
      { label: "Paiement", items: ["Passerelle Mobile Money", "Orange Money", "Multi-pays", "Paiement par QR"] },
      { label: "Infrastructure & publication", items: ["Hébergement cloud", "Notifications push", "App Store", "Google Play"] },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Mobile Money", "iOS", "Android"],
    metrics: [
      { label: "Plateformes", value: "iOS + Android" },
      { label: "Paiement", value: "Mobile Money multi-pays" },
      { label: "Périmètre", value: "App + back-end + publication" },
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
