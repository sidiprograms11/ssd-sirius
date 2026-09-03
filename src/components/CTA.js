import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE } from "@/data/site";

// Bloc de conversion réutilisable en fin de page.
export default function CTA({
  title = "Vous avez un projet en tête ?",
  text = SITE.promise,
  primary = { href: "/contact", label: "Démarrer un projet" },
  secondary = { href: "/realisations", label: "Voir les réalisations" },
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="mission">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            SSD Sirius
          </span>
          <h2 className="h2" style={{ margin: "16px auto 0", maxWidth: "22ch" }}>
            {title}
          </h2>
          <p className="lead mx-auto" style={{ marginTop: 16 }}>
            {text}
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 28,
            }}
          >
            <Link href={primary.href} className="btn btn--primary">
              {primary.label}
              <Icon name="ArrowRight" />
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn--ghost">
                {secondary.label}
                <Icon name="ArrowRight" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
