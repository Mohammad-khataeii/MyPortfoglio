import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function Skills({ profile }: { profile: Profile }) {
  return (
    <section className="section" id="skills">
      <RevealGroup className="shell">
        <RevealItem>
          <p className="eyebrow">Skills</p>
        </RevealItem>
        <RevealItem>
          <h2 className="section-title">Capabilities spanning software, data, robotics, and embedded systems.</h2>
        </RevealItem>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profile.skills.map((group) => (
            <RevealItem key={group.group}>
              <article className="glass rounded-[1.75rem] p-6">
                <h3 className="text-xl font-semibold tracking-[-0.04em]">{group.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-sm text-white/85">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
