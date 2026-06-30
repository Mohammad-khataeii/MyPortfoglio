import type { Profile } from "@/data/profile";
import { SectionReveal } from "./SectionReveal";

export function Volunteering({ profile }: { profile: Profile }) {
  return (
    <section className="section" id="volunteering">
      <SectionReveal className="shell">
        <p className="eyebrow">Volunteering</p>
        <div className="glass rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="section-title !text-[clamp(1.8rem,4vw,2.8rem)]">{profile.volunteering.title}</h2>
              <p className="mt-2 text-white/82">{profile.volunteering.location}</p>
            </div>
            <p className="mono text-sm text-[var(--accent-2)]">{profile.volunteering.period}</p>
          </div>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-8 text-[var(--muted)]">{profile.volunteering.text}</p>
        </div>
      </SectionReveal>
    </section>
  );
}
