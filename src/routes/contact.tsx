import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EazyAuto — Get in Touch" },
      { name: "description", content: "Visit our Sydney showroom or get in touch with the EazyAuto team. We're here 7 days a week." },
      { property: "og:title", content: "Contact EazyAuto" },
      { property: "og:description", content: "Visit our Sydney showroom or get in touch — 7 days a week." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-amber">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-6xl">
            Let's talk <span className="text-amber">cars</span>.
          </h1>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Info icon={MapPin} title="Location">Melbourne, Victoria, Australia</Info>
            <Info icon={Phone} title="Phone">0434 366 818</Info>
            <Info icon={Mail} title="Email">autoeazy.au@gmail.com</Info>
            <Info icon={MapPin} title="Business details">ACN: 669 553 717<br />LMCT: 0012637</Info>
            <Info icon={Clock} title="Open hours">
              Mon–Fri: 9am – 6pm<br />Sat: 9am – 5pm<br />Sun: 10am – 4pm
            </Info>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-amber" />
                <h2 className="mt-4 font-display text-2xl font-bold">Message received!</h2>
                <p className="mt-2 text-muted-foreground">We'll reply within 1 business hour.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h2 className="font-display text-2xl font-bold">Send us a message</h2>
                <Field label="Name" />
                <Field label="Email" type="email" />
                <Field label="Phone" type="tel" />
                <label className="block">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    required rows={4}
                    className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                </label>
                <button className="w-full rounded-md bg-ink py-3 font-semibold text-ink-foreground shadow-amber hover:bg-ink/90">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Info({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink">
        <Icon className="h-5 w-5 text-amber" />
      </div>
      <div>
        <p className="font-display font-semibold">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
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
