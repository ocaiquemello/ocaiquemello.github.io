import { Hero } from "@/components/sections/hero";
import { SystemDesign } from "@/components/sections/system-design";
import { Projects } from "@/components/sections/projects";
import { IndieSaas } from "@/components/sections/indie-saas";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { content } from "@/lib/content";

export default function HomeEn() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={content.en.hero} />
      <SystemDesign content={content.en.systemDesign} />
      <Projects content={content.en.projects} />
      <IndieSaas content={content.en.indieSaas} />
      <About content={content.en.about} />
      <Contact content={content.en.contact} />
    </div>
  );
}
