import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Puja Services",
  description:
    "Book authentic Vedic pooja services — Satyanarayan, Griha Pravesh, Rudrabhishek, Navagraha Shanti, weddings, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
