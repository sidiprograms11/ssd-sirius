// Scène spatiale Sirius : l'étoile à quatre branches cerclée, en orbite
// au-dessus de la Terre vue de nuit. Entièrement vectorielle (aucune image
// à charger), identique en thème clair et sombre — c'est une illustration.

// Positions figées : le rendu serveur et client doit être identique.
const STARS = [
  [42, 38, 1.5, 0.9], [118, 74, 1, 0.6], [196, 30, 1.2, 0.75], [263, 96, 0.9, 0.5],
  [330, 44, 1.4, 0.85], [402, 22, 1, 0.6], [468, 88, 1.3, 0.7], [536, 40, 0.9, 0.55],
  [604, 104, 1.5, 0.9], [672, 52, 1.1, 0.65], [736, 118, 1.2, 0.7], [90, 148, 1, 0.55],
  [172, 196, 1.3, 0.75], [246, 152, 0.9, 0.5], [318, 214, 1.1, 0.6], [392, 168, 1.4, 0.8],
  [462, 232, 1, 0.55], [540, 176, 1.2, 0.7], [618, 236, 0.9, 0.5], [694, 190, 1.3, 0.75],
  [758, 250, 1, 0.6], [28, 224, 1.2, 0.65], [138, 268, 0.9, 0.5], [214, 310, 1.1, 0.6],
  [356, 292, 1, 0.55], [430, 330, 0.8, 0.45], [508, 300, 1.2, 0.65], [586, 340, 0.9, 0.5],
  [660, 306, 1.1, 0.6], [730, 348, 0.8, 0.45], [64, 322, 1, 0.55], [286, 366, 0.9, 0.5],
  [150, 96, 0.7, 0.4], [372, 118, 0.7, 0.4], [498, 140, 0.7, 0.4], [640, 160, 0.7, 0.4],
  [222, 244, 0.7, 0.38], [452, 62, 0.8, 0.45], [700, 82, 0.7, 0.4], [76, 118, 0.8, 0.45],
];

// Lumières de villes le long de l'arc terrestre : [x, y, r, opacité]
const CITY_LIGHTS = [
  [96, 486, 1.6, 0.75], [128, 500, 1.1, 0.55], [158, 478, 1.9, 0.85], [186, 494, 1.2, 0.6],
  [214, 472, 1.5, 0.7], [244, 488, 1, 0.5], [272, 466, 2, 0.9], [302, 480, 1.2, 0.6],
  [330, 462, 1.4, 0.68], [360, 476, 1, 0.5], [390, 458, 1.8, 0.8], [420, 470, 1.1, 0.55],
  [450, 458, 1.5, 0.7], [482, 470, 1, 0.5], [512, 462, 1.7, 0.78], [542, 476, 1.2, 0.6],
  [572, 468, 1.4, 0.65], [602, 482, 1, 0.5], [632, 476, 1.6, 0.72], [664, 492, 1.1, 0.55],
  [694, 486, 1.3, 0.62], [724, 502, 1, 0.48],
  [140, 520, 1.2, 0.5], [230, 512, 1.4, 0.58], [318, 504, 1, 0.45], [406, 498, 1.3, 0.55],
  [496, 502, 1.1, 0.48], [586, 510, 1.2, 0.5], [676, 522, 1, 0.44],
];

export default function SpaceScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 800 640"
      className={`space-scene ${className}`.trim()}
      role="img"
      aria-label="L'étoile Sirius en orbite au-dessus de la Terre"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="ss-space" x1="0" y1="0" x2="800" y2="640" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#050716" />
          <stop offset="0.5" stopColor="#080d24" />
          <stop offset="1" stopColor="#04050f" />
        </linearGradient>

        <linearGradient id="ss-ring" x1="180" y1="330" x2="460" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="0.5" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#e46ad4" />
        </linearGradient>

        <radialGradient id="ss-starglow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#9fc0ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#4f7cff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ss-earth" cx="42%" cy="18%" r="82%">
          <stop offset="0" stopColor="#123a6d" />
          <stop offset="0.45" stopColor="#0a1f45" />
          <stop offset="1" stopColor="#04091c" />
        </radialGradient>

        <linearGradient id="ss-atmo" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f6bff" stopOpacity="0" />
          <stop offset="0.32" stopColor="#63a8ff" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#dcefff" stopOpacity="1" />
          <stop offset="0.68" stopColor="#63a8ff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="ss-milky" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#8ea6ff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#8ea6ff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ss-planet" cx="34%" cy="30%" r="72%">
          <stop offset="0" stopColor="#6d7fb5" />
          <stop offset="0.6" stopColor="#2b3560" />
          <stop offset="1" stopColor="#0a0e22" />
        </radialGradient>

        <filter id="ss-blur-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id="ss-blur-md" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="ss-blur-sm" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>

        <clipPath id="ss-clip">
          <rect width="800" height="640" rx="24" />
        </clipPath>
      </defs>

      <g clipPath="url(#ss-clip)">
        {/* Fond spatial */}
        <rect width="800" height="640" fill="url(#ss-space)" />

        {/* Voie lactée diffuse, côté droit */}
        <ellipse cx="660" cy="180" rx="230" ry="130" fill="url(#ss-milky)" transform="rotate(-28 660 180)" />

        {/* Étoiles */}
        <g fill="#dce7ff">
          {STARS.map(([x, y, r, o], i) => (
            <circle key={i} cx={x} cy={y} r={r} opacity={o} />
          ))}
        </g>

        {/* Planètes lointaines */}
        <circle cx="72" cy="58" r="34" fill="url(#ss-planet)" opacity="0.9" />
        <circle cx="58" cy="46" r="34" fill="#050716" opacity="0.55" />
        <circle cx="754" cy="300" r="26" fill="url(#ss-planet)" opacity="0.85" />
        <circle cx="744" cy="292" r="26" fill="#04050f" opacity="0.5" />

        {/* Terre : grand disque dont seul le sommet est visible */}
        <circle cx="400" cy="1180" r="700" fill="url(#ss-earth)" />

        {/* Halo atmosphérique au-dessus de l'horizon */}
        <ellipse cx="400" cy="482" rx="404" ry="26" fill="url(#ss-atmo)" filter="url(#ss-blur-md)" opacity="0.85" />
        <ellipse cx="400" cy="479" rx="392" ry="8" fill="url(#ss-atmo)" filter="url(#ss-blur-sm)" />

        {/* Lumières de villes */}
        <g fill="#ffb45e" filter="url(#ss-blur-sm)">
          {CITY_LIGHTS.map(([x, y, r, o], i) => (
            <circle key={i} cx={x} cy={y} r={r} opacity={o} />
          ))}
        </g>

        {/* Éclat de l'aube sous l'étoile */}
        <ellipse cx="400" cy="470" rx="150" ry="18" fill="#9fd0ff" opacity="0.5" filter="url(#ss-blur-md)" />

        {/* ---- Sirius : halo, anneau, étoile ---- */}
        <circle cx="400" cy="212" r="190" fill="url(#ss-starglow)" opacity="0.55" filter="url(#ss-blur-lg)" />

        {/* Traînée lumineuse horizontale */}
        <ellipse cx="400" cy="212" rx="330" ry="2.5" fill="#8fb4ff" opacity="0.5" filter="url(#ss-blur-md)" />

        <circle cx="400" cy="212" r="118" fill="none" stroke="url(#ss-ring)" strokeWidth="7" />
        <circle cx="400" cy="212" r="118" fill="none" stroke="url(#ss-ring)" strokeWidth="14" opacity="0.35" filter="url(#ss-blur-md)" />

        <path
          d="M400 74 C407 178 434 205 538 212 C434 219 407 246 400 350 C393 246 366 219 262 212 C366 205 393 178 400 74 Z"
          fill="#ffffff"
        />
        <path
          d="M400 74 C407 178 434 205 538 212 C434 219 407 246 400 350 C393 246 366 219 262 212 C366 205 393 178 400 74 Z"
          fill="#ffffff"
          opacity="0.55"
          filter="url(#ss-blur-md)"
        />
      </g>
    </svg>
  );
}
