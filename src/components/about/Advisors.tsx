import { Section } from "@/components/layout/Section";

const advisors = [
  {
    name: "Advisor Name",
    role: "Advisor Role",
    description: "Brief description of advisor's expertise and contribution.",
  },
  {
    name: "Advisor Name",
    role: "Advisor Role",
    description: "Brief description of advisor's expertise and contribution.",
  },
  {
    name: "Advisor Name",
    role: "Advisor Role",
    description: "Brief description of advisor's expertise and contribution.",
  },
];

export function Advisors() {
  return (
    <Section background="muted" className="rounded-3xl shadow-inner">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Advisors
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Trusted guidance from industry leaders.
        </h2>
        <p className="text-slate-600">
          Our advisory board brings decades of combined experience in real estate, finance, and community development.
        </p>
      </div>
      <div className="grid gap-6 pt-6 md:grid-cols-3">
        {advisors.map((advisor, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {advisor.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {advisor.role}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              {advisor.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

