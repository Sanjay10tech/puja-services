"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("text-center py-16 md:py-20", className)}>
      <div className="w-16 h-16 bg-ivory-dark rounded-full flex items-center justify-center mx-auto mb-5">
        {icon || <Search className="w-7 h-7 text-charcoal-light/40" />}
      </div>
      <h3 className="text-lg font-serif font-semibold text-maroon mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-charcoal-light text-sm mb-5 max-w-sm mx-auto">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
