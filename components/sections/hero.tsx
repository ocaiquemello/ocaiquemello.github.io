"use client";

import { motion } from "framer-motion";
import { Content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

interface HeroProps {
  content: Content["hero"];
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge / Terminal feel */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-mono text-muted-foreground mb-4 glass">
            <Terminal size={12} />
            <span>{content.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl mx-auto mb-6">
             {content.role}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>

          <p className="text-base text-muted-foreground/60 max-w-xl mx-auto leading-relaxed pt-2">
            {content.extra}
          </p>

          <div className="flex items-center justify-center gap-4 pt-8 text-sm font-medium">
             <button 
               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
               className="hover:text-primary transition-colors hover:underline underline-offset-4"
             >
                [{content.cta}]
             </button>
             <span className="text-muted-foreground/40">·</span>
             <a 
               href="https://github.com/ocaiquemello" 
               target="_blank" 
               rel="noreferrer"
               className="hover:text-primary transition-colors hover:underline underline-offset-4"
             >
                [{content.github}]
             </a>
             <span className="text-muted-foreground/40">·</span>
             <a 
               href="https://linkedin.com/in/caiquemello" 
               target="_blank" 
               rel="noreferrer"
               className="hover:text-primary transition-colors hover:underline underline-offset-4"
             >
                [{content.linkedin}]
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
