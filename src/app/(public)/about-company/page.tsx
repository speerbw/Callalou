import { Advisors } from "@/components/about/Advisors";
import { KeyPartnerships } from "@/components/about/KeyPartnerships";
import { KeyPrinciples } from "@/components/about/KeyPrinciples";
import { CallalouEssence } from "@/components/callalou/CallalouEssence";
import { CallalouWhoWeServe } from "@/components/callalou/CallalouWhoWeServe";
import { WhyHomeMattersFull } from "@/components/callalou/WhyHomeMattersFull";
import { EmilStory } from "@/components/emil/EmilStory";
import { EmilValues } from "@/components/emil/EmilValues";
import { BurnTheBoatsDetails } from "@/components/philosophy/BurnTheBoatsDetails";
import { BurnTheBoatsIntro } from "@/components/philosophy/BurnTheBoatsIntro";
import { Section } from "@/components/layout/Section";

export default function AboutCompanyPage() {
  return (
    <div className="space-y-16">
      <Section>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            About Company
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Building wealth with purpose, one home at a time.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Callaloo Ventures combines deep cultural roots with forward-thinking investment strategies to create opportunities that uplift communities — and investors.
          </p>
        </div>
      </Section>
      <EmilStory />
      <EmilValues />
      <CallalouEssence />
      <WhyHomeMattersFull />
      <CallalouWhoWeServe />
      <BurnTheBoatsIntro />
      <BurnTheBoatsDetails />
      <KeyPrinciples />
      <Advisors />
      <KeyPartnerships />
    </div>
  );
}

