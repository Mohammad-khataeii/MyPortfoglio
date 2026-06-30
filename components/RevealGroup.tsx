"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionReady } from "./useMotionReady";

const ease = [0.16, 1, 0.3, 1] as const;

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

export function RevealGroup({
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
      variants={motionReady ? groupVariants : undefined}
      initial={motionReady ? "hidden" : false}
      whileInView={motionReady ? "visible" : undefined}
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const motionReady = useMotionReady();

  return (
    <motion.div className={className} variants={motionReady ? itemVariants : undefined}>
      {children}
    </motion.div>
  );
}
