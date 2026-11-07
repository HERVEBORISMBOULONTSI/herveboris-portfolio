import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mlhb.next-itsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hervé Boris Mbou Lontsi | Ingénieur Télécoms, Cloud & DevOps",
    template: "%s | Hervé Boris Mbou Lontsi",
  },

  description:
    "Découvrez le portfolio de Hervé Boris Mbou Lontsi, ingénieur en Réseaux et Télécommunications à Douala, Cameroun. Cloud, DevOps, développement Full Stack, projets et conseil digital.",

  applicationName: "Portfolio Hervé Boris",

  authors: [
    {
      name: "Hervé Boris Mbou Lontsi",
      url: siteUrl,
    },
  ],

  creator: "Hervé Boris Mbou Lontsi",

  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: siteUrl,
    siteName: "Hervé Boris Mbou Lontsi",
    title: "Hervé Boris Mbou Lontsi | Ingénieur Télécoms, Cloud & DevOps",
    description:
      "Ingénieur en Réseaux et Télécommunications, spécialisé en Cloud, DevOps et développement Full Stack. Découvrez mes projets, compétences et réalisations.",
    images: [
      {
        url: "/images/portrait.webp",
        width: 1200,
        height: 1200,
        alt: "Hervé Boris Mbou Lontsi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hervé Boris Mbou Lontsi | Cloud & DevOps",
    description:
      "Ingénieur Télécoms, Cloud & DevOps et développeur Full Stack au Cameroun.",
    images: ["/images/portrait.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
