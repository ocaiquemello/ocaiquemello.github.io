import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Content } from "@/lib/content";

interface FooterProps {
  content: Content["footer"];
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-muted/30 border-t border-border/40 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} Caique Mello. {content.rights}
            </p>
            {content.slogan && (
               <p className="text-xs text-muted-foreground/60 font-mono tracking-wider uppercase">
                   {content.slogan}
               </p>
            )}
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/ocaiquemello" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </Link>
            <Link href="https://linkedin.com/in/ocaiquemello" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </Link>
            <Link href="mailto:ocaiquemello@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
