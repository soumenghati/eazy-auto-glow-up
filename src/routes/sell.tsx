import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell Your Car — EazyAuto" },
      { name: "description", content: "Get an instant valuation and sell or trade in your car with EazyAuto. Free, no obligation." },
      { property: "og:title", content: "Sell Your Car — EazyAuto" },
      { property: "og:description", content: "Free instant valuation. Trade in or sell outright in minutes." },
    ],
  }),
  component: Sell,
});

function Sell() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-amber">Sell or Trade</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-6xl">
            Get an offer in <span className="text-amber">60 seconds</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-foreground/70">
            Tell us about your car. We'll send you a free, no-obligation valuation today.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-amber" />
              <h2 className="mt-4 font-display text-2xl font-bold">Thanks — we'll be in touch!</h2>
              <p className="mt-2 text-muted-foreground">
                A valuations specialist will contact you within 1 business hour.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl font-bold">Vehicle details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Make" placeholder="e.g. Toyota" />
                <Field label="Model" placeholder="e.g. Corolla" />
                <Field label="Year" placeholder="2020" type="number" />
                <Field label="Kilometres" placeholder="45,000" type="number" />
              </div>

              <h2 className="pt-4 font-display text-2xl font-bold">Your details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" placeholder="Jane Smith" />
                <Field label="Phone" placeholder="0400 000 000" type="tel" />
              </div>
              <Field label="Email" placeholder="you@example.com" type="email" />

              <button
                type="submit"
                className="w-full rounded-md bg-ink py-3 font-semibold text-ink-foreground shadow-amber transition-transform hover:-translate-y-0.5"
              >
                Get my valuation
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        {...rest}
        required
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
      />
    </label>
  );
}
