"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Content } from "@/lib/content";

interface HeroProps {
  content: Content["hero"];
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
                {content.greeting}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Caique Mello
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
                {content.role}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {content.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  {content.cta} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <Image
                src="/img/imgProfile.jpg"
                alt="Caique Mello"
                fill
                className="object-cover rounded-full border-4 border-background shadow-2xl relative z-10"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
