import { Hero } from "@/components/sections/hero";
import { SystemDesign } from "@/components/sections/system-design";
import { Projects } from "@/components/sections/projects";
import { IndieSaas } from "@/components/sections/indie-saas";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={content.pt.hero} />
      <SystemDesign content={content.pt.systemDesign} />
      <Projects content={content.pt.projects} />
      <IndieSaas content={content.pt.indieSaas} />
      <About content={content.pt.about} />
      <Contact content={content.pt.contact} />
    </div>
  );
}
