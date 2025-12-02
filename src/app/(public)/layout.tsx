import { CincinnatiSkylineBanner } from "@/components/layout/CincinnatiSkylineBanner";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />
      <CincinnatiSkylineBanner />
      <main className="mx-auto max-w-6xl px-6 py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

