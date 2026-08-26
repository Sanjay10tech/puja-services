import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Article",
  description:
    "Explore Vedic wisdom, spiritual insights, and sacred knowledge from Gokarna Sarva Poojas.",
  openGraph: {
    type: "article",
    siteName: "Gokarna Sarva Poojas",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
