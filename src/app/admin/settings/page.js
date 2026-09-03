"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { getSupabaseBrowser } from "@/lib/supabase";

const DEFAULTS = {
  contact: { email: "", phone: "", whatsapp: "", city: "" },
  social: { linkedin: "", facebook: "", instagram: "" },
  company: { name: "", tagline: "" },
};

export default function AdminSettingsPage() {
  const supabase = getSupabaseBrowser();
  const [values, setValues] = useState(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("settings")
        .select("key, value")
        .in("key", ["contact", "social", "company"]);
      const map = Object.fromEntries((data || []).map((r) => [r.key, r.value]));
      setValues({
        contact: { ...DEFAULTS.contact, ...(map.contact || {}) },
        social: { ...DEFAULTS.social, ...(map.social || {}) },
        company: { ...DEFAULTS.company, ...(map.company || {}) },
      });
      setLoading(false);
    })();
  }, [supabase]);

  const set = (group, key) => (e) =>
    setValues((v) => ({ ...v, [group]: { ...v[group], [key]: e.target.value } }));

  async function save(e) {
    e.preventDefault();
    setMsg(null);
    const rows = Object.entries(values).map(([key, value]) => ({ key, value }));
    const { error } = await supabase.from("settings").upsert(rows, { onConflict: "key" });
    setMsg(error ? { type: "err", text: error.message } : { type: "ok", text: "Paramètres enregistrés." });
  }

  if (loading) return <Icon name="Loader2" className="spin" width={24} height={24} />;

  return (
    <form onSubmit={save}>
      <div className="admin-topbar">
        <h1 className="h3">Paramètres</h1>
        <button type="submit" className="btn btn--primary btn--sm">Enregistrer</button>
      </div>

      {msg && <p className={`form-note form-note--${msg.type}`} style={{ marginBottom: 16 }}>{msg.text}</p>}

      <h2 className="h3" style={{ margin: "8px 0 14px" }}>Coordonnées</h2>
      <div className="form-row">
        <div className="field"><label>E-mail</label><input value={values.contact.email} onChange={set("contact", "email")} /></div>
        <div className="field"><label>Téléphone</label><input value={values.contact.phone} onChange={set("contact", "phone")} /></div>
      </div>
      <div className="form-row">
        <div className="field"><label>WhatsApp (chiffres, ex. 22370000000)</label><input value={values.contact.whatsapp} onChange={set("contact", "whatsapp")} /></div>
        <div className="field"><label>Ville</label><input value={values.contact.city} onChange={set("contact", "city")} /></div>
      </div>

      <h2 className="h3" style={{ margin: "28px 0 14px" }}>Réseaux sociaux</h2>
      <div className="form-row">
        <div className="field"><label>LinkedIn</label><input value={values.social.linkedin} onChange={set("social", "linkedin")} /></div>
        <div className="field"><label>Facebook</label><input value={values.social.facebook} onChange={set("social", "facebook")} /></div>
      </div>
      <div className="field"><label>Instagram</label><input value={values.social.instagram} onChange={set("social", "instagram")} /></div>

      <h2 className="h3" style={{ margin: "28px 0 14px" }}>Entreprise</h2>
      <div className="form-row">
        <div className="field"><label>Nom</label><input value={values.company.name} onChange={set("company", "name")} /></div>
        <div className="field"><label>Signature / tagline</label><input value={values.company.tagline} onChange={set("company", "tagline")} /></div>
      </div>
    </form>
  );
}
