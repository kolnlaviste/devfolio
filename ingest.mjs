import { createClient } from "@supabase/supabase-js";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import fs from "fs";
import "dotenv/config";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);

const embeddings = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  apiKey: process.env.HUGGINGFACEHUB_API_KEY,
});

async function ingest() {
  try {
    console.log("Reading bio...");
    const text = fs.readFileSync("./src/data/knowledge-base.md", "utf8");

    // Split by '###' and clean up empty strings
    const sections = text
      .split("###")
      .map((s) => s.trim())
      .filter((s) => s !== "");
    console.log(`Found ${sections.length} sections. Starting upload...`);

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      console.log(`Step ${i + 1}: Vectorizing section...`);

      const embedding = await embeddings.embedQuery(section);

      console.log(`Step ${i + 1}: Sending to Supabase...`);
      const { data, error } = await supabase
        .from("bio_sections")
        .insert({
          content: section,
          embedding: embedding,
        })
        .select(); // This forces the script to wait for a response

      if (error) {
        console.error(`❌ Error on section ${i + 1}:`, error.message);
      } else {
        console.log(`✅ Success! Section ${i + 1} saved. ID:`, data[0].id);
      }
    }

    console.log("--- INGESTION COMPLETE ---");
  } catch (err) {
    console.error("Critical Error:", err.message);
  }
}

ingest();
