import { Geist, Geist_Mono, Inter, Mona_Sans, Montserrat, Playfair_Display, Poppins, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SmoothScroll from "../../components/layout/SmoothScroll";
import ChatWidget from "../../components/ChatWidget";
import { Toaster } from "react-hot-toast";
import LiveChatWidget from "@/src/components/chat/LiveChatWidget";
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
          <Toaster position="top-right" reverseOrder={false} />

          {children}
          <LiveChatWidget />
          {/* <ChatWidget /> */}
        </main>

        <Footer />
      </body>
    </html>
  );
}
