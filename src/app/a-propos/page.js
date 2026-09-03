import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { SiriusVisual } from "@/components/SiriusMark";
import { DIFFERENTIATORS } from "@/data/services";
import { SITE } from "@/data/site";

export const metadata = {
  title: "À propos",
  description:
    "SSD Sirius Solutions Digital : structure technologique basée au Mali, spécialisée dans la conception de produits numériques professionnels et adaptés au marché africain.",
  alternates: { canonical: "/a-propos" },
};

export const revalidate = 300;

const VALUES = [
  { icon: "PenTool", title: "Exigence", text: "Nous soignons l'exécution, du parcours utilisateur jusqu'au déploiement." },
  { icon: "ShieldCheck", title: "Fiabilité", text: "Des solutions sécurisées, testées et pensées pour durer." },
  { icon: "Globe", title: "Ancrage local", text: "Nous concevons pour les usages réels du Mali et de l'Afrique francophone." },
  { icon: "LifeBuoy", title: "Proximité", text: "Un interlocuteur disponible, un accompagnement dans la durée." },
];

export default function AProposPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero__grid" style={{ alignItems: "center" }}>
            <div>
              <span className="eyebrow">L'entreprise</span>
              <h1 className="display page-hero__title" style={{ fontSize: "clamp(2rem, 4.6vw, 3rem)" }}>
                Une structure <span className="grad-text">technologique</span>, basée au Mali
              </h1>
              <p className="lead">
                {SITE.legalName} conçoit, développe et publie des applications et produits
                digitaux sur mesure. Notre promesse tient en une phrase : {SITE.promise}
              </p>
            </div>
            <div className="hero__visual" style={{ maxWidth: 360, marginInline: "auto" }}>
              <SiriusVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "clamp(24px, 4vw, 48px)" }}>
            <Reveal className="stack" style={{ "--gap": "14px" }}>
              <h2 className="h3">Notre vision</h2>
              <p className="muted">
                Le numérique doit être un levier concret de croissance pour les entreprises
                africaines, pas une couche de complexité. Nous transformons une idée métier en
                produit digital fiable, moderne et évolutif.
              </p>
            </Reveal>
            <Reveal className="stack" style={{ "--gap": "14px" }} delay={80}>
              <h2 className="h3">Notre approche</h2>
              <p className="muted">
                Nous partons du besoin réel, concevons des parcours simples, développons par
                itérations courtes et livrons des solutions que vos équipes peuvent piloter en
                autonomie. Mobile d'abord, performance et sécurité à chaque étape.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nos valeurs</span>
          </div>
          <div className="grid grid-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="card">
                <span className="icon-orbit">
                  <Icon name={v.icon} />
                </span>
                <h3 className="h3">{v.title}</h3>
                <p className="muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="mission">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Notre différence</span>
            <h2 className="h2">{SITE.tagline}</h2>
            <div className="proofbar" style={{ marginTop: 40, borderTop: 0, paddingTop: 0, textAlign: "left" }}>
              {DIFFERENTIATORS.map((d) => (
                <div className="proofbar__item" key={d.title}>
                  <Icon name={d.icon} />
                  <div>
                    <strong>{d.title}</strong>
                    <span>{d.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
