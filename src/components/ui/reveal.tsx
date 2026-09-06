"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = React.PropsWithChildren<
  {
    className?: string;
    delay?: number;
    threshold?: number;
    variants?: Variants;
  } & Omit<HTMLMotionProps<"div">, "children" | "variants">
>;

export function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.15,
  variants = defaultVariants,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
