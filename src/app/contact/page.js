import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { getProjects, getSettings } from "@/lib/content";
import { whatsappLink } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contactez SSD Sirius Solutions Digital : formulaire, e-mail, téléphone et WhatsApp. Basés à Bamako, nous accompagnons vos projets digitaux.",
  alternates: { canonical: "/contact" },
};

export const revalidate = 300;

export default async function ContactPage() {
  const [projects, settings] = await Promise.all([getProjects(), getSettings()]);
  const { contact } = settings;
  const tel = contact.phone.replace(/\s+/g, "");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="display page-hero__title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
            Parlons de votre <span className="grad-text">projet</span>
          </h1>
          <p className="lead">
            Décrivez votre besoin : nous revenons vers vous rapidement avec une approche claire
            et une estimation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ContactForm projects={projects} />

            <div className="contact-cards">
              <a className="panel contact-line" href={`mailto:${contact.email}`}>
                <Icon name="Mail" />
                <div>
                  <span>E-mail</span>
                  {contact.email}
                </div>
              </a>
              <a className="panel contact-line" href={`tel:${tel}`}>
                <Icon name="Phone" />
                <div>
                  <span>Téléphone</span>
                  {contact.phone}
                </div>
              </a>
              <a
                className="panel contact-line"
                href={whatsappLink("Bonjour SSD Sirius, je souhaite discuter d'un projet.")}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="MessageCircle" />
                <div>
                  <span>WhatsApp</span>
                  Discuter maintenant
                </div>
              </a>
              <div className="panel contact-line">
                <Icon name="MapPin" />
                <div>
                  <span>Localisation</span>
                  {contact.city}
                </div>
              </div>

              <div className="panel" style={{ padding: 18 }}>
                <p className="muted" style={{ fontSize: "0.88rem" }}>
                  Nous concevons, développons et intégrons des solutions digitales sur mesure
                  pour les entreprises et organisations du Mali et d'Afrique francophone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
