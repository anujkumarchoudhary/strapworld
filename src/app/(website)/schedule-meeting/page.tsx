
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Schedule a Meeting | SoftQivo",
  description:
    "Book a meeting with SoftQivo to discuss your software, web development, mobile app, UI/UX, or digital product requirements.",
  keywords: [
    "book a meeting SoftQivo",
    "software development consultation",
    "web development consultation",
    "digital product consultation",
  ],
  alternates: {
    canonical: "https://www.softqivo.com/schedule-meeting",
  },
  openGraph: {
    title: "Schedule a Meeting | SoftQivo",
    description:
      "Book a meeting with SoftQivo to discuss your next digital product or software project.",
    url: "https://www.softqivo.com/schedule-meeting",
    siteName: "SoftQivo",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ScheduleMeetingPage() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/softqivo"
        style={{
          minWidth: "320px",
          width: "100%",
          height: "800px",
        }}
      />
    </>
  );
}
