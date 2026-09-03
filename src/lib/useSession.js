"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowser, hasSupabase } from "@/lib/supabase";

// Suit la session Supabase côté client + le rôle admin (table profiles).
export function useSession() {
  const [state, setState] = useState({
    loading: true,
    session: null,
    isAdmin: false,
    configured: hasSupabase,
  });

  useEffect(() => {
    if (!hasSupabase) {
      setState((s) => ({ ...s, loading: false }));
      return;
    }
    const supabase = getSupabaseBrowser();
    let active = true;

    async function resolveRole(session) {
      if (!session) return { session: null, isAdmin: false };
      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("user_id", session.user.id)
        .maybeSingle();
      return { session, isAdmin: ["admin", "editor"].includes(data?.role) };
    }

    supabase.auth.getSession().then(async ({ data }) => {
      const resolved = await resolveRole(data.session);
      if (active) setState({ loading: false, configured: true, ...resolved });
    });

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const resolved = await resolveRole(session);
      if (active) setState({ loading: false, configured: true, ...resolved });
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}

export async function signOut() {
  const supabase = getSupabaseBrowser();
  if (supabase) await supabase.auth.signOut();
}
