"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import SectionBackground from "./ui/SectionBackground";
import Heading from "./common/Heading";

const values = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and explore new technologies to build better solutions.",
    icon: "FaRegLightbulb",
  },
  {
    title: "Quality",
    description:
      "We follow best practices to deliver secure, reliable, and scalable products.",
    icon: "AiOutlineSafety",
  },
  {
    title: "Client Success",
    description:
      "Our success is measured by our clients' growth and happiness.",
    icon: "FaRegUser",
  },
  {
    title: "Integrity",
    description:
      "We believe in transparent communication, honesty, and strong relationships.",
    icon: "LuHandshake",
  },
  {
    title: "Growth",
    description:
      "We continuously learn, improve, and push beyond boundaries.",
    icon: "IoRocketOutline",
  },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfb] py-16 lg:py-24">
      {/* Ambient glow */}
            {/* <SectionBackground /> */}

      <div className="pointer-events-none absolute left-[5%] top-10 h-[350px] w-[350px] rounded-full bg-purple-500/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute right-[10%] top-[45%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.05] blur-[120px]" />

      <MaxWidth className="relative z-10">
        {/* ================= STORY ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            {/* Image frame */}
            <div className="relative aspect-[1.55/1] overflow-hidden rounded-2xl bg-[#111]">
              <Image
                src="/images/about/ourstory.png"
                alt="SoftQivo office"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-2xl border border-purple-500/20" />
          </motion.div>

{/* CONTENT */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    duration: 0.8,
    delay: 0.1,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  <Heading
    label="Our Story"
    labelColor="#9333EA"
    accentColor="#9333EA"
    isAccentLine
    textColor="#001845"
    isVisible={true}
    as="h2"
    className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl"
    headingParts={[
      {
        text: "Built with passion.",
        color: "#001845",
        weight: 700,
      },
      {
        text: "Driven by ",
        color: "#001845",
        weight: 700,
      },
      {
        text: "purpose.",
        gradient: "linear-gradient(to right, #9333EA, #3B82F6)",
        weight: 700,
      },
    ]}
  />

  {/* Description */}
  <div className="mt-6 max-w-xl space-y-4 text-[14px] leading-6 text-gray-500">
    <p>
      SoftQivo was founded with a simple mission — to help businesses
      and startups transform their ideas into powerful digital products.
    </p>

    <p>
      We believe technology is more than just code. It&apos;s about
      solving real problems, creating exceptional experiences, and
      making a lasting impact.
    </p>

    <p>
      From idea to deployment, we partner with our clients at every
      step, ensuring quality, transparency, and long-term success.
    </p>
  </div>

  {/* CTA */}
  <motion.a
    href="/contact"
    whileHover={{ x: 3 }}
    className="group mt-7 inline-flex items-center gap-3 rounded-lg border border-purple-500 px-5 py-2.5 text-[18px] font-semibold text-purple-600 transition-all duration-300 hover:bg-purple-600 hover:text-white"
  >
    Learn More About Us

    <Icon
      name="arrow"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    />
  </motion.a>
</motion.div>
        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-20 lg:mt-24">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-purple-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-600">
                Our Values
              </span>

              <span className="h-px w-7 bg-purple-500" />
            </div>

            <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#001845] sm:text-3xl">
              The principles that{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                guide
              </span>{" "}
              everything we do.
            </h3>
          </motion.div>

          {/* Value Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value:any, index:number) => (
              <motion.div
                key={value.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-xl border border-gray-200 bg-white p-5 text-center shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_15px_40px_rgba(124,58,237,0.10)]"
              >
                {/* Icon */}
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 transition-all duration-500 group-hover:bg-purple-600">
                  <Icon
                    name={value.icon}
                    size={25}
                    className="text-purple-600 transition-colors duration-500 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h4 className="mt-4 text-[18px] font-bold text-[#001845]">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="mt-2 text-[16px] leading-6 text-gray-500">
                  {value.description}
                </p>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-2/3" />
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}