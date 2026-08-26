import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book your personalized Vedic ceremony or speak with our experienced pandits. Quick response guaranteed.",
};

export default function TalkToUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
