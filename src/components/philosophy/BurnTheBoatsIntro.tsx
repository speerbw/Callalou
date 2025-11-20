import { Section } from "@/components/layout/Section";

export function BurnTheBoatsIntro() {
  return (
    <Section>
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Burn the Boats
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Burn the Boats. Build the Future.
        </h1>
        <div className="max-w-3xl space-y-4 text-lg text-slate-600">
          <p>
            There comes a point when the only way to move forward is to remove the option of retreat. &quot;Burn the Boats&quot; is my personal philosophy — a commitment to bold action, decisive leadership, and full belief in the path ahead.
          </p>
          <p>
            I invest this way. I build this business this way. And I help others invest with the same confidence.
          </p>
          <p className="font-medium text-slate-900">
            Not by taking reckless risks — but by standing firmly in preparation, discipline, and purpose.
          </p>
        </div>
      </div>
    </Section>
  );
}

