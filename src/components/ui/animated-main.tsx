"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function AnimatedMain({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.main>
  );
}
