"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";
import { ExplorerMapVisual, RobotArmVisual } from "./visuals/ProjectVisuals";

export function Projects({ profile }: { profile: Profile }) {
  const reduceMotion = useReducedMotion();

  const visuals = {
    map: ExplorerMapVisual,
    robot: RobotArmVisual,
  } as const;

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
                className={`glass group flex h-full flex-col rounded-[2rem] p-5 sm:p-6 ${project.featured ? "lg:col-span-2" : ""}`}
              >
                {project.visual ? (
                  <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,rgba(18,24,49,0.78),rgba(9,12,28,0.92))]">
                    {(() => {
                      const Visual = visuals[project.visual];
                      return <Visual className="h-40 w-full opacity-95 sm:h-44" />;
                    })()}
                  </div>
                ) : null}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-3">
                    <p className="mono text-xs tracking-[0.2em] text-[var(--accent-2)] uppercase">{project.type}</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">{project.name}</h3>
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
                  <div className="mt-7 flex flex-wrap gap-3">
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
