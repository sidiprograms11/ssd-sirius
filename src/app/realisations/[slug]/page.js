import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import MockShot from "@/components/MockShot";
import ProjectGallery from "@/components/ProjectGallery";
import CTA from "@/components/CTA";
import { getProject, getProjectSlugs } from "@/lib/content";
import { SITE } from "@/data/site";

export const revalidate = 300;
export const dynamicParams = true;

const TYPE_LABEL = { site: "Site web", application: "Application", plateforme: "Plateforme" };

export async function generateStaticParams() {
  try {
    const slugs = await getProjectSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Réalisation introuvable" };
  return {
    title: project.title,
    description: project.summary || project.solution?.slice(0, 155),
    alternates: { canonical: `/realisations/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${SITE.name}`,
      description: project.summary,
      url: `${SITE.url}/realisations/${project.slug}`,
      type: "article",
    },
  };
}

function Block({ title, children }) {
  if (!children) return null;
  return (
    <div className="stack" style={{ "--gap": "10px" }}>
      <h2 className="h3">{title}</h2>
      <p className="muted">{children}</p>
    </div>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const isPhone = project.type === "application";
  const galleryItems =
    project.images?.length > 0
      ? project.images.map((im) => ({ url: im.url, alt: im.alt, label: im.alt }))
      : project.gallery || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    about: project.category,
    creator: { "@type": "Organization", name: SITE.legalName },
    abstract: project.summary,
    keywords: project.technologies?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href="/realisations">Réalisations</Link>
            <span aria-hidden="true">/</span>
            <span>{project.title}</span>
          </nav>

          <span className="eyebrow">
            {TYPE_LABEL[project.type] || "Projet"}
            {project.category ? ` — ${project.category}` : ""}
          </span>
          <h1 className="display page-hero__title" style={{ fontSize: "clamp(2rem, 4.6vw, 3rem)" }}>
            {project.title}
          </h1>
          <p className="lead">{project.summary}</p>

          <div className="tag-row" style={{ marginTop: 22 }}>
            {project.client_name && <span className="tag">Client : {project.client_name}</span>}
            {project.technologies?.slice(0, 6).map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <MockShot
            {...(project.cover_url ? { src: project.cover_url } : { tone: project.cover })}
            label={project.title}
            phone={isPhone}
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "clamp(24px, 4vw, 44px)" }}>
            <Block title="Contexte">{project.context}</Block>
            <Block title="Problématique">{project.problem}</Block>
            <Block title="Solution SSD Sirius">{project.solution}</Block>
            <Block title="Description">{project.description}</Block>
          </div>
        </div>
      </section>

      {project.features?.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Fonctionnalités clés</span>
            </div>
            <div className="grid grid-2">
              {project.features.map((f) => (
                <div className="panel" key={f} style={{ padding: "16px 18px", display: "flex", gap: 12 }}>
                  <Icon name="Check" width={18} height={18} style={{ color: "var(--violet-bright)", flexShrink: 0, marginTop: 3 }} />
                  <span className="muted">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {galleryItems.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Aperçus</span>
              <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)" }}>Galerie du projet</h2>
            </div>
            <ProjectGallery items={galleryItems} phone={isPhone} />
          </div>
        </section>
      )}

      {(project.metrics?.length > 0 || project.link_url) && (
        <section className="section section--tight">
          <div className="container">
            <div className="grid grid-3">
              {project.metrics?.map((m) => (
                <div className="panel" key={m.label} style={{ padding: "22px 20px" }}>
                  <span className="stats__label">{m.label}</span>
                  <p style={{ fontSize: "1.05rem", marginTop: 6 }}>{m.value}</p>
                </div>
              ))}
            </div>
            {project.link_url && (
              <a
                href={project.link_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
                style={{ marginTop: 24 }}
              >
                Voir la réalisation en ligne
                <Icon name="ExternalLink" />
              </a>
            )}
          </div>
        </section>
      )}

      <CTA
        title="Un besoin proche de ce projet ?"
        text="Décrivez votre contexte : nous revenons vers vous avec une approche et une estimation."
        primary={{ href: "/contact", label: "Parler de mon projet" }}
        secondary={{ href: "/realisations", label: "Autres réalisations" }}
      />
    </>
  );
}
