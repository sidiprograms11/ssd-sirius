// ------------------------------------------------------------------
// Données de repli des réalisations (DEMO).
// Utilisées quand Supabase n'est pas configuré ou ne renvoie rien.
// À remplacer par le contenu réel (noms, textes, captures, chiffres)
// via l'admin Supabase lors de la phase de contenu.
// Ne pas afficher de chiffres non vérifiables.
// ------------------------------------------------------------------

export const PROJECTS = [
  {
    slug: "plateforme-e-commerce",
    title: "Plateforme e-commerce",
    client_name: "Projet interne SSD Sirius",
    type: "plateforme",
    category: "E-commerce",
    featured: true,
    status: "published",
    sort_order: 1,
    link_url: "",
    cover: "commerce",
    summary:
      "Une expérience d'achat fluide et sécurisée, conçue pour le marché africain.",
    context:
      "Les commerçants de la région ont besoin de vendre en ligne sans dépendre d'une place de marché tierce, avec un paiement adapté aux usages locaux.",
    problem:
      "Les solutions existantes sont lentes sur mobile, complexes à administrer et mal intégrées aux moyens de paiement locaux.",
    solution:
      "Nous avons conçu une plateforme e-commerce sur mesure : catalogue rapide, tunnel de commande court, paiement carte et Mobile Money, et un back-office simple pour gérer produits, stocks et commandes.",
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
    slug: "marketplace-locale",
    title: "Marketplace locale",
    client_name: "Projet interne SSD Sirius",
    type: "site",
    category: "Web & conversion",
    featured: true,
    status: "published",
    sort_order: 2,
    link_url: "",
    cover: "market",
    summary:
      "Un site pensé pour la conversion : parcours court, recherche efficace, mise en relation rapide.",
    context:
      "Mettre en relation vendeurs et acheteurs d'une même ville, avec une navigation claire et un temps de chargement minimal.",
    problem:
      "Trop d'étapes entre la recherche et le contact vendeur, et une expérience peu lisible sur petit écran.",
    solution:
      "Nous avons retravaillé l'architecture de l'information et les parcours : recherche filtrée, fiches lisibles, contact vendeur en un geste, et interface entièrement responsive.",
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
  {
    slug: "passerelle-paiement",
    title: "Passerelle de paiement",
    client_name: "Projet interne SSD Sirius",
    type: "site",
    category: "Performance & architecture",
    featured: true,
    status: "published",
    sort_order: 3,
    link_url: "",
    cover: "pay",
    summary:
      "Une architecture robuste pour encaisser de façon fiable, même en connexion instable.",
    context:
      "Centraliser les encaissements Mobile Money de plusieurs services derrière une seule intégration.",
    problem:
      "Chaque service réintégrait les opérateurs de paiement à sa manière, sans réconciliation ni visibilité commune.",
    solution:
      "Nous avons construit une passerelle : API unique d'initiation de paiement, gestion des callbacks, reprise sur incident, réconciliation automatique et tableau de bord des transactions.",
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
    slug: "application-officielle",
    title: "Application officielle",
    client_name: "Projet interne SSD Sirius",
    type: "application",
    category: "Produit & écosystème",
    featured: true,
    status: "published",
    sort_order: 4,
    link_url: "",
    cover: "app",
    summary:
      "Une application mobile complète : compte, commandes, paiement et notifications dans un même écosystème.",
    context:
      "Offrir à une marque son propre canal mobile, au-delà d'un simple site : fidélité, commandes et paiement réunis.",
    problem:
      "Les usages étaient éclatés entre plusieurs outils, sans compte unique ni suivi des commandes.",
    solution:
      "Nous avons conçu et développé une application officielle : création de compte, catalogue, commande, paiement Mobile Money, historique et notifications, adossée à une API dédiée.",
    features: [
      "Compte utilisateur et authentification",
      "Catalogue et commande dans l'application",
      "Paiement Mobile Money intégré",
      "Historique des commandes et notifications push",
      "API dédiée et back-office de gestion",
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Mobile Money", "Notifications push"],
    metrics: [
      { label: "Périmètre", value: "Compte + commande + paiement" },
      { label: "Plateformes", value: "Android / iOS" },
    ],
    gallery: [
      { tone: "app", label: "Onboarding" },
      { tone: "app-2", label: "Catalogue" },
      { tone: "app-3", label: "Paiement Mobile Money" },
      { tone: "app-4", label: "Historique des commandes" },
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}
