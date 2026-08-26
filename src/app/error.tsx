"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-saffron-dark" />
        </div>
        <h2 className="text-2xl font-bold text-maroon mb-3">
          Something Went Wrong
        </h2>
        <p className="text-charcoal-light mb-6">
          We encountered an unexpected error. Please try again or contact us if 
          the issue persists.
        </p>
        <Button variant="primary" size="md" onClick={reset}>
          <RotateCcw className="w-4 h-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
