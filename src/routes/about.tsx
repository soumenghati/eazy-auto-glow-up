import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EazyAuto — Australia's Easiest Car Dealer" },
      { name: "description", content: "EazyAuto is on a mission to make buying a used car simple, transparent and fair for every Australian." },
      { property: "og:title", content: "About EazyAuto" },
      { property: "og:description", content: "On a mission to make buying a used car simple, transparent and fair." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-amber">About</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-6xl">
            Buying a car shouldn't feel <span className="text-amber">like a battle</span>.
          </h1>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              EazyAuto was founded in Sydney in 2020 with a simple idea: make
              buying a quality used car as easy as ordering takeaway. No haggling.
              No high-pressure sales. No fine print.
            </p>
            <p>
              Every vehicle in our inventory is hand-picked, mechanically
              inspected and sold at one transparent drive-away price. Our finance
              team works with 25+ Australian lenders to get you the best rate,
              and we deliver Australia-wide.
            </p>
            <p>
              Today, we've helped over 5,000 Australians find their perfect car —
              and we're just getting started.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            <Stat n="5,000+" label="Happy customers" />
            <Stat n="4.9★" label="Google rating" />
            <Stat n="25+" label="Lender partners" />
            <Stat n="100%" label="Inspected vehicles" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
      <p className="font-display text-3xl font-bold text-foreground">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
