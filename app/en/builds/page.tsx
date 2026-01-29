import { content } from "@/lib/content";
import { Builds } from "@/components/sections/builds";

export default function BuildsPageEn() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Builds content={content.en.builds} />
    </main>
  );
}
