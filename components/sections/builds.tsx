import { Content } from "@/lib/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Box, Cpu } from "lucide-react";

interface BuildsProps {
  content: Content["builds"];
}

const icons = [Rocket, Box, Cpu];

export function Builds({ content }: BuildsProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>

      <div className="space-y-8">
        {content.items.map((item, index) => {
          const Icon = icons[index] || Rocket;
          return (
            <Card key={index} className="border-border/60 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Icon size={20} />
                   </div>
                   <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
