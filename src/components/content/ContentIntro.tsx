import { Section } from "@/components/layout/Section";

export function ContentIntro() {
  return (
    <Section>
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Content Hub
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Learn from the journey: From Antigua to Cincinnati, building wealth with purpose.
        </h1>
        <div className="max-w-3xl space-y-4 text-slate-600">
          <p>
            This content hub reflects the &quot;Burn the Boats&quot; philosophy — a commitment to bold action, decisive leadership, and full belief in the path ahead. Here you&apos;ll find YouTube videos, articles, market insights, and educational content that share Emil&apos;s immigrant story and community-focused approach to real estate investing.
          </p>
          <p>
            Our content emphasizes the purpose-driven, heritage-rooted alternative to traditional real estate investors — combining where we come from with where we&apos;re going, investing with purpose and creating wealth with integrity.
          </p>
        </div>
      </div>
    </Section>
  );
}

