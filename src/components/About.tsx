"use client";
import { Rocket, Award, Users, Code2 } from "lucide-react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

export default function AboutSection() {
  const { isDesktop } = useResponsive();
  const stats = [
    {
      icon: Rocket,
      value: "20+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      value: "99%",
      label: "Client Satisfaction",
    },
    {
      icon: Code2,
      value: "10+",
      label: "Modern Technologies",
    },
    {
      icon: Award,
      value: "24/7",
      label: "Support & Maintenance",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <MaxWidth className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Heading
              isCenter={isDesktop ? false : true}
              isAccentLine={true}
              label="About SoftQivo"
              headingParts={[
                { text: "We Turn Complex Ideas Into Simple ", weight: "600" },
                {
                  text: " Digital Experiences",
                  weight: "600",
                  gradient:
                    "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
                },
              ]}
            />

            <p className="mt-6 text-center lg:text-left text-lg leading-relaxed text-gray-600">
              At SoftQivo, we combine technology, design, and creative thinking
              to build digital products that make businesses better.
            </p>

            <p className="mt-4 text-center lg:text-left text-lg leading-relaxed text-gray-600">
              Whether you’re launching something new or improving an existing
              product, we focus on understanding the problem first — then
              creating a solution that is fast, intuitive, reliable, and built
              to evolve with your business.
            </p>

            <button className="mt-8 w-full lg:w-fit rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30">
              Learn More →
            </button>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-blue-100">
                    <Icon className="h-5 w-5 text-purple-600" />
                  </div>

                  <h3 className="text-3xl font-bold text-black">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
