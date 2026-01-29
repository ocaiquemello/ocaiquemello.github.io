import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { content } from "@/lib/content";

export default function HomeEn() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={content.en.hero} />
      <About content={content.en.about} />
      <Projects content={content.en.projects} />
      <Contact content={content.en.contact} />
    </div>
  );
}
