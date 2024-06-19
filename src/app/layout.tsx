/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({subsets: ['latin-ext']});

export const metadata: Metadata = {
  title: "Roberto Cruz - Desarrollador Web Fullstack",
  description: "Soy Roberto Cruz, un desarrollador web fullstack freelancer. Explora mi portafolio y conoce más sobre mi experiencia en desarrollo web con tecnologías como React, TypeScript, Node.js y Next.js.",
  keywords: ["desarrollo web", "react", "typescript", "javascript", "fullstack", "node", "nextjs", "desarrollo agil"],
  authors: { name: "Roberto Cruz" },
  openGraph: {
    title: "Roberto Cruz - Desarrollador Web Fullstack",
    description: "Soy Roberto Cruz, un desarrollador web fullstack freelancer. Explora mi portafolio y conoce más sobre mi experiencia en desarrollo web con tecnologías como React, TypeScript, Node.js y Next.js.",
    siteName: "Roberto Cruz",
    locale: "es_ES",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
