import FinalCTA from "@/src/components/FinalCTA";
import Blog from "@/src/components/Blog";
import { staticData } from "@/src/utills/Data";
import TeamSection from "@/src/components/TeamSection";
import TechnologySection from "@/src/components/TechnologySection";
import OurStory from "@/src/components/OurStory";
import AboutBanner from "@/src/components/AboutBanner";
import OurProcess from "@/src/components/ProcessSection";

export const metadata = {
  title: "About SoftQivo | Digital Solutions & Software Development",
  description:
    "Learn about SoftQivo, a digital technology company building scalable websites, web applications, custom software, and digital solutions for modern businesses.",

  keywords: [
    "SoftQivo",
    "about SoftQivo",
    "digital technology company",
    "software development company",
    "web development company",
    "custom software development",
    "digital solutions",
    "web application development",
  ],

  alternates: {
    canonical: "https://www.softqivo.com/about",
  },

  openGraph: {
    title: "About SoftQivo | Digital Solutions & Software Development",
    description:
      "Discover SoftQivo's approach to building scalable websites, web applications, custom software, and digital solutions for modern businesses.",
    url: "https://www.softqivo.com/about",
    siteName: "SoftQivo",
    type: "website",
    images: [
      {
        url: "https://www.softqivo.com/images/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "About SoftQivo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About SoftQivo | Digital Solutions & Software Development",
    description:
      "Discover SoftQivo's approach to building scalable digital products and software solutions for modern businesses.",
    images: ["https://www.softqivo.com/images/og/about.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  const {  process, team, technologes } =
    staticData?.home;
      const { banner, blogs } =
    staticData?.about;
  return (
    <div>
      <AboutBanner data={banner}/>
      <OurStory />
      <OurProcess data={process} />
      <TeamSection data={team} />
      <TechnologySection data={technologes} />
      <Blog data={blogs} />
      <FinalCTA />
    </div>
  );
};

export default Page;
