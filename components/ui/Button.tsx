"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Simplified API: variant + emphasis/size
export type ButtonVariant = "solid" | "outline" | "link";

export type ButtonTone = "primary" | "secondary" | "white";

export type ButtonSize = "md" | "lg" | "xl";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
}

const base = "w-fit cursor-pointer font-family-cardo";
const sizeToClass: Record<ButtonSize, string> = {
  md: "px-13 py-4.5 text-size-19 leading-28-5",
  lg: "px-13 py-4.5 text-size-19 leading-28-5",
  xl: "px-[100px] py-7 text-size-19 leading-28-5",
};

const makeClasses = (
  variant: ButtonVariant | undefined,
  tone: ButtonTone | undefined,
  size: ButtonSize | undefined
) => {
  const sz = sizeToClass[size ?? "md"];
  if (variant === "solid") {
    if (tone === "primary") return cn(base, sz, "bg-primary text-secondary");
  }
  if (variant === "outline") {
    if (tone === "primary")
      return cn(
        base,
        sz,
        "bg-transparent text-secondary box-border border-[2px] border-primary"
      );
    if (tone === "white")
      return cn(
        base,
        sz,
        "bg-transparent text-white box-border border-[2px] border-primary"
      );
  }
  if (variant === "link") {
    if (tone === "white")
      return cn(
        base,
        "border-b border-white pb-0.5 pr-[11px] text-size-19 leading-28-5"
      );
    if (tone === "secondary")
      return cn(
        base,
        "border-b-2 border-secondary pb-1 pr-[9px] text-size-19 leading-28-8 text-secondary"
      );
  }
  return cn(base, sz);
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      tone = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(makeClasses(variant, tone, size), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
