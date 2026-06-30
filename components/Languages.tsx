import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function Languages({ profile }: { profile: Profile }) {
  return (
    <section className="section" id="languages">
      <RevealGroup className="shell">
        <RevealItem>
          <p className="eyebrow">Languages</p>
        </RevealItem>
        <RevealItem>
          <h2 className="section-title">Comfortable across multicultural teams and international projects.</h2>
        </RevealItem>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {profile.languages.map((language) => (
            <RevealItem key={language.name}>
              <article className="glass rounded-[1.5rem] p-5">
                <h3 className="text-lg font-semibold">{language.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{language.level}</p>
              </article>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
