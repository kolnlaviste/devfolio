import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import "dotenv/config";

async function test() {
  console.log("🔍 Testing connections...");

  // 1. Test Supabase
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
  );
  const { data, error } = await supabase
    .from("bio_sections")
    .select("count", { count: "exact", head: true });

  if (error) {
    console.error("❌ Supabase Error:", error.message);
  } else {
    console.log("✅ Supabase Connected! Found table 'bio_sections'.");
  }

  // 2. Test OpenAI
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    await openai.models.list();
    console.log("✅ OpenAI API Key is valid!");
  } catch (err) {
    console.error("❌ OpenAI Error:", err.message);
  }
}

test();
