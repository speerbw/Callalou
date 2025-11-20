import { Section } from "@/components/layout/Section";

export function FeaturedVideo() {
  return (
    <Section>
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Featured Video
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Why Home Matters: The Philosophy Behind Callalou Ventures
        </h2>
        <p className="text-slate-600">
          Emil shares insights on how a home can be the turning point in someone&apos;s life — where stability begins and opportunity grows. Learn about the journey from Antigua to Cincinnati and the purpose-driven approach to real estate investing.
        </p>
      </div>
      <div className="relative mt-6 aspect-video overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
        <div className="absolute inset-0 grid place-items-center text-center text-white">
          <p className="text-lg font-semibold">Video placeholder</p>
          <p className="text-sm text-white/70">
            Embed YouTube video here. Content should reflect the &quot;Burn the Boats&quot; philosophy and Emil&apos;s immigrant story.
          </p>
        </div>
      </div>
    </Section>
  );
}

