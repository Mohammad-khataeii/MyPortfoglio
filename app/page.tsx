import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Volunteering } from "@/components/Volunteering";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(83,157,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(112,83,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,224,255,0.1),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects profile={profile} />
      <Experience profile={profile} />
      <Skills profile={profile} />
      <Education profile={profile} />
      <Languages profile={profile} />
      <Volunteering profile={profile} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}
