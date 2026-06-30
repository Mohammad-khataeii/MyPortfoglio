"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionReady } from "./useMotionReady";

export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const motionReady = useMotionReady();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={motionReady ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
