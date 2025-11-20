import Image from "next/image";
import { Section } from "@/components/layout/Section";

export function HomeEmilIntro() {
  return (
    <Section background="muted" className="rounded-3xl shadow-sm">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            From Antigua to Opportunity
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            From Antigua to Cincinnati: building wealth with purpose, one home at a time.
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              I grew up on a small island called Antigua — a place where everyone knew your name, and where sharing, helping, and hospitality were a way of life. The warmth of that culture shaped me. It taught me that people flourish when they feel rooted, welcomed, and supported.
            </p>
            <p>
              Years later, when I entered real estate in Cincinnati, I saw the same truth everywhere: a home can be the turning point in someone&apos;s life. It&apos;s where stability begins and opportunity grows.
            </p>
            <p>
              Callalou Ventures is my way of combining where I come from with where I&apos;m going — investing with purpose and creating wealth with integrity.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/brand/Ant-Cin3.jpg"
            alt="Urban Cincinnati scene with brick buildings - representing the journey from Antigua"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </Section>
  );
}

