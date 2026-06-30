import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function About({ profile }: { profile: Profile }) {
  return (
    <section className="section" id="about">
      <RevealGroup className="shell">
        <RevealItem>
          <p className="eyebrow">About</p>
        </RevealItem>
        <RevealItem>
          <h2 className="section-title">Practical engineering, grounded in real systems.</h2>
        </RevealItem>
        <RevealItem>
          <p className="section-copy">{profile.about}</p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
