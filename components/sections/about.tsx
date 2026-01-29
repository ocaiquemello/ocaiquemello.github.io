"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Wrench } from "lucide-react";
import { Content } from "@/lib/content";

interface AboutProps {
  content: Content["about"];
}

const getSkills = (content: Content["about"]) => [
  {
    category: content.skills.backend,
    icon: <Server className="w-6 h-6 text-primary" />,
    items: ["PHP", "Laravel", "Symfony", "Node.js", "Python", "REST APIs", "Bancos SQL"]
  },
  {
    category: content.skills.frontend,
    icon: <Layout className="w-6 h-6 text-primary" />,
    items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Mobile First"]
  },
  {
    category: content.skills.devops,
    icon: <Wrench className="w-6 h-6 text-primary" />,
    items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD (GitHub Actions)", "NGINX/Apache"]
  },
  {
    category: content.skills.data,
    icon: <Database className="w-6 h-6 text-primary" />,
    items: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch", "Pest/PHPUnit", "Jest/Cypress", "Clean Arch"]
  },
];

export function About({ content }: AboutProps) {
  const skills = getSkills(content);
  
  return (
    <section id="about" className="py-24 bg-muted/30">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
             {skills.map((skill, index) => (
               <motion.div 
                 key={index}
                 whileHover={{ y: -5 }}
                 className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all"
               >
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-primary/10 rounded-lg">
                     {skill.icon}
                   </div>
                   <h3 className="font-semibold">{skill.category}</h3>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {skill.items.map((item) => (
                     <span key={item} className="text-xs font-medium px-2.5 py-1 bg-muted rounded-full text-muted-foreground">
                       {item}
                     </span>
                   ))}
                 </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
