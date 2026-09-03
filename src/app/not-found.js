import Link from "next/link";
import Icon from "@/components/Icon";
import SiriusMark from "@/components/SiriusMark";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "70dvh", display: "grid", placeItems: "center" }}>
      <div className="container text-center stack" style={{ "--gap": "18px", alignItems: "center" }}>
        <SiriusMark size={72} />
        <h1 className="display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Page <span className="grad-text">introuvable</span>
        </h1>
        <p className="lead mx-auto">
          Cette page a quitté son orbite. Revenez à l'accueil ou explorez nos réalisations.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="btn btn--primary">
            Retour à l'accueil
            <Icon name="ArrowRight" />
          </Link>
          <Link href="/realisations" className="btn btn--ghost">
            Voir les réalisations
            <Icon name="ArrowRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}
