"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Mail,
  Phone,
  MessageSquareText,
  ArrowUpRight,
} from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 z-[9999] sm:bottom-6 sm:right-6"
    >
      {/* ================= CHAT BOX ================= */}
      <div
        className={`
          absolute bottom-[72px] right-0
          w-[calc(100vw-40px)]
          max-w-[360px]

          overflow-hidden
          rounded-[20px]
          bg-white

          shadow-[0_20px_60px_rgba(0,0,0,0.18)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-5 scale-95 opacity-0"
          }
        `}
      >
        {/* Header */}
        <div className="bg-[#063F3D] px-5 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#39B972]">
                Strap World
              </p>

              <h3 className="mt-1 text-[21px] font-semibold leading-tight text-white">
                How can we help?
              </h3>

              <p className="mt-2 text-[13px] leading-5 text-white/70">
                Tell us about your PET strapping requirement.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-full
                bg-white/10
                text-white
                transition-colors
                hover:bg-white/20
              "
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2 p-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919978735708"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-3
              rounded-[12px]
              border border-gray-200
              p-3
              transition-all duration-300
              hover:border-[#39B972]/40
              hover:bg-[#F5FBF7]
            "
          >
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-[#E6F5EC]
                text-[#218B55]
              "
            >
              <MessageCircle className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-[#101820]">
                WhatsApp
              </p>

              <p className="text-[12px] text-[#647077]">
                Chat with our team
              </p>
            </div>

            <ArrowUpRight
              className="
                h-4 w-4
                text-[#39B972]
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* Email */}
          <a
            href="mailto:enquiry@strapworld.com"
            className="
              group flex items-center gap-3
              rounded-[12px]
              border border-gray-200
              p-3
              transition-all duration-300
              hover:border-[#39B972]/40
              hover:bg-[#F5FBF7]
            "
          >
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-[#E6F5EC]
                text-[#218B55]
              "
            >
              <Mail className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-[#101820]">
                Email us
              </p>

              <p className="truncate text-[12px] text-[#647077]">
                sales@strapworld.com
              </p>
            </div>

            <ArrowUpRight
              className="
                h-4 w-4
                text-[#39B972]
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* Call */}
          <a
            href="tel:+919978735708"
            className="
              group flex items-center gap-3
              rounded-[12px]
              border border-gray-200
              p-3
              transition-all duration-300
              hover:border-[#39B972]/40
              hover:bg-[#F5FBF7]
            "
          >
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-[#E6F5EC]
                text-[#218B55]
              "
            >
              <Phone className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-[#101820]">
                Call us
              </p>

              <p className="text-[12px] text-[#647077]">
                +91 997 873 5708
              </p>
            </div>

            <ArrowUpRight
              className="
                h-4 w-4
                text-[#39B972]
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* Enquiry */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);

              document
                .getElementById("enquiry")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
            }}
            className="
              group mt-2
              flex w-full
              items-center justify-center
              gap-2
              rounded-[12px]
              bg-[#39B972]
              px-4 py-3
              text-[13px]
              font-semibold
              text-white
              transition-all duration-300
              hover:bg-[#218B55]
            "
          >
            <MessageSquareText className="h-4 w-4" />

            Send an enquiry

            <ArrowUpRight
              className="
                h-4 w-4
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="
          group relative
          flex
          h-14 w-14
          sm:h-15 sm:w-15
          items-center justify-center

          rounded-full
          bg-[#39B972]
          text-white

          shadow-[0_8px_30px_rgba(33,139,85,0.35)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          hover:scale-110
          hover:bg-[#218B55]
        "
      >
        {/* Pulse */}
        {!isOpen && (
          <span
            className="
              absolute inset-0
              rounded-full
              bg-[#39B972]
              opacity-40
              animate-ping
            "
          />
        )}

        <span
          className={`
            relative z-10
            transition-all duration-300
            ${isOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"}
          `}
        >
          {isOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          ) : (
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ChatWidget;