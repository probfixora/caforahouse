import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business, branding } from "@/config/business";

export const metadata: Metadata = {
  title: `${business.name} | ${business.tagline} ${business.subTagline}`,
  description: `${business.description} Located ${business.address.landmark}, ${business.address.city}. ${business.rating}⭐ rated by ${business.reviewCount}+ happy guests.`,
  keywords: [
    "Cafora House",
    "cafe Lucknow",
    "coffee Lucknow",
    "Chinese restaurant Lucknow",
    "Continental cafe Lucknow",
    "cafe near Amity University",
    "best cafe Gomti Nagar",
    "Malhour cafe",
    "Adarsh Market restaurant",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    siteName: business.name,
    images: [{ url: "/images/hero.jpg", width: 1400, height: 788, alt: `${business.name} interior` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": branding.colors.primary,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: branding.colors.primary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: business.name,
              description: business.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: business.address.line1,
                addressLocality: business.address.city,
                addressRegion: business.address.state,
                postalCode: business.address.pincode,
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: business.rating,
                reviewCount: business.reviewCount,
                bestRating: 5,
              },
              servesCuisine: business.cuisines,
              url: business.contact.googleMaps,
              sameAs: [
                business.contact.instagram,
                business.contact.googleMaps,
              ].filter(Boolean),
              openingHoursSpecification: business.hours
                .filter((h) => !h.closed)
                .map((h) => ({
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: `https://schema.org/${h.day}`,
                  opens: h.open,
                  closes: h.close,
                })),
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
