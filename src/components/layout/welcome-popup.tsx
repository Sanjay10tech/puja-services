"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Image from "next/image";

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closePopup = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to Gokarna Sarva Poojas"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Top decorative bar */}
            <div className="h-1.5 bg-gradient-to-r from-maroon via-saffron to-maroon" />

            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 w-8 h-8 bg-charcoal/10 hover:bg-charcoal/20 rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Close welcome popup"
            >
              <X className="w-4 h-4 text-charcoal" />
            </button>

            {/* Content */}
            <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
              {/* Logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-2 border-saffron/30">
                <Image
                  src="/images/logo.png"
                  alt="Gokarna Sarva Poojas Logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Welcome text */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-saffron" />
                <span className="text-xs font-semibold uppercase tracking-wider text-saffron">
                  Welcome
                </span>
                <Sparkles className="w-4 h-4 text-saffron" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon mb-2">
                Gokarna Sarva Poojas
              </h2>

              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                Authentic Vedic Pooja & Experienced Pandit Seva — Sacred Rituals, Divine Blessings
              </p>
            </div>

            {/* Bottom decorative bar */}
            <div className="h-1 bg-gradient-to-r from-saffron/0 via-saffron to-saffron/0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
