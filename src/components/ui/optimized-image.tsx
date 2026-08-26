"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide" | "ultrawide";
  priority?: boolean;
  fallbackIcon?: React.ReactNode;
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  ultrawide: "aspect-[21/9]",
};

/**
 * Responsive image with lazy loading, fallback placeholder,
 * and consistent aspect ratios that never break layout.
 */
export function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = "video",
  priority = false,
  fallbackIcon,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ivory-dark",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Placeholder / Fallback */}
      {(!loaded || error) && (
        <div className="absolute inset-0 flex items-center justify-center">
          {fallbackIcon || (
            <div className="w-10 h-10 rounded-full bg-maroon/5 flex items-center justify-center">
              <svg className="w-5 h-5 text-maroon/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Actual Image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
