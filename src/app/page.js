import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import MockShot from "@/components/MockShot";
import SpaceScene from "@/components/SpaceScene";
import { getProjects, getSettings } from "@/lib/content";
import { SERVICES, DIFFERENTIATORS } from "@/data/services";
import { HERO, GUARANTEES, MEETING } from "@/data/site";

export const revalidate = 300;

const USE_CASES = [
  { icon: "Smartphone", label: "Applications mobiles" },
  { icon: "ShoppingCart", label: "Commerce en ligne" },
  { icon: "Store", label: "Marketplaces" },
  { icon: "Wallet", label: "Mobile Money" },
  { icon: "Boxes", label: "API & systèmes" },
  { icon: "Globe", label: "Présence web" },
];

export default async function HomePage() {
  const [projects, settings] = await Promise.all([getProjects(), getSettings()]);
  const flagship = projects.find((p) => p.flagship) || projects[0];
  const rest = projects.filter((p) => p.slug !== flagship?.slug);
  const stats = settings.stats || [];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <span className="eyebrow">{HERO.eyebrow}</span>
              <h1 className="display hero__title">
                {HERO.titleLead} <span className="grad-text">{HERO.titleAccent}</span>.
              </h1>
              <p className="lead">{HERO.subtitle}</p>
              <div className="hero__cta">
                <Link href="/contact" className="btn btn--primary">
                  {MEETING.ctaLabel}
                  <Icon name="ArrowRight" />
                </Link>
                <Link href="/realisations" className="btn btn--ghost">
                  Découvrir nos réalisations
                  <Icon name="ArrowRight" />
                </Link>
              </div>
              <p className="hero__note">
                <Icon name="Sparkles" />
                Ni devis à remplir, ni dossier à monter — parlez-nous de votre projet, on
                s&apos;occupe du reste.
              </p>
            </div>

            <div className="hero__scene">
              <SpaceScene />
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

      {/* ---------------- Projet phare : Flash Market ---------------- */}
      {flagship && (
        <section className="section" id="flash-market">
          <div className="container">
            <Reveal className="flagship">
              <div className="flagship__grid">
                <div className="stack" style={{ "--gap": "16px" }}>
                  <span className="badge-flagship">
                    <Icon name="Star" />
                    Projet phare
                  </span>
                  <h2 className="h2" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)" }}>
                    {flagship.title}
                  </h2>
                  {flagship.platforms?.length > 0 && (
                    <div className="platform-badges">
                      {flagship.platforms.map((p) => (
                        <span key={p} className="tag">{p}</span>
                      ))}
                    </div>
                  )}
                  <p className="muted">{flagship.summary}</p>
                  <div className="tag-row">
                    {flagship.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <Link href={`/realisations/${flagship.slug}`} className="btn btn--primary">
                    Découvrir le projet
                    <Icon name="ArrowRight" />
                  </Link>
                </div>

                <div>
                  {flagship.screens?.length > 0 ? (
                    <div className="screens-row">
                      {flagship.screens.slice(0, 4).map((s, i) => (
                        <div className="screen-item" key={i}>
                          <MockShot tone={s.tone} label={s.label} phone src={s.url} />
                          <span>{s.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <MockShot
                      {...(flagship.cover_url ? { src: flagship.cover_url } : { tone: flagship.cover })}
                      label={flagship.title}
                      phone={flagship.type === "application"}
                    />
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

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

      {/* ---------------- Engagements ---------------- */}
      <section className="section section--tight" id="engagements">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nos engagements</span>
            <h2 className="h2">
              Ce que <span className="grad-text">Sirius</span> garantit
            </h2>
            <p className="lead">
              Vous n'avez qu'à valider et à lancer votre activité. Le reste, c'est notre travail.
            </p>
          </div>

          <div className="grid grid-3">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.title} delay={i * 50} className="card">
                <span className="icon-orbit">
                  <Icon name={g.icon} />
                </span>
                <h3 className="h3">{g.title}</h3>
                <p className="muted">{g.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Autres réalisations ---------------- */}
      {rest.length > 0 && (
        <section className="section" id="realisations">
          <div className="container">
            <div
              className="section-head"
              style={{
                maxWidth: "none",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <div className="stack" style={{ "--gap": "14px" }}>
                <span className="eyebrow">Réalisations</span>
                <h2 className="h2">
                  D'autres <span className="grad-text">projets</span> signés Sirius.
                </h2>
              </div>
              <Link href="/realisations" className="btn btn--ghost">
                Voir tous les projets
                <Icon name="ArrowRight" />
              </Link>
            </div>

            <div className="grid grid-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
