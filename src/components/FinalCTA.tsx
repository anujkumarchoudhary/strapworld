// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import MaxWidth from "./layout/MaxWidth";
// import Icon from "../utills/iconMap ";
// import Heading from "./common/Heading";

// interface FinalCTAData {
//   label: string;
//   headingParts: string;
//   description: string;
//   buttonText: string;
//   buttonHref: string;
//   image: string;
//   imageAlt?: string;
// }

// interface FinalCTAProps {
//   data: FinalCTAData;
// }

// export default function FinalCTA({ data }: any) {
//   return (
//     <section className="relative overflow-hidden bg-primary-bg py-12 lg:py-16">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

//       <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[160px]" />

//       <MaxWidth className="relative">
//         <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
//           {/* =====================================================
//               LEFT — CONTENT
//           ===================================================== */}

//           <div>
//             <Heading
//               labelColor="#ffffff"
//               label={data?.label}
//               accentColor="#2563EB"
//               headingParts={[
//                 {
//                   text: "Have an idea worth building?",
//                   color: "#FFFFFF",
//                   size: "clamp(24px, 4vw, 46px)",
//                   weight: "700",
//                 },
//               ]}
//               textColor="#ffffff"
//               description={data?.description}
//             />

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.25,
//               }}
//               className="mt-9"
//             >
//               <a
//                 href={data.buttonHref}
//                 className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
//               >
//                 <span>{data.buttonText}</span>

//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-purple-600">
//                   <Icon
//                     name="arrow"
//                     className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
//                   />
//                 </span>
//               </a>
//             </motion.div>

//             {/* Small trust line */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.4,
//               }}
//               className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6"
//             >
//               <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
//                 Strategy
//               </span>

//               <span className="h-1 w-1 rounded-full bg-gray-700" />

//               <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
//                 Design
//               </span>

//               <span className="h-1 w-1 rounded-full bg-gray-700" />

//               <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
//                 Development
//               </span>
//             </motion.div>
//           </div>

//           {/* =====================================================
//               RIGHT — IMAGE / GRAPHIC
//           ===================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 1,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="relative"
//           >
//             {/* Outer frame */}
//             <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-2">
//               {/* Gradient border glow */}
//               <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />

//               {/* Image */}
//               <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#0a0a0d]">
//                 <Image
//                   src={"/images/final_cta.png"}
//                   alt={data.imageAlt || "SoftQivo digital product"}
//                   fill
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                 />

//                 {/* Image overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//               </div>

//               {/* Floating card */}
//               <motion.div
//                 animate={{
//                   y: [0, -8, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute bottom-7 left-7 rounded-xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

//                   <div>
//                     <p className="text-xs font-semibold text-white">
//                       Ready to build
//                     </p>

//                     <p className="mt-1 text-[10px] text-gray-500">
//                       Let's create something meaningful.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Corner accent */}
//               <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
//                 <Icon
//                   name="arrow"
//                   className="h-5 w-5 rotate-[-45deg] text-white"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="mt-20 h-px origin-left bg-gradient-to-r from-purple-500/40 via-white/10 to-blue-500/40"
//         />
//       </MaxWidth>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";

interface FinalCTAData {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface FinalCTAProps {
  data: FinalCTAData;
}

export default function FinalCTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 py-12 lg:py-16">
      <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-32 w-56 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-20 top-1/2 h-32 w-56 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

          {/* Content */}
          <div className="relative w-full lg:w-[90%] mx-auto z-10 lg:flex  items-center justify-between gap-6 px-7 py-4 sm:px-10 md:px-16">
            {/* Left */}
            <div className="space-y-5 ">
              <h2 className="text-center lg:text-left font-semibold uppercase leading-none tracking-[-0.02em] text-white text-2xl lg:text-[55px]">
                HAVE A PROJECT IN MIND?
              </h2>

              <p className="mt-1.5 text-[18px] font-semibold  text-center lg:text-left text-white/70">
                "Let's build something amazing together.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => setOpen(true)}
              className="group cursor-pointer flex text-center shrink-0 mt-10 lg:mt-0 items-center gap-2 rounded-[4px] mx-auto lg:mx-0 w-fit bg-black px-5 py-3 text-[18px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-7 sm:py-3.5"
            >
              Let's Talk
              <Icon
                name="arrow"
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>
      </MaxWidth>
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
}
