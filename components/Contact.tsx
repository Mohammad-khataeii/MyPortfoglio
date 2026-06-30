import { Download, Mail } from "lucide-react";
import type { Profile } from "@/data/profile";
import { RevealGroup, RevealItem } from "./RevealGroup";

export function Contact({ profile }: { profile: Profile }) {
  const linkedinReady = Boolean(profile.social.linkedin);
  const githubReady = Boolean(profile.social.github);

  return (
    <section className="section pb-20" id="contact">
      <RevealGroup className="shell">
        <RevealItem>
          <div className="glass rounded-[2rem] p-5 sm:p-6 md:p-10">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Open to ambitious engineering work and meaningful collaboration.</h2>
            <p className="section-copy">{profile.contact}</p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a href={`mailto:${profile.email}`} className="cta-primary w-full sm:w-auto">
                Email me <Mail size={18} />
              </a>
              {profile.hasCv ? (
                <a href={profile.cvPath} className="cta-secondary w-full sm:w-auto" download>
                  Download CV <Download size={18} />
                </a>
              ) : (
                <span className="cta-tertiary w-full cursor-not-allowed sm:w-auto">Add public/cv.pdf</span>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-2 text-sm text-[var(--muted)] sm:flex-row sm:flex-wrap sm:gap-3">
              <span>{profile.email}</span>
              <span className="hidden sm:inline">•</span>
              <span>{profile.location}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {linkedinReady ? (
                <a href={profile.social.linkedin} className="cta-secondary" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              ) : (
                <span className="cta-tertiary">TODO: add LinkedIn URL in data/profile.ts</span>
              )}
              {githubReady ? (
                <a href={profile.social.github} className="cta-secondary" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : (
                <span className="cta-tertiary">TODO: add GitHub URL in data/profile.ts</span>
              )}
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
