import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { content } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caique Mello | Full-Stack Web Developer",
  description: "Caique Mello's portfolio, a Full-Stack developer specialized in creating modern and performant web solutions.",
  keywords: ["Web Developer", "Full Stack", "React", "Next.js", "Caique Mello", "Portfolio"],
  openGraph: {
    title: "Caique Mello | Full-Stack Web Developer",
    description: "Transforming ideas into exceptional digital experiences.",
    url: "https://ocaiquemello.github.io/en",
    siteName: "Caique Mello Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayoutEn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="scroll-smooth">
        <Navbar content={content.en.nav} />
        <main>{children}</main>
        <Footer content={content.en.footer} />
    </div>
  );
}
