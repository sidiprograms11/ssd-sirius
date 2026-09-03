"use client";

import { useEffect, useRef } from "react";

// Fond spatial décoratif, non bloquant, désactivé si prefers-reduced-motion.
export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let stars = [];
    let w = 0;
    let h = 0;
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    // Étoiles claires sur fond sombre, poussière sombre sur fond clair.
    let rgb = "200, 214, 255";
    const syncTheme = () => {
      const light = document.documentElement.getAttribute("data-theme") === "light";
      rgb = light ? "76, 88, 140" : "200, 214, 255";
    };
    syncTheme();
    window.addEventListener("sirius:themechange", syncTheme);

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const density = isMobile ? 14000 : 9000;
      const count = Math.min(160, Math.floor((w * h) / density));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        tw: Math.random() * 0.02 + 0.004,
        dir: Math.random() > 0.5 ? 1 : -1,
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.a += s.tw * s.dir;
        if (s.a <= 0.15 || s.a >= 0.85) s.dir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${s.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("sirius:themechange", syncTheme);
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
