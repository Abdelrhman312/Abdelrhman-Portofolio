import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL ? {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    alternates: { canonical: "/" },
  } : {}),
  title: "Abdelrahman Moataz | Commercial Operations & Electrical Supplies",
  description: "Explore the professional experience, projects, and commercial expertise of Abdelrahman Moataz in electrical supplies, sales management, procurement, and business operations.",
  openGraph: { title: "Abdelrahman Moataz | Commercial Operations", description: "Commercial operations, electrical supplies, and business development.", type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.positioning,
    address: { "@type": "PostalAddress", addressCountry: "EG" },
    knowsAbout: ["Commercial operations", "Electrical supplies", "Sales management", "Procurement", "Business development"],
    ...(profile.photo ? { image: profile.photo } : {}),
    ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { url: process.env.NEXT_PUBLIC_SITE_URL } : {}),
  };
  return <html lang="en" dir="ltr"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /></body></html>;
}
