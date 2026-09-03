"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import SiriusMark from "@/components/SiriusMark";
import { getSupabaseBrowser } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const supabase = getSupabaseBrowser();
    if (!supabase) {
      setError("Supabase n'est pas configuré.");
      return;
    }
    setStatus("loading");
    setError("");
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) {
      setStatus("error");
      setError("Identifiants invalides.");
      return;
    }
    router.push("/admin/dashboard");
  }

  return (
    <div className="admin-auth">
      <form className="panel admin-auth__card" onSubmit={onSubmit}>
        <SiriusMark size={44} />
        <h1 className="h3" style={{ margin: "16px 0 4px" }}>Espace admin</h1>
        <p className="muted" style={{ fontSize: "0.86rem", marginBottom: 22 }}>
          Connexion réservée à l'équipe SSD Sirius.
        </p>

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {error && <p className="form-note form-note--err" style={{ marginBottom: 14 }}>{error}</p>}

        <button type="submit" className="btn btn--primary btn--block" disabled={status === "loading"}>
          {status === "loading" ? <Icon name="Loader2" className="spin" /> : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
