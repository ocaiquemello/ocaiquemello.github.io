"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { Content } from "@/lib/content";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  content: Content["projects"];
}

export function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className="py-32 bg-background relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">{content.title}</h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                {content.subtitle}
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              {content.viewGithub} <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Code2 size={20} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full">
              {content.viewGithub} <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </section>
  );
}
