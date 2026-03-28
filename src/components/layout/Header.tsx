"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Methodology", href: "#methodology" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
            scrolled ? "glass shadow-xl shadow-black/5" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-heading font-bold italic group-hover:bg-accent transition-colors">
              E
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-primary">
              EliteTutor.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton onClick={openModal}>
              <div className="px-6 py-2.5 rounded-full bg-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-accent/30 transition-shadow">
                Book a Consultation
              </div>
            </MagneticButton>
          </div>
          
          {/* Mobile Right Edge */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-foreground/10 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <button onClick={() => { setMobileMenuOpen(false); openModal(); }} className="w-full mt-4 px-6 py-3 rounded-xl bg-accent text-white font-medium">
                Book a Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
