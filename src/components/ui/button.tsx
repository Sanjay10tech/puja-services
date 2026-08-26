"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-maroon text-white hover:bg-maroon-light active:bg-maroon-dark shadow-md hover:shadow-lg",
        secondary:
          "bg-transparent border-2 border-maroon text-maroon hover:bg-maroon hover:text-white active:bg-maroon-dark",
        saffron:
          "bg-saffron text-charcoal hover:bg-saffron-dark active:bg-saffron-dark shadow-md hover:shadow-lg font-semibold",
        ghost:
          "bg-transparent text-maroon hover:bg-maroon/10 active:bg-maroon/15",
        link:
          "bg-transparent text-maroon underline-offset-4 hover:underline p-0 shadow-none",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  loading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </motion.button>
  );
}

export { buttonVariants };
