"use client";

import { useCallback, useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { getSupabaseBrowser } from "@/lib/supabase";

const STATUSES = ["new", "in_progress", "won", "lost", "spam"];
const LABEL = {
  new: "Nouveau",
  in_progress: "En cours",
  won: "Gagné",
  lost: "Perdu",
  spam: "Spam",
};

export default function AdminLeadsPage() {
  const supabase = getSupabaseBrowser();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    let q = supabase.from("leads").select("*, projects(title)").order("created_at", { ascending: false });
    if (filter !== "all") q = q.eq("status", filter);
    const { data } = await q;
    setRows(data || []);
    setLoading(false);
  }, [supabase, filter]);

  useEffect(() => {
    load();
  }, [load]);

  async function setStatus(id, status) {
    await supabase.from("leads").update({ status }).eq("id", id);
    load();
  }

  return (
    <>
      <div className="admin-topbar">
        <h1 className="h3">Demandes de contact</h1>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ width: "auto", padding: "8px 12px" }}>
          <option value="all">Toutes</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{LABEL[s]}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <Icon name="Loader2" className="spin" width={24} height={24} />
      ) : rows.length === 0 ? (
        <p className="muted">Aucune demande.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Contact</th>
                <th>Projet</th>
                <th>Statut</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{new Date(r.created_at).toLocaleDateString("fr-FR")}</td>
                  <td style={{ color: "var(--text)" }}>
                    {r.name}
                    {r.company ? <span className="muted"> — {r.company}</span> : null}
                  </td>
                  <td>
                    <a href={`mailto:${r.email}`} style={{ textDecoration: "underline" }}>{r.email}</a>
                    {r.phone ? <div className="muted">{r.phone}</div> : null}
                  </td>
                  <td>{r.projects?.title || "—"}</td>
                  <td>
                    <select
                      value={r.status}
                      onChange={(e) => setStatus(r.id, e.target.value)}
                      style={{ width: "auto", padding: "6px 10px" }}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{LABEL[s]}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button className="btn btn--ghost btn--sm" onClick={() => setOpen(open === r.id ? null : r.id)}>
                      {open === r.id ? "Fermer" : "Message"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {open && (
        <div className="panel" style={{ padding: 20, marginTop: 18 }}>
          <p className="muted" style={{ whiteSpace: "pre-wrap" }}>
            {rows.find((r) => r.id === open)?.message}
          </p>
        </div>
      )}
    </>
  );
}
