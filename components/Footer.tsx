import type { Profile } from "@/data/profile";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="shell flex flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <span>
          {profile.name} · {profile.role}
        </span>
        <span className="mono">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</span>
      </div>
    </footer>
  );
}
