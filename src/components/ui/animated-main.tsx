"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type AnimatedMainProps = React.PropsWithChildren<HTMLMotionProps<"main">>;

export function AnimatedMain({
  children,
  className,
  ...props
}: AnimatedMainProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={className}
      {...props}
    >
      {children}
    </motion.main>
  );
}
