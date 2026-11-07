import type { Metadata } from "next";

const siteUrl = "https://mlhb.next-itsolutions.com";

export const metadata: Metadata = {
  title: "Telecommunications Engineer, Cloud & DevOps",
  description:
    "Explore the portfolio of Herve Boris Mbou Lontsi, a Telecommunications Engineer based in Douala, Cameroon. Discover his Cloud, DevOps, Full Stack development projects, technical skills and professional experience.",
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      fr: siteUrl,
      en: `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/en`,
    siteName: "Herve Boris Mbou Lontsi",
    title: "Herve Boris Mbou Lontsi | Telecommunications Engineer",
    description:
      "Telecommunications Engineer specializing in Cloud, DevOps and Full Stack development.",
    images: ["/images/portrait.webp"],
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
