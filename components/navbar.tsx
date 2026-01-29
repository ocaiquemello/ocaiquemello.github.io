"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Content } from "@/lib/content";
import { usePathname } from "next/navigation";

interface NavbarProps {
  content: Content["nav"];
}

export function Navbar({ content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  const homePath = isEnglish ? "/en" : "/";
  const isHomePage = pathname === homePath || pathname === `${homePath}/`;

  const navItems = [
    { name: content.about, href: isHomePage ? "#about" : `${homePath}#about` },
    { name: content.builds, href: isEnglish ? "/en/builds" : "/builds" },
    { name: content.projects, href: isHomePage ? "#projects" : `${homePath}#projects` },
    { name: content.contact, href: isHomePage ? "#contact" : `${homePath}#contact` },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href={isEnglish ? "/en" : "/"} className="text-xl font-bold font-mono">
              CM.
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2 border-l border-border pl-6">
                <Link 
                  href="/" 
                  className={`text-sm font-medium transition-colors ${!isEnglish ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}
                >
                  PT
                </Link>
                <span className="text-muted-foreground">|</span>
                <Link 
                  href="/en" 
                  className={`text-sm font-medium transition-colors ${isEnglish ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
             {/* Mobile Language Switcher */}
             <div className="flex items-center gap-2 mr-2">
                <Link 
                  href="/" 
                  className={`text-xs font-medium transition-colors ${!isEnglish ? "text-primary font-bold" : "text-muted-foreground"}`}
                >
                  PT
                </Link>
                <span className="text-muted-foreground/50">|</span>
                <Link 
                  href="/en" 
                  className={`text-xs font-medium transition-colors ${isEnglish ? "text-primary font-bold" : "text-muted-foreground"}`}
                >
                  EN
                </Link>
              </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/40 bg-background"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
