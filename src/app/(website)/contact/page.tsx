import Heading from "@/src/components/common/Heading";
import CommonBanner from "@/src/components/CommonBanner";
import ContactForm from "@/src/components/form/ContactForm";
import MaxWidth from "@/src/components/layout/MaxWidth";
import type { Metadata } from "next";
import { FaHeadphonesSimple, FaMapLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact Strap World | PET Strap Enquiries & Solutions",
  description:
    "Contact Strap World for PET strap and PET strapping enquiries, product specifications, custom requirements, pricing and domestic or international supply.",
  keywords: [
    "contact PET strap manufacturer",
    "PET strap enquiry",
    "PET strapping enquiry",
    "PET strap manufacturer India",
    "PET strapping supplier India",
    "PET strap export enquiry",
    "PET packing strap enquiry",
  ],
  alternates: {
    canonical: "https://strapworld.com/contact-us",
  },
  openGraph: {
    title: "Contact Strap World | PET Strap Enquiries & Solutions",
    description:
      "Get in touch with Strap World for PET strap products, specifications, custom requirements, pricing and export enquiries.",
    url: "https://strapworld.com/contact-us",
    siteName: "Strap World",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Strap World | PET Strap Enquiries & Solutions",
    description:
      "Get in touch with Strap World for PET strap products, specifications, custom requirements, pricing and export enquiries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contactDetails = [
  {
    icon: <FaMapLocationDot size={32} />,
    title: "Head Office",
    description:
      `Gokul Industries Estate - A, 
Plot No 16 & 17, S no 261/P1, 
Morbi Highway, Nr Khodiyar Temple, 
Kagdadi town, Rajkot - 360003.`,
  },
  {
    icon: <IoIosMailOpen size={32} />,
    title: "Email Us",
    description: "sales@strapworld.com",
  },
  {
    icon: <FaHeadphonesSimple size={32} />,
    title: "Working Hours",
    description: "Monday - Friday, 9:00 AM - 6:00 PM",
  },
];

const Page = () => {
  return (
    <div>
      {/* ==================== BANNER ==================== */}
      <CommonBanner headingParts={[{ text: "Contact Us", color: "#FFFFFF" }]} />

      {/* ==================== CONTACT ==================== */}
      <section className="py-10 md:py-12 lg:py-20">
        <MaxWidth>
          <div className="grid grid-cols-1 lg:grid-cols-[45%_45%] justify-between gap-8 lg:lg:gap-16">
            {/* Left - Contact Details */}
            <div className="my-auto">
              <Heading isAccentLine={true} labelColor="2E9B4F" accentColor="#2E9B4F" label="LET'S CONNECT" headingParts={[{ text: " Let’s Discuss " }]} description={`Have a product requirement, specification or packaging
                challenge? Tell us what you need, and our team will get back
                to you with the right PET strapping solution.`} />

              {/* Details */}
              <div className="mt-10 space-y-7">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex space-y-10 gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F7F5] text-[#063F3D]">
                      {item.icon}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#001845]">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-md text- leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </MaxWidth>
      </section>

      {/* ==================== MAP ==================== */}
      <section className="">
        {/* Google Map */}
        <div className="h-88 lg:h-125">
          <iframe
            src="https://www.google.com/maps?q=Nalanda+Industries,+Gokul+Industries+Estate+A,+Plot+No+16+17,+S+No+261%2FP1,+Morbi+Highway,+Near+Khodiyar+Temple,+Kagdadi,+Rajkot,+Gujarat+360003,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nalanda Industries Location - Rajkot, Gujarat"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;