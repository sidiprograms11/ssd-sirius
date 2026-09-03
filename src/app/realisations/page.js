import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Réalisations",
  description:
    "Portfolio SSD Sirius : sites web, plateformes et application officielle. Besoin métier, conception, technologies et résultat pour chaque projet.",
  alternates: { canonical: "/realisations" },
};

export const revalidate = 300;

export default async function RealisationsPage() {
  const projects = await getProjects();

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

      <section className="section">
        <div className="container">
          {projects.length === 0 ? (
            <p className="muted">Les réalisations seront bientôt publiées.</p>
          ) : (
            <div className="grid grid-3">
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
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
