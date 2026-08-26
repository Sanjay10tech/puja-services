import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vedic Astrology Services",
  description:
    "Expert Vedic astrology consultations — Kundli analysis, marriage compatibility, career guidance, and remedial astrology.",
};

export default function AstrologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
