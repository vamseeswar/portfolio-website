import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vamseeswara Reddy Datla | AI/ML Engineer & Generative AI Developer",
  description:
    "AI/ML Engineer with expertise in building LLM-powered applications, RAG systems, agentic workflows, and scalable AI architectures. Skilled in LangChain, LangGraph, vector databases, FastAPI, Docker, and AI orchestration systems.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM",
    "FastAPI",
    "Python",
    "Portfolio",
    "Vamseeswara Reddy Datla",
  ],
  authors: [{ name: "Vamseeswara Reddy Datla" }],
  creator: "Vamseeswara Reddy Datla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vamseedatla.vercel.app",
    title: "Vamseeswara Reddy Datla | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in Generative AI, Agentic AI, and Full Stack AI Systems. Building production-ready LLM applications and intelligent automation.",
    siteName: "Vamseeswara Reddy Datla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamseeswara Reddy Datla | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in Generative AI, Agentic AI, and Full Stack AI Systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>"
        />
        <meta name="theme-color" content="#030014" />
      </head>
      <body className="antialiased">
        <div className="tech-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
