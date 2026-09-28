"use client";

import {
  Search,
  Lightbulb,
  Code2,
  TrendingUp,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

import { useRef } from "react";

import MaxWidth from "@/src/components/layout/MaxWidth";
import Heading from "@/src/components/common/Heading";


// ============================================================
// PROCESS DATA
// ============================================================

const process = [
  {
    number: "01",
    icon: Search,
    label: "CLARITY",
    title: "Understand",
    description:
      "We understand your business, audience, goals, and challenges to define what your product truly needs.",

    gradient:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 48%, #93c5fd 100%)",
  },

  {
    number: "02",
    icon: Lightbulb,
    label: "STRATEGY",
    title: "Shape",
    description:
      "We transform ideas into a clear product direction with the right structure, experience, and technology.",

    gradient:
      "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 48%, #c4b5fd 100%)",
  },

  {
    number: "03",
    icon: Code2,
    label: "EXECUTION",
    title: "Build",
    description:
      "We design and develop your solution with clean engineering, reliable technology, and attention to detail.",

    gradient:
      "linear-gradient(135deg, #fef9c3 0%, #fde68a 48%, #facc15 100%)",
  },

  {
    number: "04",
    icon: TrendingUp,
    label: "GROWTH",
    title: "Evolve",
    description:
      "We launch, learn, refine, and continuously improve the product as your business grows.",

    gradient:
      "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 48%, #86efac 100%)",
  },
];


// ============================================================
// PROCESS CARD
// ============================================================

const ProcessCard = ({
  item,
  index,
  progress,
}: {
  item: (typeof process)[number];
  index: number;
  progress: MotionValue<number>;
}) => {
  const Icon = item.icon;


  // ==========================================================
  // CARD TIMELINE
  // ==========================================================

  /*
   * Each card follows the same path:
   *
   *              CENTER
   *                ↑
   *                │
   *                │
   *              FROM
   *             BOTTOM
   *
   * The movement is intentionally slower now.
   */

  const start = 0.07 + index * 0.115;

  /*
   * Longer travel time = smoother/slower movement.
   */
  const arrive = start + 0.14;

  /*
   * Card stays centered for a little longer.
   */
  const hold = arrive + 0.07;

  /*
   * Small final transition before next card.
   */
  const leave = hold + 0.04;


  // ==========================================================
  // Y POSITION
  // ==========================================================

  const y = useTransform(
    progress,
    [
      start,
      arrive,
      hold,
      leave,
    ],
    [
      "110vh",
      "0vh",
      "0vh",
      "0vh",
    ]
  );


  // ==========================================================
  // SCALE
  // ==========================================================

  const scale = useTransform(
    progress,
    [
      start,
      start + 0.06,
      arrive,
      hold,
      leave,
    ],
    [
      0.88,
      0.96,
      1,
      1,
      0.98,
    ]
  );


  // ==========================================================
  // ROTATION
  // ==========================================================

  /*
   * Increased rotation:
   *
   * Card 01 → -5°
   * Card 02 → +5°
   * Card 03 → -5°
   * Card 04 → +5°
   *
   * Rotation naturally settles to 0°
   * when the card reaches center.
   */

  const rotate = useTransform(
    progress,
    [
      start,
      start + 0.055,
      arrive,
      hold,
      leave,
    ],
    [
      index % 2 === 0 ? -5 : 5,
      index % 2 === 0 ? -2 : 2,
      0,
      0,
      index % 2 === 0 ? 1.5 : -1.5,
    ]
  );


  return (
    <motion.div
      style={{
        y,
        scale,
        rotate,
        zIndex: 30 + index,
      }}
      className="
        absolute
        left-1/2
        top-1/2
        w-[calc(100%-2rem)]
        max-w-4xl
        -translate-x-1/2
        -translate-y-1/2
      "
    >

      {/* ======================================================
          CARD
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-black/10
          shadow-[0_30px_100px_rgba(0,0,0,0.15)]
        "
        style={{
          background: item.gradient,
        }}
      >

        {/* ==================================================
            CARD GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-white/40
            blur-[100px]
          "
        />


        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            grid
            min-h-[390px]
            grid-cols-1
            md:grid-cols-[.8fr_1.2fr]
          "
        >

          {/* ==================================================
              LEFT
          ================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              border-b
              border-black/10
              p-7
              sm:p-10
              md:border-b-0
              md:border-r
              md:border-black/10
              lg:p-12
            "
          >

            {/* TOP */}

            <div className="flex items-start justify-between">

              {/* Number */}

              <span
                className="
                  text-sm
                  font-bold
                  tracking-[0.2em]
                  text-black/40
                "
              >
                {item.number}
              </span>


              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black/10
                  bg-white/50
                  backdrop-blur-sm
                "
              >

                <Icon
                  className="
                    h-5
                    w-5
                    text-black
                  "
                />

              </div>

            </div>


            {/* =================================================
                GIANT NUMBER
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-35px]
                left-[-15px]
                select-none
                text-[180px]
                font-bold
                leading-none
                tracking-[-0.08em]
                text-black/[0.055]
              "
            >
              {item.number}
            </div>


            {/* =================================================
                TITLE
            ================================================= */}

            <div
              className="
                relative
                mt-16
              "
            >

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-black/50
                "
              >
                {item.label}
              </span>


              <h3
                className="
                  mt-4
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-black
                  sm:text-5xl
                "
              >
                {item.title}
              </h3>

            </div>

          </div>


          {/* ==================================================
              RIGHT
          ================================================== */}

          <div
            className="
              flex
              flex-col
              justify-center
              p-7
              sm:p-10
              lg:p-14
            "
          >

            <p
              className="
                max-w-lg
                text-base
                font-medium
                leading-8
                text-black/60
                sm:text-lg
              "
            >
              {item.description}
            </p>


            {/* Bottom line */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  h-px
                  w-16
                  bg-black/30
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-black/40
                "
              >
                SoftQivo Process
              </span>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};


// ============================================================
// PROCESS SECTION
// ============================================================

const ProcessSectio2 = () => {

  const sectionRef = useRef<HTMLDivElement>(null);


  // ==========================================================
  // SCROLL
  // ==========================================================

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start start",
      "end end",
    ],
  });


  // ==========================================================
  // SECTION
  // ==========================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-white
      "
      style={{
        height: "300vh",
      }}
    >

      {/* ======================================================
          STICKY
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
        "
      >


        {/* ====================================================
            CONTENT
        ==================================================== */}

        <MaxWidth
          className="
            relative
            h-full
          "
        >

          {/* ==================================================
              OUR PROCESS
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              w-full
              -translate-x-1/2
              -translate-y-1/2
              px-6
            "
          >

            <div
              className="
                mx-auto
                max-w-3xl
              "
            >

              <Heading
                label="HOW WE WORK"
                labelColor="rgba(0,0,0,0.45)"
                accentColor="#A855F7"
                textColor="rgba(0,0,0,0.45)"
                isCenter={true}
                isVisible={true}
                as="h2"
                headingParts={[
                  {
                    text: "Our ",
                    color: "#000000",
                  },
                  {
                    text: "Process",
                    gradient:
                      "linear-gradient(90deg, #9333EA, #7C3AED, #2563EB)",
                  },
                ]}
                description="A simple, focused approach that turns ideas into scalable digital products."
              />

            </div>

          </div>


          {/* ==================================================
              CARDS
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                relative
                h-[430px]
                w-full
              "
            >

              {process.map(
                (item, index) => (
                  <ProcessCard
                    key={item.number}
                    item={item}
                    index={index}
                    progress={scrollYProgress}
                  />
                )
              )}

            </div>

          </div>

        </MaxWidth>

      </div>

    </section>
  );
};


export default ProcessSectio2;