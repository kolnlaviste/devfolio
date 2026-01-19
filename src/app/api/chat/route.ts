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
  ["system", `You are the personal AI assistant for Koln Laviste's portfolio. 
  
  STYLE GUIDELINES:
  - Be professional but conversational and friendly.
  - Keep answers concise. Use short paragraphs or bullet points, not long blocks of text.
  - Speak in the third person (e.g., "Koln has experience in...") or as a helpful guide.
  - Do NOT say "Based on the provided context" or "According to the text." Just answer naturally.
  - If asked about something not in the bio, say: "I'm not sure about that specifically, but you can reach out to Koln directly via his contact form!"

  BIO CONTEXT:
  ${context}`],
  ["human", lastMessage]
]);

    return Response.json({ role: "assistant", content: response.content });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return Response.json({ error: message }, { status: 500 });
  }
}