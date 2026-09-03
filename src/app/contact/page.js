import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { getProjects, getSettings } from "@/lib/content";
import { whatsappLink, MEETING } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contactez SSD Sirius Solutions Digitales : formulaire, e-mail, téléphone et WhatsApp. Basés à Bamako, nous accompagnons vos projets digitaux.",
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
          <p className="lead">{MEETING.long}</p>

          {MEETING.bookingUrl && (
            <div className="hero__cta">
              <a
                href={MEETING.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                {MEETING.bookingLabel}
                <Icon name="ArrowUpRight" />
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappLink("Bonjour SSD Sirius, je souhaite discuter d'un projet.")}
                target="_blank"
                rel="noreferrer"
              >
                Écrire sur WhatsApp
                <Icon name="MessageCircle" />
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ContactForm projects={projects} />

            <div className="contact-cards">
              {MEETING.bookingUrl && (
                <a
                  className="booking-card"
                  href={MEETING.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-orbit">
                    <Icon name="CalendarClock" />
                  </span>
                  <div>
                    <h2 className="h3">Réserver un échange</h2>
                    <p className="muted">{MEETING.bookingHint}</p>
                    <span className="link-arrow">
                      {MEETING.bookingLabel}
                      <Icon name="ArrowUpRight" />
                    </span>
                  </div>
                </a>
              )}

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
              {contact.phoneAlt && (
                <a className="panel contact-line" href={`tel:${contact.phoneAlt.replace(/\s+/g, "")}`}>
                  <Icon name="Phone" />
                  <div>
                    <span>Second numéro</span>
                    {contact.phoneAlt}
                  </div>
                </a>
              )}
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
                  {(contact.cities || [contact.city]).join(" · ")}
                </div>
              </div>

              <div className="panel" style={{ padding: 18 }}>
                <p className="muted" style={{ fontSize: "0.88rem" }}>
                  Basés entre Bamako et Paris, nous concevons, développons et publions des
                  applications et produits digitaux sur mesure pour le Mali et l&apos;Afrique
                  francophone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
