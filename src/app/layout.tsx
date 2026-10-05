import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Mona_Sans, Montserrat, Playfair_Display, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SmoothScroll from "../components/layout/SmoothScroll";
import ChatWidget from "../components/ChatWidget";

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
  title: "Strap World | PET & Polyester Strapping Manufacturer",

  description:
    "Strap World Pvt. Ltd. manufactures and supplies PET and polyester strapping for packaging, palletizing, bundling and industrial load-securing applications across India and international markets.",

  keywords: [
    "Strap World",
    "Strap World Pvt Ltd",
    "PET strapping manufacturer",
    "PET strap manufacturer",
    "PET strapping supplier",
    "PET strapping exporter",
    "PET packing strap",
    "PET strapping band",
    "industrial PET strapping",
    "polyester strapping manufacturer",
    "polyester strap manufacturer",
    "polyester strapping supplier",
    "polyester packing strap",
    "packaging strap manufacturer",
    "packaging strap exporter",
    "PET strapping manufacturer India",
    "PET strap exporter India",
    "PET strapping supplier India",
    "industrial strapping solutions",
    "load securing straps",
  ],

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
    title: "Strap World | PET & Polyester Strapping Manufacturer",
    description:
      "PET and polyester strapping manufactured for packaging, palletizing, bundling and industrial load-securing applications. Serving customers across India and international markets.",
    siteName: "Strap World",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strap World | PET & Polyester Strapping Manufacturer",
    description:
      "Manufacturer and supplier of PET and polyester strapping for packaging, palletizing, bundling and industrial load-securing applications.",
  },

  category: "manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${playfair.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} ${monaSans.variable} ${montserrat.variable}`}
      >
        <Header />
        <main>
          <SmoothScroll />

          {children}
          <ChatWidget />
        </main>

        <Footer />
      </body>
    </html>
  );
}
