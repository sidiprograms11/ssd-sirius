// Symbole Sirius réutilisable : anneau dégradé + étoile à 4 branches + halo.
// `variant="visual"` produit la grande version animée (hero).

export default function SiriusMark({ size = 40, withGlow = true, className = "", title = "SSD Sirius" }) {
  const gid = `sirius-grad-${size}`;
  const sid = `sirius-soft-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id={gid} x1="12" y1="16" x2="88" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4f7cff" />
          <stop offset="0.55" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#b06bff" />
        </linearGradient>
        <radialGradient id={sid} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {withGlow && <circle cx="50" cy="50" r="30" fill={`url(#${sid})`} opacity="0.5" />}

      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="4"
      />

      {/* Étoile à quatre branches */}
      <path
        d="M50 12 C52 34 66 48 88 50 C66 52 52 66 50 88 C48 66 34 52 12 50 C34 48 48 34 50 12 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function SiriusVisual() {
  return (
    <div className="sirius-visual" aria-hidden="true">
      <div className="sirius-visual__glow" />
      <div className="sirius-visual__orbit" />
      <div className="sirius-visual__orbit" />
      <div className="sirius-visual__orbit" />
      <div className="sirius-visual__core">
        <SiriusMark size={180} />
      </div>
    </div>
  );
}
