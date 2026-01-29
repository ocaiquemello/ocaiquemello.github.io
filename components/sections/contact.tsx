"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Content } from "@/lib/content";

interface ContactProps {
  content: Content["contact"];
}

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-12 shadow-sm border border-border/50"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:ocaiquemello@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-lg shadow-lg shadow-primary/20"
            >
              <Mail size={20} />
              {content.ctaEmail}
            </Link>
            
            <div className="flex gap-4">
              <Link 
                href="https://linkedin.com/in/ocaiquemello" 
                target="_blank"
                className="p-4 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors border border-border"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/ocaiquemello" 
                target="_blank"
                className="p-4 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors border border-border"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
             <p className="text-muted-foreground font-mono">
               ocaiquemello@gmail.com
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
