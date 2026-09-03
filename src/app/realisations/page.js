import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import MockShot from "@/components/MockShot";
import CTA from "@/components/CTA";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Réalisations",
  description:
    "Portfolio SSD Sirius : Flash Market (application e-commerce), plateformes et sites web. Besoin métier, conception, technologies et résultat pour chaque projet.",
  alternates: { canonical: "/realisations" },
};

export const revalidate = 300;

export default async function RealisationsPage() {
  const projects = await getProjects();
  const flagship = projects.find((p) => p.flagship);
  const rest = flagship ? projects.filter((p) => p.slug !== flagship.slug) : projects;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1 className="display page-hero__title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
            Nos <span className="grad-text">réalisations</span>
          </h1>
          <p className="lead">
            Chaque projet raconte une histoire : besoin métier, conception, technologie et résultat.
          </p>
        </div>
      </section>

      {flagship && (
        <section className="section section--tight">
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

      <section className="section section--tight">
        <div className="container">
          {rest.length === 0 ? (
            <p className="muted">D'autres réalisations seront bientôt publiées.</p>
          ) : (
            <>
              {flagship && (
                <div className="section-head">
                  <span className="eyebrow">Autres projets</span>
                </div>
              )}
              <div className="grid grid-3">
                {rest.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTA
        title="Un projet similaire ?"
        text="Parlons de votre besoin. Nous vous proposons une approche claire et une estimation."
        primary={{ href: "/contact", label: "Parler de mon projet" }}
        secondary={{ href: "/services", label: "Voir nos expertises" }}
      />
    </>
  );
}
