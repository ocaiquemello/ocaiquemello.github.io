import { Content } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, TrendingUp } from "lucide-react";

interface IndieSaasProps {
  content: Content["indieSaas"];
}

export function IndieSaas({ content }: IndieSaasProps) {
  return (
    <section id="indie-saas" className="py-24 bg-muted/20 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
             <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">{content.title}</h2>
                <p className="text-muted-foreground max-w-2xl text-lg">{content.description}</p>
             </div>
             <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full border border-border">
                <Rocket className="h-4 w-4 text-primary" />
                <span>{content.shipping}</span>
             </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 border border-dashed border-border/60 rounded-xl bg-muted/10">
            <div className="p-4 bg-muted rounded-full text-muted-foreground mb-4">
               <Rocket className="h-8 w-8 opacity-50" />
            </div>
            <h3 className="text-xl font-bold mb-2">{content.comingSoonTitle}</h3>
            <p className="text-muted-foreground text-center max-w-md px-4">
               {content.comingSoonDescription}
            </p>
        </div>
      </div>
    </section>
  );
}
