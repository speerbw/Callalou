import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://callalouventures.com"),
  title: {
    default: "Callaloo Ventures",
    template: "%s | Callaloo Ventures",
  },
  description: "Invest in a future where everyone has a place to belong.",
  openGraph: {
    title: "Callaloo Ventures",
    description: "Invest in a future where everyone has a place to belong.",
    url: "https://callalooventures.com",
    siteName: "Callaloo Ventures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
