"use client";

import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { Profile } from "@/data/profile";
import { useMotionReady } from "./useMotionReady";

export function Hero({ profile }: { profile: Profile }) {
  const motionReady = useMotionReady();

  return (
    <section id="top" className="shell relative section pt-16 md:pt-20">
      <div className="grid items-center gap-8 lg:gap-10 xl:grid-cols-[1.02fr_minmax(28rem,1fr)]">
        <div>
          <motion.p
            initial={false}
            animate={motionReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45 }}
            className="eyebrow"
          >
            Software engineer · AI · robotics · industrial systems
          </motion.p>
          <motion.h1
            initial={false}
            animate={motionReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl text-[clamp(2.3rem,10vw,4.2rem)] leading-[0.9] font-semibold tracking-[-0.07em] sm:text-[clamp(2.7rem,11vw,4.5rem)] md:text-[clamp(4.2rem,8vw,7rem)]"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={false}
            animate={motionReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg md:text-xl"
          >
            {profile.hero.headline} {profile.hero.blurb}
          </motion.p>
          <motion.div
            initial={false}
            animate={motionReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-8 grid gap-3 sm:flex sm:flex-wrap"
          >
            <a href="#projects" className="cta-primary w-full sm:w-auto">
              View projects <ArrowRight size={18} />
            </a>
            {profile.hasCv ? (
              <a href={profile.cvPath} className="cta-secondary w-full sm:w-auto" download>
                Download CV <Download size={18} />
              </a>
            ) : (
              <span className="cta-tertiary w-full cursor-not-allowed sm:w-auto">CV unavailable</span>
            )}
            <a href={`mailto:${profile.email}`} className="cta-secondary w-full sm:w-auto">
              Contact me <Mail size={18} />
            </a>
          </motion.div>
          <motion.div
            initial={false}
            animate={motionReady ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {profile.hero.highlights.map((highlight) => (
              <span key={highlight} className="glass rounded-full px-4 py-2 text-sm leading-6 text-white/85">
                {highlight}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={motionReady ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="glass relative w-full overflow-hidden rounded-[2rem] p-5 sm:p-6 lg:max-w-[44rem] xl:ml-auto xl:max-w-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,243,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(143,109,255,0.18),transparent_35%)]" />
          <div className="relative space-y-5">
            <div className="flex items-start justify-between gap-4 text-sm text-[var(--muted)]">
              <span className="mono max-w-[12ch] text-[0.95rem] leading-8 break-words sm:max-w-none sm:text-sm sm:leading-6">
                /currently-building
              </span>
              <Sparkles size={16} className="text-[var(--accent-2)]" />
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Smarti</h2>
            <p className="text-sm leading-8 text-[var(--muted)] sm:text-[0.95rem]">
              Manufacturing analytics platform for railway braking systems, spanning dashboards, SPC, predictive
              insights, root-cause tooling, RBAC, and quality monitoring.
            </p>
            <div className="space-y-3">
              {[
                "Pipeline health: stable",
                "Industrial dashboards: active",
                "Predictive insights: in progress",
                "Research impact: real-world deployment",
              ].map((line, index) => (
                <div
                  key={line}
                  className="grid grid-cols-[1.8rem_1fr] items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3.5 sm:grid-cols-[2rem_1fr]"
                >
                  <span className="mono pt-0.5 text-xs text-[var(--muted)]">0{index + 1}</span>
                  <span className="text-sm leading-6 text-white/92">{line}</span>
                </div>
              ))}
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-[#050816] p-4">
              <div className="mono text-xs leading-7 text-[var(--muted)]">
                <div>$ stack</div>
                <div className="text-white/90">python react data-analysis spc machine-learning</div>
                <div className="mt-3">$ focus</div>
                <div className="text-white/90">software that performs under industrial constraints</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
