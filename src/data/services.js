// Expertises SSD Sirius — section /services et bloc home.
// `icon` correspond à un nom d'icône lucide-react.

export const SERVICES = [
  {
    slug: "e-commerce",
    icon: "ShoppingCart",
    title: "E-commerce",
    excerpt:
      "Plateformes e-commerce modernes avec paiements intégrés et expérience utilisateur optimale.",
    description:
      "Nous concevons des boutiques en ligne pensées pour le marché africain : catalogue rapide, panier fluide, tunnel de commande court et paiement sécurisé. Chaque plateforme est administrable sans code et prête à évoluer.",
    points: [
      "Catalogue, panier et tunnel de commande optimisés mobile",
      "Paiement carte et Mobile Money",
      "Back-office produits, stocks et commandes",
      "Suivi des ventes et exports",
    ],
  },
  {
    slug: "mobile-money",
    icon: "Wallet",
    title: "Mobile Money",
    excerpt:
      "Intégration sécurisée des solutions de paiement mobile et services financiers.",
    description:
      "Nous intégrons les principaux services de paiement mobile de la région et sécurisons chaque transaction : initiation, callback, réconciliation et journalisation. L'objectif : encaisser de façon fiable, même en connexion instable.",
    points: [
      "Intégration API des opérateurs Mobile Money",
      "Gestion des callbacks et des états de transaction",
      "Réconciliation et tableau de bord des encaissements",
      "Sécurité, journalisation et alertes",
    ],
  },
  {
    slug: "web-mobile",
    icon: "Smartphone",
    title: "Web & Mobile",
    excerpt:
      "Applications web et mobiles sur mesure adaptées à vos métiers et à vos utilisateurs.",
    description:
      "Nous développons des applications métier et grand public : interfaces claires, performances soignées et fonctionnement dégradé hors-ligne quand c'est nécessaire. Du cadrage au déploiement, nous gérons tout le cycle.",
    points: [
      "Applications web progressives et applications mobiles",
      "Interfaces sur mesure et design system dédié",
      "Mode hors-ligne et synchronisation",
      "Déploiement et maintenance continue",
    ],
  },
  {
    slug: "api-systemes",
    icon: "Boxes",
    title: "API & Systèmes",
    excerpt:
      "Intégration d'API et développement de systèmes robustes pour connecter vos services.",
    description:
      "Nous construisons et connectons des systèmes : API internes, passerelles vers des services externes, automatisations et bases de données bien modélisées. Une architecture pensée pour durer et monter en charge.",
    points: [
      "Conception et documentation d'API",
      "Intégrations tierces (paiement, SMS, logistique...)",
      "Modélisation de bases de données et migrations",
      "Automatisations et tâches planifiées",
    ],
  },
];

export const DIFFERENTIATORS = [
  {
    icon: "PenTool",
    title: "Conception sur mesure",
    text: "Chaque projet est unique. Nous partons de votre métier, pas d'un template.",
  },
  {
    icon: "Cpu",
    title: "Technologies avancées",
    text: "Des solutions fiables et évolutives, construites sur un socle moderne.",
  },
  {
    icon: "ShieldCheck",
    title: "Sécurité renforcée",
    text: "Protection des données et performance garanties à chaque niveau.",
  },
  {
    icon: "LifeBuoy",
    title: "Accompagnement",
    text: "Un interlocuteur à chaque étape de votre croissance.",
  },
];

export const PROCESS = [
  { step: "01", title: "Cadrage", text: "Nous clarifions le besoin métier, les objectifs et les priorités." },
  { step: "02", title: "Conception", text: "Nous concevons les parcours, l'interface et l'architecture technique." },
  { step: "03", title: "Développement", text: "Nous développons par itérations courtes, avec démonstrations régulières." },
  { step: "04", title: "Livraison & suivi", text: "Nous déployons, formons vos équipes et assurons la maintenance." },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}
