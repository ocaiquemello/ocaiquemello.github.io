"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Content } from "@/lib/content";

interface ProjectsProps {
  content: Content["projects"];
}

const getProjects = (content: Content["projects"]) => [
  {
    title: content.items[0].title,
    description: content.items[0].description,
    tags: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    image: "/img/overlord.png",
    link: null, 
  },
  {
    title: content.items[1].title,
    description: content.items[1].description,
    tags: ["HTML5", "JavaScript", "Bootstrap 4"],
    image: "/img/mmcigarco.png",
    link: "https://mmcigarco.com.br",
  },
  {
    title: content.items[2].title,
    description: content.items[2].description,
    tags: ["PHP", "MySQL", "jQuery", "PagSeguro API"],
    image: "/img/pitanshop.png",
    link: "https://pitanshop.com.br",
  },
  {
    title: content.items[3].title,
    description: content.items[3].description,
    tags: ["PHP", "jQuery", "AJAX", "PWA", "MySQL"],
    image: "/img/maisbela.png",
    link: null,
  },
  {
    title: content.items[4].title,
    description: content.items[4].description,
    tags: ["PHP", "MySQL", "jQuery", "AJAX"],
    image: "/img/hentz.png",
    link: null,
  }
];

export function Projects({ content }: ProjectsProps) {
  const projects = getProjects(content);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {content.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-20 h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
