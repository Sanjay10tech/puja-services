import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories, Wisdom & Tradition — Blog",
  description:
    "Explore articles on Vedic knowledge, Gokarna's sacred heritage, spiritual practices, astrology insights, and pooja guides from Gokarna Sarva Poojas.",
  openGraph: {
    title: "Stories, Wisdom & Tradition — Gokarna Sarva Poojas Blog",
    description:
      "Explore the depth of Vedic knowledge, spiritual practices, and the sacred heritage of Gokarna through our curated articles.",
    type: "website",
    siteName: "Gokarna Sarva Poojas",
    locale: "en_IN",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
