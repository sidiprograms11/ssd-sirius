// Informations publiques de repli (utilisées si la table `settings` Supabase est vide
// ou si Supabase n'est pas configuré). Les valeurs d'environnement priment.

export const SITE = {
  name: "SSD Sirius",
  legalName: "SSD Sirius Solutions Digital",
  tagline: "Conçu au Mali. Pensé pour l'Afrique.",
  promise:
    "Transformer une idée métier en produit digital fiable, moderne, performant et évolutif.",
  description:
    "SSD Sirius Solutions Digital conçoit des sites web, applications et systèmes sur mesure pour les entreprises et organisations du Mali et d'Afrique francophone.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ssd-sirius.com",
  locale: "fr_FR",
};

export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@ssd-sirius.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+223 70 00 00 00",
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "22370000000",
  city: process.env.NEXT_PUBLIC_CONTACT_CITY || "Bamako, Mali",
};

export const SOCIAL = {
  linkedin: "",
  facebook: "",
  instagram: "",
};

// Indicateurs affichés sur la home — uniquement des valeurs vérifiables.
// Laisser vide (`[]`) tant que les chiffres ne sont pas confirmés.
export const STATS = [
  { label: "Réalisations livrées", value: "4", icon: "Rocket" },
  { label: "Domaines couverts", value: "4", icon: "Layers" },
  { label: "Intégrations Mobile Money", value: "Oui", icon: "Wallet" },
  { label: "Ancrage africain", value: "100%", icon: "Globe" },
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
