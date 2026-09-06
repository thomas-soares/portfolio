"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-glow) focus-visible:ring-offset-2 focus-visible:ring-offset-(--background) disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-(--primary) text-(--primary-foreground) hover:bg-(--primary-hover) hover:text-(--primary-hover-foreground)",
        secondary:
          "bg-(--secondary) text-(--secondary-foreground) hover:bg-(--primary-soft) hover:text-(--primary-hover-foreground)",
        outline:
          "border border-(--border) bg-transparent text-(--foreground) hover:bg-(--surface)",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-xl px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ComponentPropsWithoutRef<typeof motion.button>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
