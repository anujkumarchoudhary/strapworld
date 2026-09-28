import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

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


export const metadata: Metadata = {
  title: "Strap World",

  description:
    "Strap World",

  keywords: [
    "SoftQivo",
    "web development company",
    "web development services",
    "website development",
    "custom web development",
    "website design",
    "responsive web development",
    "business website",
    "SEO-friendly websites",
    "modern website development",
    "professional web development",
  ],

  authors: [{ name: "SoftQivo" }],
  creator: "SoftQivo",
  publisher: "SoftQivo",

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
    title: "SoftQivo | Modern Web Development Solutions",
    description:
      "Create a powerful digital presence with SoftQivo. We develop modern, responsive, fast, user-friendly, and SEO-friendly websites for businesses and brands.",
    siteName: "SoftQivo",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "SoftQivo | Modern Web Development Solutions",
    description:
      "Professional web development and website design solutions built for performance, usability, and business growth.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${playfair.variable} ${poppins.variable} ${inter.variable}`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
