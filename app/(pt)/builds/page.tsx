import { content } from "@/lib/content";
import { Builds } from "@/components/sections/builds";

export default function BuildsPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Builds content={content.pt.builds} />
    </main>
  );
}
