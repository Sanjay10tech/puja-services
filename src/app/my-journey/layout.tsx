import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "The spiritual journey of Gokarna Sarva Poojas — from learning ancient Vedic scriptures to serving thousands of families with authentic rituals.",
};

export default function MyJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
