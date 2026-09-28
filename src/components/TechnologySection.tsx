// "use client";

// import { motion } from "framer-motion";
// import MaxWidth from "./layout/MaxWidth";
// import Icon from "@/src/utills/iconMap ";

// interface Technology {
//   name: string;
//   category: string;
//   icon: string;
// }

// interface TechnologyData {
//   label: string;
//   heading: string;
//   description: string;
//   technologies: Technology[];
// }

// interface TechnologySectionProps {
//   data: TechnologyData;
// }

// export default function TechnologySection({
//   data,
// }: TechnologySectionProps) {
//   return (
//     <section className="relative overflow-hidden bg-black py-20 lg:py-28">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.08] blur-[180px]" />

//       <div className="pointer-events-none absolute right-[-15%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[180px]" />

//       <MaxWidth className="relative z-10">
//         <div className="grid gap-16 lg:grid-cols-[0.8fr_1.4fr] lg:items-center lg:gap-24">

//           {/* =================================================
//               LEFT CONTENT
//           ================================================= */}

//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="flex items-center gap-3"
//             >
//               <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

//               <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
//                 {data.label}
//               </span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-[72px]"
//             >
//               Technology
//               <br />

//               <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
//                 that works.
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.15,
//               }}
//               className="mt-8 max-w-lg text-base leading-7 text-gray-500 md:text-lg"
//             >
//               {data.description}
//             </motion.p>

//             {/* Small stat */}

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.3,
//               }}
//               className="mt-12 flex items-center gap-5"
//             >
//               <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500" />

//               <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
//                 Modern stack
//               </span>
//             </motion.div>
//           </div>

//           {/* =================================================
//               RIGHT TECHNOLOGY WALL
//           ================================================= */}

//           <div className="relative">
//             {/* Decorative circle */}

//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/[0.08]" />

//             {/* Technology items */}

//             <div className="relative flex flex-wrap justify-center gap-3 md:gap-4">
//               {data.technologies.map((technology, index) => (
//                 <TechnologyPill
//                   key={technology.name}
//                   technology={technology}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* =================================================
//             BOTTOM LINE
//         ================================================= */}

//         <motion.div
//           initial={{ opacity: 0, scaleX: 0 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="mt-20 h-px origin-left bg-gradient-to-r from-transparent via-white/10 to-transparent lg:mt-28"
//         />
//       </MaxWidth>
//     </section>
//   );
// }

// /* =====================================================
//    TECHNOLOGY PILL
// ===================================================== */

// function TechnologyPill({
//   technology,
//   index,
// }: {
//   technology: Technology;
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 30,
//         scale: 0.95,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       }}
//       viewport={{
//         once: true,
//         margin: "-60px",
//       }}
//       transition={{
//         duration: 0.55,
//         delay: index * 0.05,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       whileHover={{
//         y: -5,
//       }}
//       className="group relative"
//     >
//       {/* Glow */}

//       <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />

//       {/* Pill */}

//       <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 backdrop-blur-md transition-all duration-500 group-hover:border-purple-500/40 group-hover:bg-white/[0.07]">
//         {/* Icon */}

//         <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
//           {/* <Icon
//             name={technology.icon}
//             size={16}
//             className="text-gray-500 transition-colors duration-500 group-hover:text-purple-400"
//           /> */}
//         </div>

//         {/* Name */}

//         <span className="text-sm font-medium text-gray-400 transition-colors duration-500 group-hover:text-white">
//           {technology.name}
//         </span>

//         {/* Category */}

//         <span className="hidden text-[9px] uppercase tracking-[0.15em] text-gray-700 transition-colors duration-500 group-hover:text-gray-500 sm:block">
//           {technology.category}
//         </span>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import Image from "next/image";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

interface Technology {
  name: string;
  category: string;
  icon: string;
}

interface TechnologyData {
  label: string;
  heading: string;
  headingParts: any;
  technologies: Technology[];
}

interface TechnologySectionProps {
  data: TechnologyData;
}

export default function TechnologySection({ data }: any) {
  const { isDesktop } = useResponsive();
  const technologies = [...data.technologies, ...data.technologies];

  return (
    <section className="relative overflow-hidden bg-black py-12 lg:py-16">
      {/* ================= BACKGROUND ================= */}

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.06] blur-[160px]" />

      {/* Localized grid */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{
          backgroundImage: `
        linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)
      `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 65% 60% at center, black 0%, rgba(0,0,0,0.75) 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 60% at center, black 0%, rgba(0,0,0,0.75) 40%, transparent 75%)",
        }}
      />

      <MaxWidth className="relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <Heading
            isCenter={isDesktop ? false : true}
            isAccentCircle={true}
            accentColor="#A855F7"
            labelColor="#6B7280"
            label={data?.label}
            headingParts={data?.headingParts}
            className=" w-full lg:w-[70%]"
          />
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className=" w-full lg:w-[40%] text-[18px] text-center lg:text-left leading-7 text-gray-500 md:text-right "
          >
            {data.description}
          </motion.p>
        </div>

        {/* =====================================================
            TECHNOLOGY MARQUEE
        ===================================================== */}

        <div className="relative mt-10 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-black to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            className="flex w-max gap-3"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {technologies.map((technology, index) => (
              <TechnologyCard
                key={`${technology.name}-${index}`}
                technology={technology}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-700">
            Modern Technology Stack
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-blue-500/40 to-transparent" />
        </div>
      </MaxWidth>
    </section>
  );
}

/* =====================================================
   TECHNOLOGY CARD
===================================================== */

function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="group relative flex h-[90px] w-[190px] shrink-0 items-center gap-4 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.035] px-5 transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.07]"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
        <Image
          src={technology?.icon}
          fill
          alt="/images/technology/icon_9.png"
          className="text-gray-500 transition-colors duration-500 group-hover:text-purple-400"
        />
      </div>

      {/* Content */}
      <div className="relative min-w-0">
        <h3 className="truncate text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
          {technology.name}
        </h3>

        <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-600 transition-colors duration-300 group-hover:text-gray-500">
          {technology.category}
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}
