# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

```bash
npm install           # Install dependencies
npm run dev          # Dev server on localhost:3000
npm run build        # Production build
npm start            # Serve production build
npm run lint         # ESLint (flat config format)
```

**No test suite exists.** This is a single-page portfolio site without automated tests.

## Codebase Architecture

### Overview

**devfolio** is a Next.js 15 portfolio website featuring an AI chatbot powered by RAG (Retrieval-Augmented Generation). It's a fully client-rendered single-page application with an API backend for chat.

### Stack

- **Framework**: Next.js 15.4 (App Router, TypeScript strict mode)
- **Styling**: Tailwind CSS 3.4 + shadcn/ui (new-york style) + Framer Motion
- **UI Components**: shadcn/ui primitives in `src/components/ui/` (lucide icons, Radix-based)
- **AI**: LangChain + Groq Llama 3.3 70B (via `/api/chat` route)
- **Vector Store**: Supabase (pgvector) + HuggingFace Inference API for embeddings
- **Linting**: ESLint 9 (flat config: `eslint.config.mjs`), extends `next/core-web-vitals`

### Folder Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout (font, metadata, favicon)
│   ├── page.tsx                Main portfolio page (one "use client" component)
│   ├── globals.css             Tailwind base + CSS variables + animations
│   └── api/chat/route.ts       POST endpoint for AI chatbot
├── components/
│   ├── header.tsx              Fixed navigation (mobile hamburger)
│   ├── footer.tsx              Social links
│   ├── ChatBubble.tsx          Floating AI chat widget (client)
│   └── ui/                     shadcn/ui components (button, card, badge, etc.)
├── lib/
│   └── utils.ts                cn() helper (clsx + tailwind-merge)
└── data/
    └── knowledge-base.md       Bio content for RAG ingestion

public/
├── projects/                   Project screenshot images
├── assets/resume.pdf           Downloadable resume
└── favicon/                    Icon set
```

### Key Architectural Decisions

#### Single Page, Inline Data

All portfolio content (skills, projects, experience) is defined as **inline arrays in `src/app/page.tsx`**. There is no separate CMS, external data API, or routes—only the root `/` page with five anchor-linked sections: `#hero`, `#skills`, `#projects`, `#experience`, `#contact`.

To update portfolio content, edit the arrays in `page.tsx`.

#### AI Chatbot RAG Pipeline

The `ChatBubble` component sends conversation history to `/api/chat/route.ts`, which:

1. Embeds the user query using HuggingFace Inference API (`sentence-transformers/all-MiniLM-L6-v2`)
2. Queries Supabase's `bio_sections` table via custom RPC `match_bio_sections` (vector similarity search)
3. Passes retrieved context + conversation history to Groq's Llama 3.3 70B via LangChain's `ChatGroq`
4. Returns the response as JSON

The knowledge base (`src/data/knowledge-base.md`) is split into chunks by `###` headers during ingestion.

#### How to Update the AI Knowledge Base

1. Edit `src/data/knowledge-base.md` (split sections with `###` header markers)
2. Run `node ingest.mjs` to chunk, embed, and store in Supabase
3. Optionally test with `node test-connection.mjs` to verify API connectivity

#### Path Alias

`@/*` resolves to `src/*` throughout the codebase (configured in `tsconfig.json`).

### Environment Variables

Required for the app to run:

```
SUPABASE_URL              Supabase project URL
SUPABASE_ANON_KEY         Supabase anon key (for client-side queries)
HUGGINGFACEHUB_API_KEY    HuggingFace API key (for embeddings)
GROQ_API_KEY              Groq API key (for LLM inference)
```

Optional:
- `OPENAI_API_KEY` — used only in `test-connection.mjs`, not in the live app

## Development Notes

### Styling

- Dark theme by default (pure black background with purple accents)
- CSS custom properties in `globals.css` define shadcn/ui color tokens
- Both Tailwind utilities and Framer Motion for animations
- No light mode switcher exists; dark mode is via Tailwind class selector in `tailwind.config.js`

### Component Patterns

- Server-compatible (RSC) where possible; `"use client"` only where needed (interactive sections, chat)
- shadcn/ui components use CVA for variants
- Layout components (`Header`, `Footer`) can be server or client; `ChatBubble` must be client

### Linting

```bash
npm run lint
```

Uses flat config ESLint (`.mjs` format). Extends `next/core-web-vitals` + `next/typescript`.

## Common Tasks

**Run the dev server**: `npm run dev` → http://localhost:3000

**Build for production**: `npm run build` && `npm start`

**Update portfolio content**: Edit arrays in `src/app/page.tsx`

**Update AI knowledge base**: Edit `src/data/knowledge-base.md`, then run `node ingest.mjs`

**Check for linting errors**: `npm run lint`
