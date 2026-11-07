
"use client";

import Image from "next/image";
import MaxWidth from "./layout/MaxWidth";

type Client = {
  id: number | string;
  name: string;
  logo: string;
  href?: string;
};

type ClientsSectionProps = {
  data: {
    heading?: string;
    subheading?: string;
    list: Client[];
  };
};

const  clientsData= {
      heading: "Trusted by Industry Leaders",
      subheading:
        "Building lasting partnerships through quality, reliability and trust.",

      list: [
        {
          id: 1,
          name: "Client 1",
          logo: "/images/clients/alaf_LOGO_2.png",
        },
        {
          id: 2,
          name: "Client 2",
          logo: "/images/clients/AtoZ-logo.png",
        },
        {
          id: 3,
          name: "Client 3",
          logo: "/images/clients/fromm-logo-1.svg",
        },
        {
          id: 4,
          name: "Client 4",
          logo: "/images/clients/image_1_1_1749036191.avif",
        },
        {
          id: 5,
          name: "Client 5",
          logo: "/images/clients/indorama3.jpg",
        },
        {
          id: 6,
          name: "Client 6",
          logo: "/images/clients/logo (1).png",
        },
        {
          id: 7,
          name: "Client 7",
          logo: "/images/clients/Logo_White_tagline.webp",
        },
        {
          id: 8,
          name: "Client 8",
          logo: "/images/clients/logo-d.png",
        },
        {
          id: 9,
          name: "Client 9",
          logo: "/images/clients/wellknown-polyster-logo.png",
        },
        {
          id: 10,
          name: "Client 10",
          logo: "/images/clients/white-avaada-electro.webp",
        },
      ],
    }
    
const ClientsSection = () => {
  const clients = clientsData?.list || [];

  if (!clients.length) return null;

  const LogoSlider = ({
    items,
    reverse = false,
  }: {
    items: Client[];
    reverse?: boolean;
  }) => {
    const duplicated = [...items, ...items];

    return (
      <div className="overflow-hidden">
        <div
          className={`flex w-max gap-5 ${
            reverse
              ? "animate-client-reverse"
              : "animate-client"
          }`}
        >
          {duplicated.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-5 transition-all duration-300 hover:border-[#39B972] hover:shadow-md"
            >
              {client.href ? (
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                  className="relative h-[65px] w-full"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="180px"
                    className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </a>
              ) : (
                <div className="relative h-[65px] w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="180px"
                    className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const firstRow = clients.filter((_, index) => index % 2 === 0);
  const secondRow = clients.filter((_, index) => index % 2 !== 0);

  return (
    <section className="overflow-hidden bg-[#F5F5F5] py-16 lg:py-24">
      <MaxWidth className="">

        <div className="mb-12 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[3px] text-[#39B972]">
            Our Clients
          </span>

          <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">
            {clientsData?.heading || "Trusted by Industry Leaders"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            {clientsData?.subheading ||
              "Building lasting partnerships through quality, reliability and trust."}
          </p>
        </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
          {/* <LogoSlider items={firstRow} />
          {secondRow.length > 0 && (
            <LogoSlider items={secondRow} reverse />
          )} */}
          {clientsData?.list?.map((client:any, index) => (
            <div
              key={client.id}
              className="flex shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-5 transition-all duration-300 hover:border-[#39B972] hover:shadow-md"
            >
              {client.href ? (
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                  className="relative h-[65px] w-full"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="180px"
                    className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </a>
              ) : (
                <div className="relative h-[65px] w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="180px"
                    className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </MaxWidth>

      <style jsx>{`
        @keyframes client-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-client {
          animation: client-scroll 35s linear infinite;
        }

        .animate-client-reverse {
          animation: client-scroll 35s linear infinite reverse;
        }

        section:hover .animate-client,
        section:hover .animate-client-reverse {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-client,
          .animate-client-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
