import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function Education({ profile }: { profile: Profile }) {
  return (
    <section className="section" id="education">
      <RevealGroup className="shell">
        <RevealItem>
          <p className="eyebrow">Education</p>
        </RevealItem>
        <RevealItem>
          <h2 className="section-title">Academic training shaped around advanced engineering practice.</h2>
        </RevealItem>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {profile.education.map((item) => (
            <RevealItem key={`${item.degree}-${item.school}`}>
              <article className="glass rounded-[1.75rem] p-5 sm:p-6">
                <p className="mono text-xs tracking-[0.16em] text-[var(--accent-2)] uppercase">{item.period}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{item.degree}</h3>
                <p className="mt-2 text-white/82">{item.school}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.location}</p>
                {item.thesis ? <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.thesis}</p> : null}
                {item.summary ? <p className="mt-4 text-sm leading-7 text-white/82">{item.summary}</p> : null}
              </article>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
