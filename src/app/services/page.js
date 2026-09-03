import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { SERVICES, PROCESS } from "@/data/services";

export const metadata = {
  title: "Services & expertises",
  description:
    "E-commerce, Mobile Money, Web & Mobile, API & Systèmes : les expertises de SSD Sirius pour concevoir des produits digitaux sur mesure au Mali.",
  alternates: { canonical: "/services" },
};

export const revalidate = 300;

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Nos expertises</span>
          <h1 className="display page-hero__title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
            Ce que nous savons <span className="grad-text">construire</span>
          </h1>
          <p className="lead">
            Du cadrage au déploiement, nous concevons des solutions fiables, adaptées au marché
            malien et pensées pour évoluer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container stack" style={{ "--gap": "clamp(20px, 3vw, 32px)" }}>
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.slug}
              id={s.slug}
              className="panel"
              style={{ padding: "clamp(24px, 4vw, 44px)", scrollMarginTop: 100 }}
            >
              <div className="grid grid-2" style={{ gap: "clamp(20px, 4vw, 44px)", alignItems: "start" }}>
                <div className="stack" style={{ "--gap": "16px" }}>
                  <span className="icon-orbit">
                    <Icon name={s.icon} />
                  </span>
                  <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)" }}>
                    {s.title}
                  </h2>
                  <p className="muted">{s.description}</p>
                  <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
                    <Link href="/contact" className="link-arrow">
                      Demander une estimation
                      <Icon name="ArrowRight" />
                    </Link>
                    {s.proof && (
                      <Link href={s.proof.href} className="link-arrow">
                        {s.proof.label}
                        <Icon name="ArrowUpRight" />
                      </Link>
                    )}
                  </div>
                </div>
                <ul className="stack" style={{ "--gap": "10px", listStyle: "none" }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ display: "flex", gap: 12 }}>
                      <Icon name="Check" width={18} height={18} style={{ color: "var(--violet-bright)", flexShrink: 0, marginTop: 3 }} />
                      <span className="muted">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Notre approche</span>
            <h2 className="h2">Une méthode simple et lisible</h2>
          </div>
          <div className="steps">
            {PROCESS.map((p) => (
              <div className="panel step" key={p.step}>
                <span className="step__num">{p.step}</span>
                <h3 className="h3" style={{ margin: "10px 0 8px" }}>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Besoin d'une estimation ?"
        text="Expliquez-nous votre projet. Nous revenons vers vous avec une proposition claire."
        primary={{ href: "/contact", label: "Demander une estimation" }}
      />
    </>
  );
}
