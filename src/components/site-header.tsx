import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { family } from "@/data/family";

const links = [
  { to: "/kennis", label: "Kennis" },
  { to: "/begrippen", label: "Begrippen" },
  { to: "/lab", label: "Lab" },
  { to: "/netwerk", label: "Netwerk" },
  { to: "/over", label: "Over" },
] as const;

function Mark() {
  return (
    <svg viewBox="0 0 36 36" className="size-9 shrink-0" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="var(--color-navy)" />
      <path
        d="M5 23c3-8 6-8 9 0s6 8 9 0 6-8 8 0"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-snow/95 backdrop-blur">
      <div className="bg-navy text-snow">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2 text-sm">
          <span className="shrink-0 text-mist">Familie</span>
          {family.map((site) =>
            site.here ? (
              <span key={site.name} className="shrink-0 font-semibold text-accent">
                {site.name}
              </span>
            ) : (
              <a
                key={site.name}
                href={site.href}
                className="shrink-0 font-semibold text-snow underline-offset-4 hover:text-accent hover:underline"
              >
                {site.name}
              </a>
            ),
          )}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex min-h-11 items-center gap-3" onClick={() => setOpen(false)}>
          <Mark />
          <span className="font-display text-xl font-semibold tracking-tight">
            Akoestiek<span className="text-accent-ink">Lab</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
          {links.map((link) => {
            const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold ${
                  active ? "bg-mist text-navy" : "text-navy hover:bg-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav id="mobiel-menu" className="border-t border-line px-4 py-3 lg:hidden" aria-label="Mobiel menu">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex min-h-11 items-center rounded-2xl px-3 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
