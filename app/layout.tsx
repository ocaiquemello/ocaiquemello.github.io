import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Caique Mello | Full-Stack Web Developer",
    template: "%s | Caique Mello"
  },
  description: "Portfólio de Caique Mello, desenvolvedor Full-Stack especializado em tecnologias web modernas. Confira meus projetos e entre em contato.",
  keywords: ["Full-Stack", "Developer", "Web", "Next.js", "React", "Node.js", "Portfolio", "Caique Mello"],
  authors: [{ name: "Caique Mello", url: "https://ocaiquemello.github.io" }],
  creator: "Caique Mello",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ocaiquemello.github.io",
    title: "Caique Mello | Full-Stack Web Developer",
    description: "Desenvolvedor web focado em criar experiências digitais excepcionais.",
    siteName: "Caique Mello Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caique Mello | Full-Stack Web Developer",
    description: "Desenvolvedor web focado em criar experiências digitais excepcionais.",
    creator: "@ocaiquemello",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caique Mello",
    url: "https://ocaiquemello.github.io",
    jobTitle: "Full-Stack Web Developer",
    sameAs: [
      "https://github.com/ocaiquemello",
      "https://linkedin.com/in/ocaiquemello"
    ],
    description: "Desenvolvedor Full-Stack especializado em tecnologias web modernas."
  };

  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
