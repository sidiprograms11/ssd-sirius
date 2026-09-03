// Cadre de maquette stylisé (placeholder de capture d'écran).
// `tone` correspond à une palette définie dans globals.css (shot-*).
// Quand une vraie image est fournie (`src`), elle est affichée à la place.

export default function MockShot({ tone = "dark", label = "", phone = false, src = "", alt = "" }) {
  if (src) {
    return (
      <div className={`mock ${phone ? "mock--phone" : "mock--browser"}`}>
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }
  return (
    <div
      className={`mock ${phone ? "mock--phone" : "mock--browser"} shot-${tone}`}
      role="img"
      aria-label={label || "Aperçu de la réalisation"}
    >
      <div className="mock__body">
        {label && <span className="mock__label">{label}</span>}
      </div>
    </div>
  );
}
