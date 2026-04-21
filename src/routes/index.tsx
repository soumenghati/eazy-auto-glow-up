import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CarCard } from "@/components/site/CarCard";
import { CARS, BODY_TYPES } from "@/lib/cars";
import heroCar from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EazyAuto — Quality Used Cars in Australia" },
      { name: "description", content: "Find your next car the easy way. Hand-picked used vehicles, transparent pricing, and finance made simple." },
      { property: "og:title", content: "EazyAuto — Quality Used Cars" },
      { property: "og:description", content: "Hand-picked used vehicles, transparent pricing, finance made simple." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 opacity-90">
          <img
            src={heroCar}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
        </div>

        <div className="container-page relative grid gap-8 py-20 md:py-32 lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber">
              <Sparkles className="h-3.5 w-3.5" /> Australia-wide delivery
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Find your next ride. <span className="text-amber">Easily.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-foreground/70">
              Hundreds of hand-picked used cars, transparent pricing,
              and finance approved in minutes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/inventory"
                className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-semibold text-amber-foreground shadow-amber transition-transform hover:-translate-y-0.5"
              >
                Browse Inventory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/finance"
                className="inline-flex items-center gap-2 rounded-md border border-ink-foreground/20 px-6 py-3 font-semibold text-ink-foreground hover:bg-ink-foreground/10"
              >
                Get Finance Quote
              </Link>
            </div>

            {/* Quick search */}
            <div className="mt-10 grid grid-cols-2 gap-3 rounded-xl border border-ink-foreground/10 bg-ink-foreground/5 p-4 backdrop-blur md:grid-cols-4">
              <select className="rounded-md bg-ink px-3 py-2 text-sm text-ink-foreground outline-none ring-1 ring-ink-foreground/10 focus:ring-amber">
                <option>Any make</option>
                <option>Toyota</option><option>Mazda</option><option>Ford</option>
              </select>
              <select className="rounded-md bg-ink px-3 py-2 text-sm text-ink-foreground outline-none ring-1 ring-ink-foreground/10 focus:ring-amber">
                <option>Any body</option>
                <option>SUV</option><option>Sedan</option><option>Ute</option>
              </select>
              <select className="rounded-md bg-ink px-3 py-2 text-sm text-ink-foreground outline-none ring-1 ring-ink-foreground/10 focus:ring-amber">
                <option>Max price</option>
                <option>$30,000</option><option>$50,000</option><option>$100k+</option>
              </select>
              <Link to="/inventory" className="inline-flex items-center justify-center gap-2 rounded-md bg-amber px-3 py-2 text-sm font-semibold text-amber-foreground">
                <Search className="h-4 w-4" /> Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE BY TYPE */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-amber">Browse</p>
            <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">Shop by body type</h2>
          </div>
          <Link to="/inventory" className="text-sm font-semibold text-foreground hover:text-amber">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
          {BODY_TYPES.map((t) => (
            <Link
              key={t.name}
              to="/inventory"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-amber hover:shadow-card"
            >
              <span className="text-3xl transition-transform group-hover:scale-110">{t.icon}</span>
              <span className="text-sm font-semibold">{t.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-amber">Featured</p>
              <h2 className="mt-1 font-display text-3xl font-bold md:text-4xl">This week's picks</h2>
            </div>
            <Link to="/inventory" className="text-sm font-semibold hover:text-amber">View all inventory →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARS.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Quality Guaranteed", body: "Every vehicle inspected by certified mechanics with full history report." },
            { icon: Wallet, title: "Finance Made Easy", body: "Pre-approval in 60 seconds. Competitive rates from major Australian lenders." },
            { icon: Sparkles, title: "Trade-In Welcome", body: "Get an instant valuation on your current car and offset the price." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink">
                <f.icon className="h-6 w-6 text-amber" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-2xl bg-ink p-10 text-ink-foreground md:p-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Ready to upgrade? <span className="text-amber">Sell your current car.</span>
              </h2>
              <p className="mt-3 max-w-xl text-ink-foreground/70">
                Free, no-obligation valuation in under 2 minutes. Trade in or sell outright.
              </p>
            </div>
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 self-start rounded-md bg-amber px-6 py-3 font-semibold text-amber-foreground shadow-amber transition-transform hover:-translate-y-0.5 md:self-auto"
            >
              Get my valuation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
