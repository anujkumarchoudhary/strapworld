import Heading from "@/src/components/common/Heading";
import CommonBanner from "@/src/components/CommonBanner";
import ContactForm from "@/src/components/form/ContactForm";
import MaxWidth from "@/src/components/layout/MaxWidth";
import { staticData } from "@/src/utills/Data";
import Image from "next/image";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SoftQivo | Discuss Your Digital Project",

  description:
    "Get in touch with SoftQivo to discuss your website, software, mobile app, UI/UX, backend, or cloud development project.",

  alternates: {
    canonical: "https://www.softqivo.com/contact",
  },

  openGraph: {
    title: "Contact SoftQivo | Discuss Your Digital Project",

    description:
      "Talk to SoftQivo about your next website, software, mobile application, UI/UX, backend, or cloud development project.",

    url: "https://www.softqivo.com/contact",

    siteName: "SoftQivo",

    type: "website",

    images: [
      {
        url: "https://www.softqivo.com/images/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SoftQivo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact SoftQivo | Discuss Your Digital Project",

    description:
      "Talk to SoftQivo about your next website, software, mobile application, UI/UX, backend, or cloud development project.",

    images: ["https://www.softqivo.com/images/og/contact.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  const { label, headingParts, description, data } = staticData?.contact;
  return (
 <div>
   <CommonBanner title={"Contact Us"}/>
     <MaxWidth className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[4rem]">
      <div className="my-auto">
        <Heading accentColor="#001845" headingParts={headingParts} label={label} description={description} />
        <div className="pt-[2rem] space-y-8 w-full lg:w-[60%]">
          {data?.map((item, idx: number) => {
            return (
              <div key={idx} className="flex gap-4 ">
                {item?.icon}
                <span className="space-y-2">
                  <h5>{item?.title}</h5>
                  <p>{item?.description}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <ContactForm />
    </MaxWidth>
 </div>
  );
};

export default Page;
