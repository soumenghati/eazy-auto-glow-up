import { Link } from "@tanstack/react-router";
import { Fuel, Gauge, Settings2 } from "lucide-react";
import type { Car } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      to="/inventory"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {car.year} · {car.body}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold leading-tight">
              {car.make} {car.model}
            </h3>
          </div>
          <span className="shrink-0 rounded-md bg-ink px-2.5 py-1 font-display text-sm font-bold text-amber">
            ${car.price.toLocaleString()}
          </span>
        </div>
        <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5" />{car.km.toLocaleString()} km</span>
          <span className="flex items-center gap-1.5"><Fuel className="h-3.5 w-3.5" />{car.fuel}</span>
          <span className="flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5" />{car.transmission}</span>
        </div>
      </div>
    </Link>
  );
}
