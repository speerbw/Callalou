import { Section } from "@/components/layout/Section";

export function HomeCallalouOverview() {
  return (
    <Section>
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Callalou Ventures
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Your investment helps give someone else a place to belong — while building wealth for your future.
        </h2>
        <div className="max-w-3xl space-y-4 text-slate-600">
          <p>
            Callalou Ventures serves as the credible, structured, investable entity — the umbrella brand that signals Caribbean roots without cliché. It evokes nourishment, home, warmth, and cultural identity.
          </p>
          <p>
            <strong className="text-slate-900">Core Themes:</strong> Home • Dignity • Stability • Growth • Community • Forward Momentum
          </p>
          <p>
            <strong className="text-slate-900">Brand Personality:</strong> Warm, intentional, principled, ambitious, rooted in heritage
          </p>
        </div>
      </div>
    </Section>
  );
}

