import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";

export function HomeHero() {
  return (
    <Section className="gap-12 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Invest in a future where everyone has a place to belong.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            At Callalou Ventures, we believe real estate is more than buildings — it&apos;s stability, dignity, and the foundation of a good life. Your investment helps create homes where families can plant roots, grow, and thrive.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              Start a conversation
            </Link>
            <Link
              href="/callalou"
              className="rounded-full border border-slate-300 px-6 py-3 text-slate-900 transition hover:border-slate-900"
            >
              Explore Callalou Ventures
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/brand/Cincinnati-skyline.jpg"
            alt="Callalou Ventures property - a welcoming home with cityscape view"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </Section>
  );
}

