import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/finance", label: "Finance" },
  { to: "/sell", label: "Sell Your Car" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-ink">
            <span className="font-display text-lg font-bold text-amber">E</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            eazy<span className="text-amber">auto</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0434366818"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground shadow-amber transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 text-amber" />
            0434 366 818
          </a>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:0434366818"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground"
            >
              <Phone className="h-4 w-4 text-amber" />
              Call 0434 366 818
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
