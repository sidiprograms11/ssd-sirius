import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import MockShot from "@/components/MockShot";
import { SiriusVisual } from "@/components/SiriusMark";
import { getProjects, getSettings } from "@/lib/content";
import { SERVICES, DIFFERENTIATORS } from "@/data/services";
import { SITE } from "@/data/site";

export const revalidate = 300;

const USE_CASES = [
  { icon: "ShoppingCart", label: "Commerce en ligne" },
  { icon: "Store", label: "Marketplaces" },
  { icon: "Wallet", label: "Mobile Money" },
  { icon: "Smartphone", label: "Applications mobiles" },
  { icon: "Boxes", label: "API & systèmes" },
  { icon: "Globe", label: "Présence web" },
];

export default async function HomePage() {
  const [projects, settings] = await Promise.all([getProjects(), getSettings()]);
  const [feature, ...rest] = projects;
  const stats = settings.stats || [];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <span className="eyebrow">{SITE.legalName}</span>
              <h1 className="display hero__title">
                Des solutions digitales pour un avenir{" "}
                <span className="grad-text">sans limites</span>.
              </h1>
              <p className="lead">
                Nous concevons des sites, applications et systèmes sur mesure pour accompagner
                la croissance des entreprises maliennes et africaines.
              </p>
              <div className="hero__cta">
                <Link href="/contact" className="btn btn--primary">
                  Démarrer un projet
                  <Icon name="ArrowRight" />
                </Link>
                <Link href="/realisations" className="btn btn--ghost">
                  Voir les réalisations
                  <Icon name="ArrowRight" />
                </Link>
              </div>
            </div>

            <div className="hero__visual">
              <SiriusVisual />
            </div>
          </div>

          <div className="proofbar">
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
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nos services</span>
            <h2 className="h2">
              Des solutions digitales adaptées à <span className="grad-text">vos besoins</span>.
            </h2>
            <p className="lead">
              Nous transformons vos idées en produits digitaux performants, sécurisés et évolutifs.
            </p>
          </div>

          <div className="grid grid-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} href={`/services#${s.slug}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Réalisations ---------------- */}
      <section className="section" id="realisations">
        <div className="container">
          <div className="section-head" style={{ maxWidth: "none", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <div className="stack" style={{ "--gap": "14px" }}>
              <span className="eyebrow">Réalisations</span>
              <h2 className="h2">
                Des <span className="grad-text">projets</span> qui parlent d'eux-mêmes.
              </h2>
            </div>
            <Link href="/realisations" className="btn btn--ghost">
              Voir tous les projets
              <Icon name="ArrowRight" />
            </Link>
          </div>

          {feature && (
            <Reveal className="panel feature-project" style={{ marginBottom: 26 }}>
              <div>
                <span className="feature-project__index">01 / {String(projects.length).padStart(2, "0")}</span>
                <h3 className="h2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", margin: "12px 0 12px" }}>
                  {feature.title}
                </h3>
                <p className="muted">{feature.summary}</p>
                <div className="tag-row" style={{ marginTop: 18 }}>
                  {feature.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <Link
                  href={`/realisations/${feature.slug}`}
                  className="link-arrow"
                  style={{ marginTop: 22 }}
                >
                  Voir le projet
                  <Icon name="ArrowRight" />
                </Link>
              </div>
              <MockShot
                {...(feature.cover_url ? { src: feature.cover_url } : { tone: feature.cover })}
                label={feature.title}
                phone={feature.type === "application"}
              />
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="grid grid-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- Indicateurs ---------------- */}
      {stats.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="stats">
              {stats.map((s) => (
                <div className="stats__item" key={s.label}>
                  {s.icon && <Icon name={s.icon} />}
                  <span className="stats__value">{s.value}</span>
                  <span className="stats__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Secteurs / cas d'usage ---------------- */}
      <section className="section section--tight">
        <div className="container">
          <p className="eyebrow" style={{ justifyContent: "center", marginBottom: 26 }}>
            Ce que nous construisons
          </p>
          <div className="trust">
            {USE_CASES.map((u) => (
              <span className="trust__logo" key={u.label}>
                <Icon name={u.icon} />
                {u.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Mission ---------------- */}
      <section className="section">
        <div className="container">
          <div className="mission">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Notre mission
            </span>
            <h2 className="h2">Conçu au Mali. Pensé pour l'Afrique.</h2>
            <p className="lead mx-auto" style={{ marginTop: 16 }}>
              Nous construisons des produits digitaux qui tiennent compte des réalités locales :
              usages mobiles, connexions instables, paiement Mobile Money et besoin d'autonomie
              pour les équipes.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
