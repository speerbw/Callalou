import Link from "next/link";
import { Section } from "@/components/layout/Section";

export function HomeBurnTheBoatsTeaser() {
  return (
    <Section className="rounded-3xl border border-slate-200 bg-white py-16 shadow-sm">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Burn the Boats
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Burn the Boats. Build the Future.
          </h2>
          <p className="text-lg text-slate-600">
            We invest with conviction, clarity, and compassion — transforming overlooked neighborhoods into places people are proud to call home.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl bg-slate-50 p-6">
          <p className="text-slate-600">
            There comes a point when the only way to move forward is to remove the option of retreat. &quot;Burn the Boats&quot; is my personal philosophy — a commitment to bold action, decisive leadership, and full belief in the path ahead.
          </p>
          <p className="text-slate-600">
            I invest this way. I build this business this way. And I help others invest with the same confidence.
          </p>
          <p className="font-medium text-slate-900">
            Not by taking reckless risks — but by standing firmly in preparation, discipline, and purpose.
          </p>
          <Link
            href="/philosophy"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            Explore the philosophy →
          </Link>
        </div>
      </div>
    </Section>
  );
}

