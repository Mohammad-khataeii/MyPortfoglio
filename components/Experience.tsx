import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function Experience({ profile }: { profile: Profile }) {
  return (
    <section className="section" id="experience">
      <RevealGroup className="shell">
        <RevealItem>
          <p className="eyebrow">Experience</p>
        </RevealItem>
        <RevealItem>
          <h2 className="section-title">A timeline of delivery across academia, industry, and teaching.</h2>
        </RevealItem>
        <div className="mt-10 space-y-5">
          {profile.experience.map((item, index) => (
            <RevealItem key={`${item.title}-${item.period}`}>
              <article className="glass rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[120px_1fr]">
                  <div className="mono text-sm text-[var(--accent-2)]">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.05em]">{item.title}</h3>
                        <p className="mt-2 text-white/80">{item.company}</p>
                      </div>
                      <div className="text-sm text-[var(--muted)]">
                        <div>{item.period}</div>
                        <div>{item.location}</div>
                      </div>
                    </div>
                    <p className="mt-5 max-w-4xl text-[0.98rem] leading-8 text-[var(--muted)]">{item.text}</p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
