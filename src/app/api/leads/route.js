import { NextResponse } from "next/server";
import { getSupabaseServer, getSupabaseService, hasSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const clip = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot : un bot remplit ce champ. On répond "ok" sans rien enregistrer.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = clip(body.name, 120);
  const email = clip(body.email, 160);
  const phone = clip(body.phone, 40);
  const company = clip(body.company, 160);
  const message = clip(body.message, 4000);
  const projectSlug = clip(body.project_slug, 120);

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Champs obligatoires manquants ou invalides." },
      { status: 422 }
    );
  }

  const client = getSupabaseService() || getSupabaseServer();

  // Sans Supabase : mode démo — on journalise et on renvoie un succès.
  if (!client || !hasSupabase) {
    console.info("[leads] (démo, Supabase non configuré) nouveau lead :", {
      name,
      email,
      company,
      projectSlug,
    });
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    let project_id = null;
    if (projectSlug) {
      const { data: proj } = await client
        .from("projects")
        .select("id")
        .eq("slug", projectSlug)
        .maybeSingle();
      project_id = proj?.id || null;
    }

    const { error } = await client.from("leads").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
      project_id,
      source: "contact_form",
    });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[leads] insertion échouée :", e.message);
    return NextResponse.json(
      { error: "Enregistrement impossible pour le moment. Réessayez ou écrivez-nous directement." },
      { status: 502 }
    );
  }
}
