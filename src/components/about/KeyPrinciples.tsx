import { Section } from "@/components/layout/Section";

const principles = [
  {
    title: "Purpose-Driven Investment",
    description: "We invest in properties and communities that deserve dignity, creating homes that are clean, safe, and welcoming for all tenants.",
  },
  {
    title: "Radical Commitment",
    description: "Burn the Boats philosophy: bold action, decisive leadership, and full belief in the path ahead — with preparation, discipline, and purpose.",
  },
  {
    title: "Community First",
    description: "We measure success by the rooms we open, not the rooms we keep people out of. Belonging over bureaucracy.",
  },
  {
    title: "Heritage Rooted",
    description: "Combining where we come from with where we're going — investing with purpose and creating wealth with integrity.",
  },
];

export function KeyPrinciples() {
  return (
    <Section>
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Key Principles
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          The values that guide every decision.
        </h2>
      </div>
      <div className="grid gap-6 pt-6 md:grid-cols-2">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

