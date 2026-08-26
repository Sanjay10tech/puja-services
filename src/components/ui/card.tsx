"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export function Card({ children, className, hover = true, as = "div" }: CardProps) {
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "bg-white rounded-xl border border-ivory-dark p-6 shadow-sm",
        hover && "hover:shadow-md hover:border-maroon/10",
        "transition-shadow duration-200",
        className
      )}
    >
      {children}
    </Component>
  );
}
