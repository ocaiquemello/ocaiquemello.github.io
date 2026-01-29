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

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            {content.greeting}
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-2xl mx-auto">
             <span className="text-foreground font-medium">{content.role}</span>
          </p>

          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full text-base" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              {content.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => window.open('https://github.com/ocaiquemello', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => window.open('https://linkedin.com/in/ocaiquemello', '_blank')}>
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
