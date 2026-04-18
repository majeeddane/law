"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export function FloatingLabelInput({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  className,
}: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={isActive ? " " : placeholder || " "}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "peer w-full h-12 px-4 pt-4 pb-2 text-[15px] text-navy bg-white rounded-xl",
          "border border-navy/10 transition-all duration-300",
          "focus:border-gold focus:ring-2 focus:ring-gold/10 focus:outline-none",
          "placeholder-transparent"
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-300 pointer-events-none",
          "text-muted-foreground",
          isActive
            ? "top-2 text-[11px] font-medium text-gold-dark"
            : "top-3.5 text-sm"
        )}
      >
        {label}
      </label>
    </div>
  );
}
