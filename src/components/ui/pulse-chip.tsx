
import React from "react";
import { cn } from "@/lib/utils";

interface PulseChipProps {
  children: React.ReactNode;
  className?: string;
}

const PulseChip = ({ children, className }: PulseChipProps) => {
  return (
    <div className={cn(
      "pulse-chip inline-flex items-center px-4 py-2 bg-pulse-100 text-pulse-700 rounded-full text-sm font-medium border border-pulse-200",
      className
    )}>
      {children}
    </div>
  );
};

export default PulseChip;
