"use client";

import { useState } from "react";

// Cadre de maquette stylisé.
// - Si `src` pointe vers une vraie image existante, elle est affichée.
// - Sinon (ou en cas d'erreur de chargement), repli sur un aperçu dégradé
//   dont la palette est donnée par `tone` (voir globals.css : shot-*).

export default function MockShot({ tone = "dark", label = "", phone = false, src = "", alt = "" }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={`mock ${phone ? "mock--phone" : "mock--browser"} ${showImage ? "" : `shot-${tone}`}`.trim()}
      role="img"
      aria-label={alt || label || "Aperçu de la réalisation"}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div className="mock__body">{label && <span className="mock__label">{label}</span>}</div>
      )}
    </div>
  );
}
