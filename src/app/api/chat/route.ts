import { ChatGroq } from "@langchain/groq";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
    
    // Using the FREE Hugging Face embedding model (matching your ingest script)
    const embeddings = new HuggingFaceInferenceEmbeddings({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        apiKey: process.env.HUGGINGFACEHUB_API_KEY,
    });
    const queryEmbedding = await embeddings.embedQuery(lastMessage);

    // Search Supabase for context
    const { data: documents, error: rpcError } = await supabase.rpc('match_bio_sections', {
  query_embedding: queryEmbedding,
  match_threshold: 0.1, // Set this very low for testing
  match_count: 3,
});

console.log("🔍 Search Results:", documents);
if (rpcError) console.error("❌ RPC Error:", rpcError);

    interface BioSection {
      id: number;
      content: string;
      similarity: number;
    }

    const context = (documents as BioSection[] | null)?.map((d) => d.content).join("\n\n") || "No specific background info found.";

    // Use Groq's Llama 3 (Fast and Free)
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama-3.3-70b-versatile",
    });

    const response = await model.invoke([
  ["system", `You are Koln Laviste's personal representative. Your goal is to get people excited about his work through natural, high-energy conversation.

  STRICT STYLE RULES:
  - NO EMOJIS. Use strong verbs and punchy sentences to show energy instead.
  - NO BULLET POINTS. Speak in short, cohesive paragraphs (max 2-3 sentences).
  - USE CONTRACTIONS. Say "he's," "don't," and "won't" to sound human.
  - NO AI CLICHES. Never say "He has experience in" or "The context states." 
  - START DIRECTLY. Don't thank the user for asking or say "Certainly!"

  HOW TO TALK:
  - Instead of listing skills, tell a story. "Koln doesn't just write code; he builds SEO-optimized engines with Next.js and crafts native mobile experiences using Flutter."
  - Be a hype-man. "If you're looking for someone who bridges the gap between a clean React frontend and a secure Express backend, Koln is your guy."
  - Keep it brief. If they ask about a project, give them the "why" and the "result" in two quick sentences.

  CONTEXT:
  ${context}`],
  ["human", lastMessage]
]);

    return Response.json({ role: "assistant", content: response.content });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return Response.json({ error: message }, { status: 500 });
  }
}