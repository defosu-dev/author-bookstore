import React from "react";
import { cn } from "@/lib/utils";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h2Lg"
  | "h3"
  | "titleMd"
  | "h4"
  | "h4Tight"
  | "titleSm"
  | "eyebrow"
  | "titleSmLoose"
  | "bodySm"
  | "bodyLg"
  | "body"
  | "caption";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TypographyVariant;
  children?: React.ReactNode;
  color?: "secondary" | "white" | "primary" | "octonary" | "quinary";
}

const variantToClassName: Record<TypographyVariant, string> = {
  h1: "text-size-64 leading-78 tracking-1-3 font-family-cardo",
  h2: "text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ",
  h2Lg: "font-family-cardo text-size-45 leading-54 tracking-0 ",
  h3: "font-family-cardo text-size-32 leading-38-4 tracking-0-32 text-secondary",
  titleMd:
    "text-2xl leading-33-6 tracking-0-24 text-secondary font-family-cardo",
  h4: "text-2xl leading-28-8 tracking-0 text-secondary font-family-cardo",
  h4Tight: "text-2xl leading-33-6 tracking-0-38 font-family-cardo",
  titleSm: "font-family-cardo text-size-22 leading-26-4 tracking-0",
  eyebrow: "font-family-cardo text-size-21 leading-36 tracking-1-2",
  titleSmLoose: "font-family-cardo text-size-22 leading-33 tracking-0",
  bodySm: "font-family-inter text-size-18 leading-28-5 tracking-0",
  bodyLg: "font-family-inter text-size-19 leading-32-3 tracking-0",
  body: "font-family-inter text-size-19 leading-28-5 tracking-0",
  caption: "text-base leading-25-5",
};

export default function Typography(props: TypographyProps) {
  const {
    as: TagProp = "p",
    className,
    variant = "body",
    color,
    children,
    ...rest
  } = props;
  const Tag = TagProp as React.ElementType;
  const toneClass =
    color === "secondary"
      ? "text-secondary"
      : color === "white"
      ? "text-white"
      : color === "primary"
      ? "text-primary"
      : color === "octonary"
      ? "text-octonary"
      : color === "quinary"
      ? "text-quinary"
      : "";
  return (
    <Tag
      className={cn(variantToClassName[variant], toneClass, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
