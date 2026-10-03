// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface FloatingCard {
//   title?: string;
//   list?: {
//     name?: string;
//     desc?: string;
//   }[];
// }

// interface Slide {
//   image: string;
//   floatingLabel?: string;
//   floatingCard?: FloatingCard;
// }

// interface ImageSliderProps {
//   slides: Slide[];
//   autoPlay?: boolean;
//   interval?: number;
// }

// export default function ImageSlider({
//   slides,
//   autoPlay = true,
//   interval = 5000,
// }: ImageSliderProps) {
//   const [current, setCurrent] = useState(0);

//   if (!slides?.length) return null;

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (!autoPlay || slides.length <= 1) return;

//     const timer = setInterval(() => {
//       nextSlide();
//     }, interval);

//     return () => clearInterval(timer);
//   }, [autoPlay, interval, slides.length]);

//   const slide = slides[current];

//   return (
//     <div className="relative my-auto flex aspect-[16/10] w-full justify-end overflow-hidden rounded-[20px]">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -40 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slide.image}
//             fill
//             priority={current === 0}
//             alt={slide.floatingLabel || "Slide image"}
//             className="rounded-[20px] object-cover"
//           />

//           {/* Floating Label */}
//           {slide.floatingLabel && (
//             <div className="absolute right-10 top-10 rounded-[10px] bg-white px-6 py-3">
//               <p className="text-[14px] font-bold uppercase text-[#101820]">
//                 {slide.floatingLabel}
//               </p>
//             </div>
//           )}

//           {/* Floating Card */}
//           {slide.floatingCard && (
//             <div className="absolute bottom-10 left-10 rounded-[10px] bg-white px-6 py-5">
//               {slide.floatingCard.title && (
//                 <h3 className="text-[16px] font-bold uppercase text-[#2E9B4F]">
//                   {slide.floatingCard.title}
//                 </h3>
//               )}

//               {slide.floatingCard.list?.length ? (
//                 <div className="mt-3">
//                   {slide.floatingCard.list.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="grid grid-cols-2 gap-x-6 space-y-1"
//                     >
//                       <p className="text-[16px] text-[#647077]">
//                         {item.name}
//                       </p>

//                       <p className="text-[16px] text-[#101820]">
//                         {item.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ) : null}
//             </div>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation */}
//       {slides.length > 1 && (
//         <>
//           <button
//             type="button"
//             onClick={prevSlide}
//             aria-label="Previous slide"
//             className="absolute left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#101820] shadow-md transition hover:bg-white"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <button
//             type="button"
//             onClick={nextSlide}
//             aria-label="Next slide"
//             className="absolute right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#101820] shadow-md transition hover:bg-white"
//           >
//             <ChevronRight size={20} />
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setCurrent(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   current === index
//                     ? "w-7 bg-[#2E9B4F]"
//                     : "w-2.5 bg-white/80"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SliderItem {
  image: string;
  floatingLabel?: string;
  floatingCard?: {
    title?: string;
    list?: {
      name?: string;
      desc?: string;
    }[];
  };
}

interface ImageSliderProps {
  slides: SliderItem[];
  interval?: number;
}

export default function ImageSlider({
  slides,
  interval = 5000,
}: ImageSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides?.length) return null;

  const data = slides[active];

  return (
    <div className="relative aspect-16/12 w-full overflow-hidden rounded-[20px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {/* Image */}
          <Image
            src={data.image}
            fill
            priority={active === 0}
            alt={data.floatingLabel || "Strap World"}
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Top Label */}
          {data.floatingLabel && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute right-8 top-8 rounded-[8px] bg-white px-5 py-3 shadow-sm"
            >
              <p className="text-[12px] font-bold uppercase tracking-wide text-[#101820]">
                {data.floatingLabel}
              </p>
            </motion.div>
          )}

          {/* Bottom Card */}
          {data.floatingCard && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="absolute bottom-8 left-8 min-w-[280px] rounded-[10px] bg-white px-6 py-5 shadow-sm"
            >
              {data.floatingCard.title && (
                <h3 className="text-[14px] font-bold uppercase tracking-wide text-[#2E9B4F]">
                  {data.floatingCard.title}
                </h3>
              )}

              {data.floatingCard.list && (
                <div className="mt-3 space-y-1.5">
                  {data.floatingCard.list.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr_auto] gap-8"
                    >
                      <p className="text-[14px] text-[#647077]">
                        {item.name}
                      </p>

                      <p className="text-right text-[14px] font-medium text-[#101820]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slider Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 right-6 z-10 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                active === index
                  ? "w-8 bg-[#2E9B4F]"
                  : "w-4 bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}