import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/** Supabase est-il configuré ? Sinon, le site utilise les données de démo locales. */
export const hasSupabase = Boolean(url && anonKey);

let browserClient = null;

/**
 * Client Supabase pour composants client (clé anon, protégé par RLS).
 * Singleton pour éviter de multiples connexions realtime.
 */
export function getSupabaseBrowser() {
  if (!hasSupabase) return null;
  if (browserClient) return browserClient;
  browserClient = createClient(url, anonKey, {
    auth: { persistSession: true, autoRefreshToken: true },
  });
  return browserClient;
}

/**
 * Client Supabase côté serveur (lecture de contenu public).
 * Nouvelle instance par appel — pas de session persistée.
 */
export function getSupabaseServer() {
  if (!hasSupabase) return null;
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Client "service_role" — SERVEUR UNIQUEMENT (routes API, actions serveur).
 * Contourne le RLS : ne jamais l'importer dans un composant client.
 */
export function getSupabaseService() {
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
