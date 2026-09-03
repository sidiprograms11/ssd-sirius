// Informations publiques de repli (utilisées si la table `settings` Supabase est vide
// ou si Supabase n'est pas configuré). Les valeurs d'environnement priment.

export const SITE = {
  name: "SSD Sirius",
  legalName: "SSD Sirius Solutions Digitales",
  tagline: "Conçu au Mali. Pensé pour l'Afrique.",
  promise:
    "Vous validez, on livre : conception, développement, base de données, paiements et publication sur les stores.",
  description:
    "SSD Sirius Solutions Digitales conçoit, développe et publie des applications et produits digitaux sur mesure — base de données, paiements Mobile Money, App Store et Play Store inclus.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ssd-sirius.com",
  locale: "fr_FR",
};

// Contenu du hero de la page d'accueil.
export const HERO = {
  eyebrow: "SSD Sirius Solutions Digitales",
  titleLead: "Votre application conceptualisée et",
  titleAccent: "disponible en 1 mois",
  subtitle:
    "Nous concevons, développons et publions votre application — base de données, paiements Mobile Money, App Store et Play Store inclus. Vous validez, on s'occupe de tout le reste.",
};

// Message de conversion : pas de devis ni d'estimation à remplir.
// Le visiteur nous parle de son projet, on s'occupe du reste.
export const MEETING = {
  ctaLabel: "Discutons de votre projet",
  altLabel: "Parlez-nous de votre projet",
  short: "Parlez-nous de votre projet. Tout le reste, on s'en occupe.",
  long: "Pas de dossier à monter ni de formulaire interminable. Parlez-nous de votre projet — un simple échange en visio suffit — et tout le reste, on s'en occupe : conception, développement, base de données, paiements et mise en ligne sur les stores.",
  // Lien de réservation Google Agenda (visio Meet).
  // Tant qu'il est vide, les boutons renvoient vers /contact.
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/fhvf1aoL6gvsn7Kz7",
  bookingLabel: "Choisir un créneau",
  bookingHint: "Choisissez l'horaire qui vous arrange, le lien visio arrive automatiquement.",
};

// Engagements concrets mis en avant sur la home.
export const GUARANTEES = [
  {
    icon: "Rocket",
    title: "Des premiers résultats dès la 1re semaine",
    text: "Une version démontrable de votre projet et un premier retour concret dès les premiers jours.",
  },
  {
    icon: "RefreshCw",
    title: "Un suivi régulier",
    text: "Un point d'avancement journalier ou hebdomadaire selon le projet, avec un interlocuteur dédié.",
  },
  {
    icon: "PenTool",
    title: "Des solutions 100 % sur mesure",
    text: "On part de votre métier et de vos objectifs, jamais d'un template générique.",
  },
  {
    icon: "BadgeCheck",
    title: "La publication sur les stores incluse",
    text: "Mise en ligne sur l'App Store et le Google Play Store gérée entièrement par nos soins.",
  },
  {
    icon: "Database",
    title: "Toute la technique gérée",
    text: "Base de données, API, paiements, hébergement et maintenance : c'est notre part.",
  },
  {
    icon: "Clock",
    title: "Votre application livrée en moins d'un mois",
    text: "Vous n'avez qu'à valider et à lancer votre activité. Avec Sirius, c'est carré.",
  },
];

export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sidigano8@gmail.com",
  // Numéro principal : appels + WhatsApp
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33 6 98 43 36 02",
  // Second numéro joignable
  phoneAlt: process.env.NEXT_PUBLIC_CONTACT_PHONE_ALT || "+33 7 51 41 90 26",
  // Format international sans « + » ni espaces, pour les liens wa.me
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "33698433602",
  cities: ["Bamako, Mali", "Paris, France"],
  get city() {
    return this.cities.join(" · ");
  },
};

// Aucun réseau social pour l'instant : les icônes restent masquées
// tant que ces champs sont vides.
export const SOCIAL = {
  linkedin: "",
  facebook: "",
  instagram: "",
};

// Indicateurs affichés sur la home — uniquement des valeurs vérifiables.
// Laisser vide (`[]`) tant que les chiffres ne sont pas confirmés.
export const STATS = [
  { label: "Application livrée sur les stores", value: "iOS + Android", icon: "Smartphone" },
  { label: "Paiement Mobile Money", value: "Multi-pays", icon: "Wallet" },
  { label: "Délai de mise en ligne", value: "< 1 mois", icon: "Clock" },
  { label: "Technique prise en charge", value: "100 %", icon: "Database" },
];

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
];

export function whatsappLink(message) {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
