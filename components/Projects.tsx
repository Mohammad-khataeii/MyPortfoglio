"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function Projects({ profile }: { profile: Profile }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section" id="projects">
      <RevealGroup className="shell">
        <RevealItem>
          <p className="eyebrow">Featured projects</p>
        </RevealItem>
        <RevealItem>
          <h2 className="section-title">Selected systems across industry, research, and robotics.</h2>
        </RevealItem>
        <RevealItem>
          <p className="section-copy">
            Full-stack products, industrial analytics, AR robot control, and research platforms built to solve concrete
            problems under real constraints.
          </p>
        </RevealItem>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {profile.projects.map((project) => (
            <RevealItem key={project.name}>
              <motion.article
                whileHover={reduceMotion ? {} : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`glass group rounded-[2rem] p-5 sm:p-6 ${project.featured ? "lg:col-span-2" : ""}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="mono text-xs tracking-[0.2em] text-[var(--accent-2)] uppercase">{project.type}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">{project.name}</h3>
                  </div>
                  {project.featured ? (
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      Lead project
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 max-w-3xl text-[0.95rem] leading-7 text-[var(--muted)] sm:text-[0.98rem] sm:leading-8">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/82">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="cta-secondary px-4 py-2 text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
