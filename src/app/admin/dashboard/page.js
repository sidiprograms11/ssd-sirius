"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { getSupabaseBrowser } from "@/lib/supabase";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const supabase = getSupabaseBrowser();
    if (!supabase) return;
    (async () => {
      const [projects, published, leadsNew, leadsTotal] = await Promise.all([
        supabase.from("projects").select("id", { count: "exact", head: true }),
        supabase.from("projects").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("leads").select("id", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("leads").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        projects: projects.count ?? 0,
        published: published.count ?? 0,
        leadsNew: leadsNew.count ?? 0,
        leadsTotal: leadsTotal.count ?? 0,
      });
    })();
  }, []);

  const cards = [
    { label: "Réalisations", value: stats?.projects, href: "/admin/projects", icon: "FolderKanban" },
    { label: "Publiées", value: stats?.published, href: "/admin/projects", icon: "Check" },
    { label: "Demandes non traitées", value: stats?.leadsNew, href: "/admin/leads", icon: "Inbox" },
    { label: "Demandes (total)", value: stats?.leadsTotal, href: "/admin/leads", icon: "Users" },
  ];

  return (
    <>
      <div className="admin-topbar">
        <h1 className="h3">Tableau de bord</h1>
        <Link href="/admin/projects" className="btn btn--primary btn--sm">
          <Icon name="Plus" /> Nouvelle réalisation
        </Link>
      </div>

      <div className="grid grid-4">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="card">
            <span className="icon-orbit">
              <Icon name={c.icon} />
            </span>
            <span className="stats__value">{c.value ?? "—"}</span>
            <span className="stats__label">{c.label}</span>
          </Link>
        ))}
      </div>

      <p className="muted" style={{ marginTop: 28, fontSize: "0.88rem" }}>
        Gérez ici les réalisations affichées sur le site, les demandes reçues via le formulaire de
        contact et les coordonnées publiques.
      </p>
    </>
  );
}
