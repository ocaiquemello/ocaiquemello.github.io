import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { content } from "@/lib/content";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar content={content.pt.nav} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer content={content.pt.footer} />
    </>
  );
}
