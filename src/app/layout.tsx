import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { WelcomePopup } from "@/components/layout/welcome-popup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B1E3A",
};

export const metadata: Metadata = {
  title: {
    default: "Gokarna Sarva Poojas | Book Experienced Pandits for Vedic Ceremonies",
    template: "%s | Gokarna Sarva Poojas",
  },
  description:
    "Book experienced pandits for authentic Vedic poojas, sacred ceremonies, and spiritual rituals in Gokarna. Rudrabhisheka, Navagraha, Pitru Pooja & more.",
  keywords: [
    "pandit booking gokarna",
    "pooja booking online",
    "vedic rituals gokarna",
    "rudrabhisheka gokarna",
    "experienced pandit",
    "spiritual services india",
    "hindu ceremonies booking",
    "navagraha pooja",
    "pitru pooja gokarna",
  ],
  authors: [{ name: "Gokarna Sarva Poojas" }],
  creator: "Gokarna Sarva Poojas",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Gokarna Sarva Poojas",
    title: "Gokarna Sarva Poojas | Book Experienced Pandits",
    description:
      "Book experienced pandits for authentic Vedic poojas and sacred ceremonies in Gokarna.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokarna Sarva Poojas",
    description: "Book experienced pandits for Vedic ceremonies in Gokarna.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 sm:pt-18 md:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <WelcomePopup />
      </body>
    </html>
  );
}
