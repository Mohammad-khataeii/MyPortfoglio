import type { Profile } from "@/data/profile";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="shell flex flex-col gap-3 text-sm leading-6 text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <span className="max-w-2xl">
          {profile.name} · {profile.role}
        </span>
        <span className="mono max-w-full break-words">
          Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </span>
      </div>
    </footer>
  );
}
