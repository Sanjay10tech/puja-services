"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Heart, MessageCircle } from "lucide-react";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

const footerServices = [
  "Rudrabhisheka",
  "Ganapati Pooja",
  "Navagraha Pooja",
  "Pitru Pooja",
  "Satyanarayana Pooja",
  "Maha Mrityunjaya Pooja",
  "Griha Pravesh",
  "Wedding Ceremonies",
];

export function Footer() {
  return (
    <footer className="bg-maroon text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="flex items-center gap-4">
                <Logo size="xl" showText={false} linked={true} light={true} />
                <div>
                  <p className="font-serif font-bold text-xl md:text-2xl text-saffron leading-tight">
                    Gokarna Sarva Poojas
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Sacred Rituals, Divine Blessings
                  </p>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Welcome to Gokarna Sarva Poojas — your trusted platform for authentic Pooja and 
              experienced Pandit services in Gokarna. Book traditional Vedic rituals with ease, 
              devotion, and complete peace of mind.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${BRAND.phone}`}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron hover:text-maroon transition-all duration-300"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron hover:text-maroon transition-all duration-300"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pooja Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-saffron mb-4">
              Pooja Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-saffron transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talk to Us */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-saffron mb-4">
              Talk to Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917899148582"
                  className="text-white/70 hover:text-saffron transition-colors text-sm"
                >
                  7899148582
                </a>
              </li>
              <li>
                <a
                  href="mailto:marathisarvapooja@gmail.com"
                  className="text-white/70 hover:text-saffron transition-colors text-sm"
                >
                  marathisarvapooja@gmail.com
                </a>
              </li>
            </ul>

            <h4 className="font-serif font-semibold text-base text-saffron mt-6 mb-3">
              Address
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              No. 123, 15th Cross Rd,<br />
              Ittamadu, Banashankari 3rd Stage,<br />
              Hosakerehalli, Bengaluru,<br />
              Karnataka 560085
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da851] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <Link href="/privacy-policy" className="hover:text-saffron transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-saffron transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
