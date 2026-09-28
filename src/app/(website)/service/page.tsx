import { staticData } from '@/src/utills/Data'
import CommonBanner from '@/src/components/CommonBanner'
import FinalCTA from '@/src/components/FinalCTA'
import WhySoftQivo from '@/src/components/WhySoftQivo'
import ProcessSection2 from '@/src/components/ProcessSection2'
import OurServices from '@/src/components/OurServices'

export const metadata = {
  title: "Digital Solutions & Software Development Services | SoftQivo",
  description:
    "Explore SoftQivo’s digital services, including web development, software development, mobile apps, UI/UX design, API development, cloud, and DevOps solutions.",
  keywords: [
    "software development services",
    "web development services",
    "mobile app development",
    "UI UX design services",
    "API development",
    "cloud and DevOps services",
    "custom software development",
    "digital solutions",
    "SoftQivo",
  ],
  alternates: {
    canonical: "https://www.softqivo.com/services",
  },
  openGraph: {
    title: "Digital Solutions & Software Development Services | SoftQivo",
    description:
      "From modern websites and mobile applications to custom software, APIs, and cloud solutions, SoftQivo builds scalable digital products for growing businesses.",
    url: "https://www.softqivo.com/services",
    siteName: "SoftQivo",
    type: "website",
    images: [
      {
        url: "https://www.softqivo.com/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "SoftQivo Digital Solutions and Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions & Software Development Services | SoftQivo",
    description:
      "Build scalable digital products with SoftQivo — web, software, mobile, UI/UX, API, cloud, and DevOps services.",
    images: ["https://www.softqivo.com/images/og/services.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
const page = () => {
  const { services } =
    staticData?.home;
  return (
    <div>
      {/* Banner */}
      <CommonBanner
        breakIndex={6}
        label="OUR SERVICES"
        title=" Digital solutions built "
        highlight="for real growth."
        description="From websites and web applications to custom software, mobile apps, and scalable backend systems, we build digital products designed to perform and grow with your business."
        breadcrumb="Services"
      />

      {/* Services */}
      <OurServices data={services} />

      {/* Why SoftQivo */}
      <WhySoftQivo />

      {/* Process */}
      <ProcessSection2/>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  )
}

export default page