import { Content } from "@/lib/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, Database, Cloud, Layers, Wrench, Zap } from "lucide-react";

interface SystemDesignProps {
  content: Content["systemDesign"];
}

export function SystemDesign({ content }: SystemDesignProps) {
  // Order: Backends, SaaS, High Perf, DevOps, Automation, Event-Driven
  const icons = [Server, Layers, Zap, Cloud, Wrench, Database];

  return (
    <section id="system-design" className="py-24 bg-background border-b border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => {
            const Icon = icons[index] || Database;
            return (
              <Card key={index} className="bg-muted/30 border-border/60 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
