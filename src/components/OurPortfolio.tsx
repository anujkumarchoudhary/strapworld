"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import MaxWidth from "@/src/components/layout/MaxWidth";
import Heading from "@/src/components/common/Heading";

interface PortfolioItem {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
}

interface OurPortfolioProps {
  data?: PortfolioItem[];
}

const defaultPortfolio: PortfolioItem[] = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Modern digital experiences built for growing businesses.",
    description:
      "A high-performance web experience designed around a clear brand, seamless interactions, and a scalable technical foundation.",
    image: "/images/portfolio/image_1.png",
    tags: ["Next.js", "UI/UX", "Development"],
    href: "#",
  },
  {
    number: "02",
    category: "SOFTWARE DEVELOPMENT",
    title: "A scalable platform designed around real business workflows.",
    description:
      "A custom software solution that brings complex processes into one focused, efficient digital experience.",
    image: "/images/portfolio/image_2.png",
    tags: ["Software", "Backend", "Cloud"],
    href: "#",
  },
  {
    number: "03",
    category: "UI / UX DESIGN",
    title: "A product experience where simplicity meets functionality.",
    description:
      "A carefully structured interface designed to make complex functionality feel intuitive, clear, and effortless.",
    image: "/images/portfolio/image_2.png",
    tags: ["Product Design", "UX", "Interface"],
    href: "#",
  },
  {
    number: "04",
    category: "MOBILE APPLICATION",
    title: "A focused mobile experience built for everyday users.",
    description:
      "A responsive mobile product combining thoughtful interaction design with reliable performance across devices.",
    image: "/images/portfolio/image_1.png",
    tags: ["Mobile", "UX", "Development"],
    href: "#",
  },
];

export default function OurPortfolio({
  data = defaultPortfolio,
}: OurPortfolioProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple glow */}

        <div
          className="
            absolute
            left-[-15%]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-500/[0.045]
            blur-[150px]
          "
        />

        {/* Blue glow */}

        <div
          className="
            absolute
            bottom-[5%]
            right-[-15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[150px]
          "
        />

        {/* Local grid */}

        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[900px]
            w-[1200px]
            -translate-x-1/2
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0,0,0,1) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
      </div>


      <MaxWidth className="relative">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-3xl">

          <Heading
            label="SELECTED WORK"
            labelColor="rgba(0,0,0,0.45)"
            accentColor="#A855F7"
            isAccentCircle={true}
            textColor="#111111"
            isCenter={true}
            isVisible={true}
            as="h2"
            headingParts={[
              {
                text: "Work that ",
                color: "#111111",
                weight: 600,
              },
              {
                text: "moves businesses forward.",
                gradient:
                  "linear-gradient(90deg, #9333EA, #7C3AED, #2563EB)",
                weight: 600,
              },
            ]}
            description="A selection of digital products and experiences created to solve meaningful problems, simplify complexity, and create lasting value."
            descColor="rgba(0,0,0,0.5)"
          />

        </div>


        {/* ===================================================
            PROJECTS
        =================================================== */}

        <div className="mt-20 space-y-20 lg:mt-32 lg:space-y-32">

          {data.map((project, index) => (
            <PortfolioCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}

        </div>

      </MaxWidth>
    </section>
  );
}


/* ============================================================
   PORTFOLIO CARD
============================================================ */

function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioItem;
  index: number;
}) {
  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >

      <div
        className={`
          grid
          items-center
          gap-10
          lg:grid-cols-[1.15fr_.85fr]
          lg:gap-16
          ${isReverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="relative">

          {/* Number */}

          <div
            className="
              absolute
              -left-3
              -top-8
              z-10
              text-[80px]
              font-bold
              leading-none
              tracking-[-0.08em]
              text-black/[0.055]
              transition-all
              duration-500
              group-hover:text-purple-600/[0.12]
              lg:-left-8
              lg:-top-12
              lg:text-[120px]
            "
          >
            {project.number}
          </div>


          {/* Image wrapper */}

          <div
            className="
              relative
              aspect-[16/10]
              overflow-hidden
              rounded-[1.75rem]
              border
              border-black/[0.08]
              bg-gray-100
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
            "
          >

            {/* Gradient border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                rounded-[1.75rem]
                border
                border-transparent
                bg-gradient-to-br
                from-purple-500/0
                via-transparent
                to-blue-500/0
                transition-all
                duration-700
                group-hover:from-purple-500/40
                group-hover:to-blue-500/30
              "
            />

            {/* Image */}

            <motion.img
              src={project.image}
              alt={project.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* Image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

          </div>

        </div>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className={`
            relative
            ${isReverse ? "lg:pr-8" : "lg:pl-8"}
          `}
        >

          {/* Category */}

          <div className="flex items-center gap-4">

            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-purple-500
                to-blue-500
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-purple-600
              "
            >
              {project.category}
            </span>

          </div>


          {/* Title */}

          <h3
            className="
              mt-6
              max-w-xl
              text-3xl
              font-semibold
              leading-[1.1]
              tracking-[-0.035em]
              text-black
              sm:text-4xl
              lg:text-[2.75rem]
            "
          >
            {project.title}
          </h3>


          {/* Description */}

          <p
            className="
              mt-6
              max-w-lg
              text-base
              leading-8
              text-black/50
              sm:text-lg
            "
          >
            {project.description}
          </p>


          {/* Tags */}

          <div className="mt-8 flex flex-wrap gap-2">

            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.025]
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-black/50
                  transition-all
                  duration-300
                  group-hover:border-purple-500/20
                "
              >
                {tag}
              </span>
            ))}

          </div>


          {/* View project */}

          <a
            href={project.href ?? "#"}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-black
            "
          >

            <span
              className="
                relative
                after:absolute
                after:bottom-[-5px]
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-gradient-to-r
                after:from-purple-500
                after:to-blue-500
                after:transition-transform
                after:duration-300
                group-hover:after:scale-x-100
              "
            >
              View project
            </span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                transition-all
                duration-300
                group-hover:border-purple-500/40
                group-hover:bg-purple-500/10
              "
            >
              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </span>

          </a>

        </div>

      </div>

    </motion.article>
  );
}