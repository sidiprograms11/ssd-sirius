"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import SiriusMark from "@/components/SiriusMark";
import { useSession, signOut } from "@/lib/useSession";

const LINKS = [
  { href: "/admin/dashboard", label: "Tableau de bord", icon: "LayoutDashboard" },
  { href: "/admin/projects", label: "Réalisations", icon: "FolderKanban" },
  { href: "/admin/leads", label: "Demandes", icon: "Inbox" },
  { href: "/admin/settings", label: "Paramètres", icon: "Settings" },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { loading, session, isAdmin, configured } = useSession();

  const isLogin = pathname === "/admin/login";

  if (!configured) {
    return (
      <div className="admin-auth">
        <div className="panel admin-auth__card">
          <SiriusMark size={44} />
          <h1 className="h3" style={{ marginTop: 16 }}>Admin indisponible</h1>
          <p className="muted" style={{ marginTop: 10, fontSize: "0.9rem" }}>
            Supabase n'est pas configuré. Renseignez <code>NEXT_PUBLIC_SUPABASE_URL</code> et{" "}
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> dans <code>.env.local</code>, puis exécutez{" "}
            <code>supabase_init.sql</code>.
          </p>
          <Link href="/" className="btn btn--ghost btn--sm" style={{ marginTop: 18 }}>
            Retour au site
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-auth">
        <Icon name="Loader2" className="spin" width={28} height={28} />
      </div>
    );
  }

  if (isLogin) return children;

  if (!session || !isAdmin) {
    return (
      <div className="admin-auth">
        <div className="panel admin-auth__card text-center stack" style={{ "--gap": "14px", alignItems: "center" }}>
          <SiriusMark size={44} />
          <h1 className="h3">Accès réservé</h1>
          <p className="muted" style={{ fontSize: "0.9rem" }}>
            {session
              ? "Ce compte n'a pas le rôle administrateur."
              : "Connectez-vous pour accéder à l'espace d'administration."}
          </p>
          <Link href="/admin/login" className="btn btn--primary btn--sm">
            Se connecter
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <Link href="/" className="brand" style={{ marginBottom: 18 }}>
          <SiriusMark size={30} />
          <span className="brand__name" style={{ fontSize: "0.9rem" }}>Sirius</span>
        </Link>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
          >
            <Icon name={l.icon} />
            {l.label}
          </Link>
        ))}
        <button
          type="button"
          className="admin-side-signout"
          onClick={async () => {
            await signOut();
            router.push("/admin/login");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 14px",
            marginTop: "auto",
            background: "none",
            border: 0,
            color: "var(--text-faint)",
            cursor: "pointer",
            fontSize: "0.82rem",
          }}
        >
          <Icon name="LogOut" width={17} height={17} />
          Déconnexion
        </button>
      </aside>
      <div className="admin-main">{children}</div>
    </div>
  );
}
