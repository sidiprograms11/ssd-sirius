"use client";

import { useCallback, useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { getSupabaseBrowser } from "@/lib/supabase";

const EMPTY = {
  slug: "",
  title: "",
  client_name: "",
  type: "site",
  category: "",
  summary: "",
  description: "",
  context: "",
  problem: "",
  solution: "",
  featuresText: "",
  technologiesText: "",
  metricsText: "",
  featured: false,
  status: "draft",
  cover_url: "",
  link_url: "",
  sort_order: 0,
};

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function toForm(row) {
  return {
    ...EMPTY,
    ...row,
    featuresText: (row.features || []).join("\n"),
    technologiesText: (row.technologies || []).join(", "),
    metricsText: (row.metrics || []).map((m) => `${m.label} | ${m.value}`).join("\n"),
  };
}

function fromForm(f) {
  return {
    slug: f.slug || slugify(f.title),
    title: f.title,
    client_name: f.client_name || null,
    type: f.type,
    category: f.category || null,
    summary: f.summary || null,
    description: f.description || null,
    context: f.context || null,
    problem: f.problem || null,
    solution: f.solution || null,
    features: f.featuresText.split("\n").map((s) => s.trim()).filter(Boolean),
    technologies: f.technologiesText.split(",").map((s) => s.trim()).filter(Boolean),
    metrics: f.metricsText
      .split("\n")
      .map((line) => {
        const [label, ...rest] = line.split("|");
        return label && rest.length ? { label: label.trim(), value: rest.join("|").trim() } : null;
      })
      .filter(Boolean),
    featured: !!f.featured,
    status: f.status,
    cover_url: f.cover_url || null,
    link_url: f.link_url || null,
    sort_order: Number(f.sort_order) || 0,
  };
}

export default function AdminProjectsPage() {
  const supabase = getSupabaseBrowser();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // form object or null
  const [images, setImages] = useState([]);
  const [msg, setMsg] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (!error) setRows(data || []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  async function openEdit(row) {
    setMsg(null);
    if (row) {
      setEditing(toForm(row));
      const { data } = await supabase
        .from("project_images")
        .select("*")
        .eq("project_id", row.id)
        .order("sort_order", { ascending: true });
      setImages(data || []);
    } else {
      setEditing({ ...EMPTY });
      setImages([]);
    }
  }

  async function save(e) {
    e.preventDefault();
    setMsg(null);
    const payload = fromForm(editing);
    let projectId = editing.id;

    let res;
    if (editing.id) {
      res = await supabase.from("projects").update(payload).eq("id", editing.id).select().single();
    } else {
      res = await supabase.from("projects").insert(payload).select().single();
    }
    if (res.error) {
      setMsg({ type: "err", text: res.error.message });
      return;
    }
    projectId = res.data.id;

    // Réécriture simple de la galerie
    await supabase.from("project_images").delete().eq("project_id", projectId);
    const clean = images
      .filter((im) => im.url?.trim())
      .map((im, i) => ({
        project_id: projectId,
        url: im.url.trim(),
        alt: im.alt?.trim() || null,
        sort_order: i,
      }));
    if (clean.length) await supabase.from("project_images").insert(clean);

    setMsg({ type: "ok", text: "Réalisation enregistrée." });
    setEditing(null);
    load();
  }

  async function remove(row) {
    if (!confirm(`Supprimer « ${row.title} » ? Cette action est définitive.`)) return;
    const { error } = await supabase.from("projects").delete().eq("id", row.id);
    if (error) setMsg({ type: "err", text: error.message });
    else load();
  }

  async function quickStatus(row, status) {
    await supabase.from("projects").update({ status }).eq("id", row.id);
    load();
  }

  const set = (k) => (e) =>
    setEditing((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  if (editing) {
    return (
      <form onSubmit={save}>
        <div className="admin-topbar">
          <h1 className="h3">{editing.id ? "Modifier" : "Nouvelle"} réalisation</h1>
          <div style={{ display: "flex", gap: 10 }}>
            <button type="button" className="btn btn--ghost btn--sm" onClick={() => setEditing(null)}>
              Annuler
            </button>
            <button type="submit" className="btn btn--primary btn--sm">
              Enregistrer
            </button>
          </div>
        </div>

        {msg && <p className={`form-note form-note--${msg.type}`} style={{ marginBottom: 16 }}>{msg.text}</p>}

        <div className="form-row">
          <div className="field">
            <label>Titre *</label>
            <input value={editing.title} onChange={set("title")} required />
          </div>
          <div className="field">
            <label>Slug (URL)</label>
            <input value={editing.slug} onChange={set("slug")} placeholder={slugify(editing.title || "")} />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Client / marque</label>
            <input value={editing.client_name} onChange={set("client_name")} />
          </div>
          <div className="field">
            <label>Catégorie</label>
            <input value={editing.category} onChange={set("category")} placeholder="E-commerce, Performance…" />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Type</label>
            <select value={editing.type} onChange={set("type")}>
              <option value="site">Site web</option>
              <option value="application">Application</option>
              <option value="plateforme">Plateforme</option>
            </select>
          </div>
          <div className="field">
            <label>Statut</label>
            <select value={editing.status} onChange={set("status")}>
              <option value="draft">Brouillon</option>
              <option value="published">Publié</option>
              <option value="archived">Archivé</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Ordre d'affichage</label>
            <input type="number" value={editing.sort_order} onChange={set("sort_order")} />
          </div>
          <div className="field" style={{ justifyContent: "flex-end" }}>
            <label style={{ display: "flex", gap: 10, alignItems: "center", textTransform: "none", letterSpacing: 0 }}>
              <input type="checkbox" checked={editing.featured} onChange={set("featured")} style={{ width: "auto" }} />
              Mettre en avant sur l'accueil
            </label>
          </div>
        </div>

        <div className="field">
          <label>Résumé court</label>
          <input value={editing.summary} onChange={set("summary")} />
        </div>
        <div className="field">
          <label>Description détaillée</label>
          <textarea value={editing.description} onChange={set("description")} />
        </div>
        <div className="form-row">
          <div className="field">
            <label>Contexte</label>
            <textarea value={editing.context} onChange={set("context")} />
          </div>
          <div className="field">
            <label>Problématique</label>
            <textarea value={editing.problem} onChange={set("problem")} />
          </div>
        </div>
        <div className="field">
          <label>Solution SSD Sirius</label>
          <textarea value={editing.solution} onChange={set("solution")} />
        </div>

        <div className="form-row">
          <div className="field">
            <label>Fonctionnalités (une par ligne)</label>
            <textarea value={editing.featuresText} onChange={set("featuresText")} />
          </div>
          <div className="field">
            <label>Technologies (séparées par des virgules)</label>
            <textarea value={editing.technologiesText} onChange={set("technologiesText")} />
          </div>
        </div>

        <div className="field">
          <label>Indicateurs (format : libellé | valeur — un par ligne)</label>
          <textarea value={editing.metricsText} onChange={set("metricsText")} placeholder="Paiement | Carte + Mobile Money" />
        </div>

        <div className="form-row">
          <div className="field">
            <label>URL de couverture</label>
            <input value={editing.cover_url} onChange={set("cover_url")} placeholder="https://…/storage/…" />
          </div>
          <div className="field">
            <label>Lien externe (démo)</label>
            <input value={editing.link_url} onChange={set("link_url")} />
          </div>
        </div>

        <div className="field">
          <label>Galerie (URLs d'images)</label>
          <div className="stack" style={{ "--gap": "8px" }}>
            {images.map((im, i) => (
              <div key={i} style={{ display: "flex", gap: 8 }}>
                <input
                  value={im.url}
                  placeholder="URL de l'image"
                  onChange={(e) =>
                    setImages((arr) => arr.map((x, xi) => (xi === i ? { ...x, url: e.target.value } : x)))
                  }
                />
                <input
                  value={im.alt || ""}
                  placeholder="Texte alternatif"
                  onChange={(e) =>
                    setImages((arr) => arr.map((x, xi) => (xi === i ? { ...x, alt: e.target.value } : x)))
                  }
                />
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  onClick={() => setImages((arr) => arr.filter((_, xi) => xi !== i))}
                >
                  <Icon name="Trash2" />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => setImages((arr) => [...arr, { url: "", alt: "" }])}
            >
              <Icon name="Plus" /> Ajouter une image
            </button>
          </div>
          <p className="muted" style={{ fontSize: "0.78rem", marginTop: 8 }}>
            Uploadez d'abord les fichiers dans le bucket Storage <code>portfolio</code>, puis collez ici l'URL publique.
          </p>
        </div>
      </form>
    );
  }

  return (
    <>
      <div className="admin-topbar">
        <h1 className="h3">Réalisations</h1>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => openEdit(null)}>
          <Icon name="Plus" /> Nouvelle réalisation
        </button>
      </div>

      {msg && <p className={`form-note form-note--${msg.type}`} style={{ marginBottom: 16 }}>{msg.text}</p>}

      {loading ? (
        <Icon name="Loader2" className="spin" width={24} height={24} />
      ) : rows.length === 0 ? (
        <p className="muted">Aucune réalisation pour l'instant.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Type</th>
                <th>Statut</th>
                <th>Vedette</th>
                <th>Ordre</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td style={{ color: "var(--text)" }}>{r.title}</td>
                  <td>{r.type}</td>
                  <td>
                    <span className={`pill pill--${r.status}`}>{r.status}</span>
                  </td>
                  <td>{r.featured ? "Oui" : "—"}</td>
                  <td>{r.sort_order}</td>
                  <td style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    {r.status !== "published" ? (
                      <button className="btn btn--ghost btn--sm" onClick={() => quickStatus(r, "published")}>
                        Publier
                      </button>
                    ) : (
                      <button className="btn btn--ghost btn--sm" onClick={() => quickStatus(r, "draft")}>
                        Dépublier
                      </button>
                    )}
                    <button className="btn btn--ghost btn--sm" onClick={() => openEdit(r)}>
                      <Icon name="Pencil" />
                    </button>
                    <button className="btn btn--ghost btn--sm" onClick={() => remove(r)}>
                      <Icon name="Trash2" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
