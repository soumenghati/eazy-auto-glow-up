import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { CarCard } from "@/components/site/CarCard";
import { CARS, BODY_TYPES } from "@/lib/cars";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Used Car Inventory — EazyAuto" },
      { name: "description", content: "Browse our complete inventory of quality used cars across Australia." },
      { property: "og:title", content: "Used Car Inventory — EazyAuto" },
      { property: "og:description", content: "Browse our complete inventory of quality used cars across Australia." },
    ],
  }),
  component: Inventory,
});

function Inventory() {
  const [body, setBody] = useState<string>("All");
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "year-desc">("year-desc");

  const filtered = useMemo(() => {
    let list = body === "All" ? CARS : CARS.filter((c) => c.body === body);
    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.year - a.year;
    });
    return list;
  }, [body, sort]);

  return (
    <Layout>
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-page">
          <p className="text-sm font-medium uppercase tracking-wider text-amber">Inventory</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            All vehicles <span className="text-ink-foreground/40">({CARS.length})</span>
          </h1>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Body</h3>
              <div className="flex flex-col gap-1">
                {["All", ...BODY_TYPES.map((b) => b.name)].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBody(b)}
                    className={`rounded-md px-3 py-2 text-left text-sm transition ${
                      body === b ? "bg-ink text-ink-foreground" : "hover:bg-secondary"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Sort</h3>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="year-desc">Newest first</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <p className="text-muted-foreground">No vehicles match those filters.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((car) => <CarCard key={car.id} car={car} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
