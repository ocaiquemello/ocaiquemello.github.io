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



        {content.items && content.items.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {content.items.map((project, index) => (
                <div key={index} className="flex flex-col h-full"> 
                   <Card className="h-full flex flex-col hover:border-primary/50 transition-colors bg-muted/5 border-dashed border-border/60">
                      <CardContent className="p-6 pt-8 flex-grow">
                          <div className="flex items-center justify-between mb-4">
                              <div className="p-2 bg-primary/10 rounded-md text-primary">
                                  <Rocket className="h-5 w-5" />
                              </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech?.map((tag) => (
                                <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                          </div>
                      </CardContent>
                   </Card>
                </div>
              ))}
           </div>
        ) : null}

        <div className="flex flex-col items-center justify-center py-8 border border-dashed border-border/40 rounded-xl bg-muted/5">
            <h3 className="text-lg font-medium mb-2">{content.comingSoonTitle}</h3>
            <p className="text-muted-foreground text-center max-w-md px-4 mb-4 text-sm">
               {content.comingSoonDescription}
            </p>
            {content.ctaBuilds && (
                <a 
                  href="/builds" 
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                    {content.ctaBuilds} <Rocket className="ml-2 h-4 w-4" />
                </a>
            )}
        </div>
      </div>
    </section>
  );
}
