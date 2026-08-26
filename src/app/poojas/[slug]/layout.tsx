import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pooja Details",
  description:
    "Detailed information about this sacred Vedic ceremony — benefits, procedure, pricing, and booking.",
};

export default function PujaDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
