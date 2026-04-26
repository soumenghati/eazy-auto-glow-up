import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber">
              <span className="font-display text-lg font-bold text-ink">E</span>
            </div>
            <span className="font-display text-xl font-bold">
              eazy<span className="text-amber">auto</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
            Australia's easiest way to buy quality used cars. Hand-picked
            vehicles, transparent pricing, and finance made simple.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber">Explore</h4>
          <ul className="space-y-2 text-sm text-ink-foreground/70">
            <li><Link to="/inventory" className="hover:text-amber">Inventory</Link></li>
            <li><Link to="/finance" className="hover:text-amber">Finance</Link></li>
            <li><Link to="/sell" className="hover:text-amber">Sell Your Car</Link></li>
            <li><Link to="/about" className="hover:text-amber">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />Melbourne, Victoria, Australia</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber" />0434 366 818</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber" />autoeazy.au@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EazyAuto Pty Ltd. ACN 669 553 717.</p>
          <p>Licensed Motor Vehicle Dealer · LMCT 0012637</p>
        </div>
      </div>
    </footer>
  );
}
