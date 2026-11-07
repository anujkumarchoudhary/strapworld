import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Inter, Mona_Sans, Montserrat, Playfair_Display, Poppins, Roboto_Mono } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "PET Strap Manufacturer in India | Strap World",

  description:
    "Strap World is a leading PET strap manufacturer and exporter in India, offering high-strength PET strapping rolls, PP straps and reliable industrial packaging solutions for domestic and international markets.",

  keywords: [
    "Strap World",
    "Strap World Pvt Ltd",
    "PET strap manufacturer in India",
    "PET strapping manufacturer",
    "best PET strap manufacturer in India",
    "PET strap manufacturing company",
    "PET strapping supplier",
    "PET strap exporter from India",
    "PET strapping exporter",
    "PET strapping supplier India",
    "PET strap manufacturer in Gujarat",
    "PET strap supplier in Gujarat",
    "PET strap manufacturer in Rajkot",
    "PET strap supplier in Rajkot",
    "polyester strapping manufacturer",
    "polyester strap manufacturer",
    "packaging strap manufacturer",
    "packaging strap exporter",
    "industrial packaging solutions",
    "industrial strapping solutions",
    "load securing straps",
    "global PET strap supplier",
  ],
  icons: {
    icon: "/icon.svg",
  },
  authors: [{ name: "Strap World Pvt. Ltd." }],
  creator: "Strap World Pvt. Ltd.",
  publisher: "Strap World Pvt. Ltd.",



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
    title: "PET Strap Manufacturer & Exporter in India | Strap World",
    description:
      "Strap World is an Indian PET strap manufacturer and exporter offering high-quality PET strapping, polyester straps, PP straps and industrial packaging solutions for businesses worldwide.",
    siteName: "Strap World",
    type: "website",
    locale: "en_IN",
    url: "https://www.strapworld.in",
  },

  twitter: {
    card: "summary_large_image",
    title: "PET Strap Manufacturer & Exporter in India | Strap World",
    description:
      "Strap World is an Indian PET strap manufacturer and exporter offering high-quality PET strapping, polyester straps, PP straps and industrial packaging solutions for businesses worldwide.",
  },

  category: "manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${playfair.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} ${monaSans.variable} ${montserrat.variable}`}
      >
        {children}

        {/* Google Analytics - Strap World */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5RCFJ8WWW3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5RCFJ8WWW3');
          `}
        </Script>
      </body>
    </html>
  );
}