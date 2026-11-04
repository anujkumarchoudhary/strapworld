// import {
//   ArrowRight,
//   CheckCircle2,
//   ShieldCheck,
//   Factory,
// } from "lucide-react";
// import MaxWidth from "./layout/MaxWidth";

// const features = [
//   "High Tensile Strength",
//   "Consistent Quality",
//   "Industrial Packaging Solutions",
// ];

// export default function PetStrapBanner() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#063F3D] py-16 text-white md:py-24 lg:py-28">
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full border border-white/[0.08]" />
//         <div className="absolute -right-16 -top-24 h-[400px] w-[400px] rounded-full border border-white/[0.08]" />
//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#39B972]/10 blur-[100px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,63,61,1)_0%,rgba(6,63,61,0.96)_48%,rgba(6,63,61,0.55)_100%)]" />
//       </div>

//       <MaxWidth className="relative">
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* Content */}
//           <div>
//             <span className="inline-flex items-center gap-2 rounded-full border border-[#39B972]/30 bg-[#39B972]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#75D99D] sm:text-sm">
//               <Factory size={16} />
//               Industrial Packaging Solutions
//             </span>

//             <h2 className="mt-7 max-w-2xl text-4xl text-white/80 font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
//               Stronger Packaging Starts with
//               <span className="text-[#39B972]"> Quality PET Straps</span>
//             </h2>

//             <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
//               Discover high-strength PET strapping solutions designed for
//               reliable bundling, secure transportation and demanding
//               industrial packaging applications.
//             </p>

//             {/* Features */}
//             <div className="mt-8 flex flex-col gap-4">
//               {features.map((feature) => (
//                 <div key={feature} className="flex items-center gap-3">
//                   <CheckCircle2
//                     size={19}
//                     className="shrink-0 text-[#39B972]"
//                   />
//                   <span className="text-sm font-medium text-white/90 sm:text-base">
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="mt-10 flex flex-wrap items-center gap-4">
//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-3 rounded-lg bg-[#39B972] px-7 py-4 font-semibold text-[#063F3D] transition-all duration-300 hover:bg-white"
//               >
//                 Request a Quote
//                 <ArrowRight
//                   size={19}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </a>

//               <a
//                 href="tel:+919978735708"
//                 className="rounded-lg border border-white/25 px-7 py-4 font-semibold text-white transition-colors hover:border-[#39B972] hover:text-[#75D99D]"
//               >
//                 Talk to Our Team
//               </a>
//             </div>

//             <div className="mt-9 flex items-center gap-3 text-sm text-white/60">
//               <ShieldCheck size={20} className="text-[#39B972]" />
//               <span>Quality-focused PET strapping solutions</span>
//             </div>
//           </div>

//           {/* Product image */}
//           <div className="relative mx-auto w-full max-w-xl">
//             <div className="absolute inset-8 rounded-full bg-[#39B972]/20 blur-[90px]" />

//             <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-sm">
//               <img
//                 src="/images/pet-strap-banner.webp"
//                 alt="High strength PET strapping rolls for industrial packaging"
//                 className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px] lg:h-[480px]"
//               />

//               <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#063F3D]/90 p-5 backdrop-blur-md sm:p-6">
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#75D99D]">
//                   Strap World Pvt. Ltd.
//                 </p>
//                 <h3 className="mt-2 text-xl font-bold sm:text-2xl">
//                   Reliable PET Strapping for Industry
//                 </h3>
//                 <p className="mt-2 text-sm leading-6 text-white/65">
//                   Built for strength, stability and dependable packaging.
//                 </p>
//               </div>
//             </div>

//             {/* Decorative badge */}
//             <div className="absolute -right-3 -top-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#39B972]/30 bg-[#167653] shadow-xl sm:-right-6 sm:h-24 sm:w-24">
//               <div className="text-center">
//                 <ShieldCheck className="mx-auto text-white" size={25} />
//                 <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-white">
//                   Quality
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </MaxWidth>
//     </section>
//   );
// }
"use client";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
} from "lucide-react";

import MaxWidth from "./layout/MaxWidth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GetEnquiryForm from "./form/GetEnquiryForm";

interface BannerData {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  features?: string[];
  primaryButton?: {
    text?: string;
    link?: string;
  };
  secondaryButton?: {
    text?: string;
    link?: string;
  };
  trustText?: string;
  image?: string;
  imageAlt?: string;
  overlayBrand?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  qualityBadge?: string;
}

interface PetStrapBannerProps {
  data?: BannerData;
}

export default function PetStrapBanner({
  data,
}: PetStrapBannerProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (!data) return null;


  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#063F3D] py-16 text-white md:py-24 lg:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full border border-white/[0.08]" />
          <div className="absolute -right-16 -top-24 h-[400px] w-[400px] rounded-full border border-white/[0.08]" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#39B972]/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,63,61,1)_0%,rgba(6,63,61,0.96)_48%,rgba(6,63,61,0.55)_100%)]" />
        </div>

        <MaxWidth className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#39B972]/30 bg-[#39B972]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#75D99D] sm:text-sm">
                <Factory size={16} />
                {data.badge}
              </span>

              <h2 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-white/80 sm:text-5xl lg:text-6xl">
                {data.title}
                <span className="text-[#39B972]">
                  {" "}{data.highlight}
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
                {data.description}
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-col gap-4">
                {data.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#39B972]"
                    />
                    <span className="text-sm font-medium text-white/90 sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {data.primaryButton && (
                  <a
                    onClick={() => setOpen(!open)}
                    className="group inline-flex items-center gap-3 rounded-lg bg-[#39B972] px-7 py-4 font-semibold text-[#063F3D] transition-all duration-300 hover:bg-white"
                  >
                    {data.primaryButton.text}
                    <ArrowRight
                      size={19}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                )}

                {data.secondaryButton && (
                  <a
                    href={data.secondaryButton.link || "#"}
                    className="rounded-lg border border-white/25 px-7 py-4 font-semibold text-white transition-colors hover:border-[#39B972] hover:text-[#75D99D]"
                  >
                    {data.secondaryButton.text}
                  </a>
                )}
              </div>

              <div className="mt-9 flex items-center gap-3 text-sm text-white/60">
                <ShieldCheck size={20} className="text-[#39B972]" />
                <span>{data.trustText}</span>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-8 rounded-full bg-[#39B972]/20 blur-[90px]" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-sm">
                <img
                  src={data.image || "/images/pet-strap-banner.webp"}
                  alt={data.imageAlt || "PET strapping rolls"}
                  className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px] lg:h-[480px]"
                />

                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#063F3D]/90 p-5 backdrop-blur-md sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#75D99D]">
                    {data.overlayBrand}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white/80 sm:text-2xl">
                    {data.overlayTitle}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {data.overlayDescription}
                  </p>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute -right-3 -top-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#39B972]/30 bg-[#167653] shadow-xl sm:-right-6 sm:h-24 sm:w-24">
                <div className="text-center">
                  <ShieldCheck className="mx-auto text-white" size={25} />
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-white">
                    {data.qualityBadge}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </MaxWidth>


      </section>
      <GetEnquiryForm
        isOpen={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}