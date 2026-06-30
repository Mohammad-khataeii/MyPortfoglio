"use client";

import { motion } from "framer-motion";
import { useMotionReady } from "./useMotionReady";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const motionReady = useMotionReady();

  return (
    <motion.header
      initial={false}
      animate={motionReady ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50"
    >
      <div className="shell pt-5">
        <div className="glass flex items-center justify-between rounded-full px-4 py-3">
          <a href="#top" className="text-sm font-semibold tracking-[0.24em] text-white/85 uppercase">
            SMK
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[var(--muted)] transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <a className="cta-secondary px-4 py-2 text-sm" href="mailto:mohammadkhataei629@gmail.com">
            Contact me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
