// "use client";

// import Heading from "./common/Heading";
// import MaxWidth from "./layout/MaxWidth";
// import Icon from "../utills/iconMap ";
// import Image from "next/image";
// import SaveAndCancel from "./common/SaveAndCancel";
// import { useResponsive } from "../hooks/useResponsive";
// import { useState } from "react";
// import GetEnquiryForm from "./form/GetEnquiryForm";
// import { useStaggerReveal } from "../hooks/useStaggerReveal";

// type Service = {
//     title: string;
//     description: string;
//     href: string;
//     icon: React.ElementType;
// };

// const Applications = ({ data }: any) => {
//     const [open, setOpen] = useState(false);
//     const { headingParts, label, description } = data || {};
//     const { isDesktop } = useResponsive();
//     const {
//         ref: productsRef,
//         visibleItems,
//     } = useStaggerReveal(data?.list?.length || 0, {
//         delay: 180,
//         threshold: 0.25,
//     });


//     return (
//         <div ref={productsRef} className="relative bg-[#FFFFFF]">
//             <MaxWidth className=" overflow-hidden space-y-12 py-10 sm:py-12 lg:py-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-[45%_25%] justify-between">
//                     <Heading
//                         as="h2"
//                         isDart={true}
//                         isAccentLine={true}
//                         label={label}
//                         isCenter={isDesktop ? false : true}
//                         labelColor="#39B972"
//                         accentColor="#39B972"
//                         textColor="#000000"
//                         isGradient={isDesktop ? false : true}
//                         headingParts={headingParts}
//                         description={description}
//                     />

//                     <div className="my-auto  hidden lg:flex justify-end pr-2">
//                         <SaveAndCancel saveText={data?.button} saveBgColor="#063F3D" handleClick={() => setOpen(!open)} />
//                     </div>
//                 </div>

//                 {/* ================= SERVICES ================= */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {data?.list?.map((product: any, index: number) => {
//                         const isCardVisible = visibleItems.includes(index);

//                         return (
//                             <div
//                                 key={index}
//                                 style={{
//                                     transitionDelay: `${index * 50}ms`,
//                                 }}
//                                 className=
//                                 {`    group relative
//     border border-[#39B972]
//     bg-[#FFFFFF]
//     p-6
//     backdrop-blur-md
//     rounded-2xl
//     transition-all duration-300
//     hover:border-[#39B972]
//     hover:bg-[#39B972] ${isCardVisible
//                                         ? "translate-y-0 opacity-100"
//                                         : "translate-y-10 opacity-0"
//                                     }`}

//                             >
//                                 <div
//                                     className="
//       mx-auto flex h-[clamp(40px,3.5vw,44px)]
//       w-[clamp(40px,3.5vw,44px)]
//       items-center justify-center
//       rounded-full
//       bg-[#E6F5EC]
//       p-3
//       transition-transform duration-300
//       group-hover:-translate-y-1
//       lg:mx-0
//     "
//                                 >
//                                     <div
//                                         className="h-full w-full bg-[#2E9B4F]"
//                                         style={{
//                                             maskImage: `url(${product?.image})`,
//                                             WebkitMaskImage: `url(${product?.image})`,
//                                             maskRepeat: "no-repeat",
//                                             WebkitMaskRepeat: "no-repeat",
//                                             maskPosition: "center",
//                                             WebkitMaskPosition: "center",
//                                             maskSize: "contain",
//                                             WebkitMaskSize: "contain",
//                                         }}
//                                     />
//                                 </div>

//                                 {/* Content */}
//                                 <div className="mt-8">
//                                     <h3
//                                         className="
//         text-center
//         text-[clamp(18px,1.7vw,20px)]
//         font-bold
//         tracking-[-0.01em]
//         text-[#101820]
//         lg:text-left
//       "
//                                     >
//                                         {product?.title}
//                                     </h3>

//                                     <p
//                                         className="
//         mt-3
//         text-center
//         text-[clamp(13px,1.2vw,15px)]
//         leading-6
//         text-[#000000]
//         lg:text-left
//       "
//                                     >
//                                         {product?.description}
//                                     </p>
//                                 </div>

//                                 {/* Arrow */}
//                                 <div
//                                     className="
//       absolute bottom-5 right-5
//       flex h-7 w-7 items-center justify-center
//       text-[#9999A3]
//       transition-all duration-300
//       group-hover:translate-x-1
//       group-hover:text-[#7C3AED]
//     "
//                                 />
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="my-auto  lg:hidden flex justify-center">
//                     <SaveAndCancel saveText={data?.button} handleClick={() => setOpen(!open)} />
//                 </div>
//             </MaxWidth>
//             <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
//         </div>
//     );
// };

// export default Applications;


"use client";

import React from "react";
import Image from "next/image";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";

interface Application {
  number: string;
  title: string;
  description: string;
  image: string;
}

const applications: Application[] = [
  {
    number: "01",
    title: "Packaging",
    description:
      "Reliable strapping solutions for securing cartons, boxes and packaged goods during handling and transportation.",
    image: "/images/home/applications/packaging.jpg",
  },
  {
    number: "02",
    title: "Textile Industry",
    description:
      "Strong and consistent PET straps designed for bundling textile rolls, finished products and industrial materials.",
    image: "/images/home/applications/textile.jpg",
  },
  {
    number: "03",
    title: "Paper & Printing",
    description:
      "Secure paper reels, sheets and printed materials with high-strength strapping that maintains load stability.",
    image: "/images/home/applications/paper.jpg",
  },
  {
    number: "04",
    title: "Logistics & Transportation",
    description:
      "Dependable load securing solutions that help protect products throughout storage, handling and long-distance transportation.",
    image: "/images/home/applications/logistics.jpg",
  },
  {
    number: "05",
    title: "Construction Materials",
    description:
      "Heavy-duty strapping for bundling pipes, profiles, tiles and other construction and industrial materials.",
    image: "/images/home/applications/construction.jpg",
  },
  {
    number: "06",
    title: "Industrial Manufacturing",
    description:
      "Versatile strapping solutions for manufacturers handling heavy, large or irregularly shaped products.",
    image: "/images/home/applications/industrial.jpg",
  },
];

const Applications = () => {
  return (
    <section className="bg-[#F7F9F5] py-16 lg:py-24">
      <MaxWidth>
        {/* Heading */}
        <div className="mb-12 max-w-2xl lg:mb-16">
          <Heading
            isAccentLine
            accentColor="#2E9B4F"
            labelColor="#2E9B4F"
            label="Applications"
            headingParts={[
              {
                text: "Built for demanding applications.",
                color: "#063F3D",
              },
            ]}
            description="Our PET and polyester strapping solutions are engineered to secure products across packaging, manufacturing, logistics and industrial applications."
          />
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <article
              key={application.number}
              className="group overflow-hidden rounded-[24px] border border-[#063F3D]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#39B972]/30 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={application.image}
                  alt={application.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Number */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 font-montserrat text-xs font-bold text-[#063F3D] shadow-sm">
                  {application.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <h3 className="font-montserrat text-lg font-bold text-[#063F3D]">
                  {application.title}
                </h3>

                <p className="mt-3 font-montserrat text-sm leading-6 text-[#16161D]/65">
                  {application.description}
                </p>

                {/* Bottom line */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-px w-7 bg-[#39B972] transition-all duration-300 group-hover:w-12" />

                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2E9B4F]">
                    Application
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Applications;