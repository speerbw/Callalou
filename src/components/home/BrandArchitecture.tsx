import { Section } from "@/components/layout/Section";

export function BrandArchitecture() {
  return (
    <Section background="muted" className="rounded-3xl shadow-sm">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Brand Architecture
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Two brands, one mission: building wealth with purpose.
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Callalou Ventures
            </h3>
            <p className="text-sm text-slate-600">
              The parent brand — the credible, structured, investable entity. This is where investors place their capital and trust. Callalou Ventures signals Caribbean roots without cliché, evoking nourishment, home, warmth, and cultural identity.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Promise
              </p>
              <p className="text-sm italic text-slate-700">
                &quot;Your investment helps give someone else a place to belong — while building wealth for your future.&quot;
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Emil Brown
            </h3>
            <p className="text-sm text-slate-600">
              The personal brand — where charisma, relatability, and human connection live. Emil builds trust, creates emotional connections, and shares expertise in a way that feels human, not corporate. He serves as the face people follow, learn from, and invest alongside.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Purpose
              </p>
              <p className="text-sm text-slate-600">
                To build trust, create emotional connection, and serve as the guide for value-driven investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

