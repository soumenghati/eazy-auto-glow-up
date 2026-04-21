import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Calculator, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Car Finance — EazyAuto" },
      { name: "description", content: "Get pre-approved car finance in 60 seconds. Competitive rates from leading Australian lenders." },
      { property: "og:title", content: "Car Finance — EazyAuto" },
      { property: "og:description", content: "Pre-approved car finance in 60 seconds with competitive rates." },
    ],
  }),
  component: Finance,
});

function Finance() {
  const [amount, setAmount] = useState(35000);
  const [years, setYears] = useState(5);
  const rate = 0.0699;
  const monthly =
    (amount * (rate / 12)) / (1 - Math.pow(1 + rate / 12, -years * 12));

  return (
    <Layout>
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-amber">Finance</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-6xl">
            Drive away from <span className="text-amber">$0 deposit</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-foreground/70">
            Pre-approval in 60 seconds. Competitive rates from leading Australian lenders, with no impact on your credit score.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                <Calculator className="h-5 w-5 text-amber" />
              </div>
              <h2 className="font-display text-2xl font-bold">Repayment calculator</h2>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex justify-between text-sm">
                  <label className="font-medium">Loan amount</label>
                  <span className="font-display font-semibold">${amount.toLocaleString()}</span>
                </div>
                <input
                  type="range" min="5000" max="150000" step="1000"
                  value={amount} onChange={(e) => setAmount(+e.target.value)}
                  className="mt-2 w-full accent-amber"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <label className="font-medium">Term</label>
                  <span className="font-display font-semibold">{years} years</span>
                </div>
                <input
                  type="range" min="1" max="7" step="1"
                  value={years} onChange={(e) => setYears(+e.target.value)}
                  className="mt-2 w-full accent-amber"
                />
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-ink p-6 text-ink-foreground">
              <p className="text-sm uppercase tracking-wider text-amber">Estimated weekly</p>
              <p className="mt-1 font-display text-5xl font-bold">
                ${(monthly / 4.33).toFixed(0)}<span className="text-xl text-ink-foreground/50">/wk</span>
              </p>
              <p className="mt-2 text-xs text-ink-foreground/50">
                Indicative only. Based on {(rate * 100).toFixed(2)}% comparison rate. Subject to lender approval.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Why finance with EazyAuto?</h2>
            <ul className="mt-6 space-y-4">
              {[
                "60-second pre-approval with no credit score impact",
                "Compare rates from 25+ Australian lenders",
                "Flexible terms from 1 to 7 years",
                "Fixed interest rates — no surprises",
                "ABN holders & first-time buyers welcome",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 font-semibold text-ink-foreground shadow-amber hover:bg-ink/90">
              Start application →
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
