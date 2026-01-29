import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={content.pt.hero} />
      <About content={content.pt.about} />
      <Projects content={content.pt.projects} />
      <Contact content={content.pt.contact} />
    </div>
  );
}
