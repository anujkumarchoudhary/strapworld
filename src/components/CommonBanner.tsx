import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MaxWidth from "./layout/MaxWidth";

interface CommonBannerProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs?: {
    name: string;
    href?: string;
  }[];
  button?: {
    text: string;
    href: string;
  };
}

export default function CommonBanner({
  label,
  title,
  description,
  breadcrumbs,
  button,
}: CommonBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#063F3D]">
      <MaxWidth className="relative  py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Label */}
          {label && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B972]">
              {label}
            </p>
          )}

          {/* Title */}
          <h1 className="mt-4 leading-tight tracking-tight text-white ">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              {description}
            </p>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mt-8 flex flex-wrap items-center gap-2 text-sm"
            >
              {breadcrumbs.map((item, index) => (
                <div key={`${item.name}-${index}`} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-white/30">/</span>
                  )}

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white/50 transition-colors hover:text-[#39B972]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-white">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Button */}
          {button && (
            <Link
              href={button.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#39B972] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2fa866]"
            >
              {button.text}

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </MaxWidth>
    </section>
  );
}