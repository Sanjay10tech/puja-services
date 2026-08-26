"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-ivory-dark"
          : "bg-ivory/80 backdrop-blur-sm"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] sm:h-[72px] md:h-20">
          {/* Logo */}
          <Logo size="navbar" showText={true} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-charcoal hover:text-maroon hover:bg-maroon/5 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/talk-to-us"
              className="hidden md:flex items-center gap-2 bg-maroon text-white px-4 py-2 rounded-lg hover:bg-maroon-light transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-maroon hover:bg-maroon/10 rounded-lg transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-ivory-dark shadow-xl overflow-hidden"
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-charcoal hover:text-maroon hover:bg-ivory rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-ivory-dark">
                <Link
                  href="/talk-to-us"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-maroon text-white px-4 py-3 rounded-lg hover:bg-maroon-light transition-all duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Book a Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
