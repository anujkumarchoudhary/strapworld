"use client";
import React, { useEffect, useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/starp_world.svg";

import Image from "next/image";
import { menuData } from "@/src/data/menu";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";
import Icon from "@/src/utills/iconMap ";
import { MdClose, MdMarkEmailUnread, MdPhone, MdPhonelinkRing } from "react-icons/md";
import SaveAndCancel from "../common/SaveAndCancel";
import GetEnquiryForm from "../form/GetEnquiryForm";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { VscDebugStop } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";




const Header = () => {
  const router = useRouter();
  const [showTopBar, setShowTopBar] = useState(true);
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigation = (link: string) => {
    setOpen(false);
    router.push(link);
  };

  const handleHome = () => {
    setOpen(false);
    router.push("/");
  };

  const handleQuote = () => {
    setOpen(false);
    setOpenForm(true);
  };

  //   useEffect(() => {
  //   let lastScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Always show at the very top
  //     if (currentScrollY <= 10) {
  //       setShowTopBar(true);
  //     }
  //     // Hide while scrolling down
  //     else if (currentScrollY > lastScrollY) {
  //       setShowTopBar(false);
  //     }
  //     // Show while scrolling up
  //     else if (currentScrollY < lastScrollY) {
  //       setShowTopBar(true);
  //     }

  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* =========================================================
          DESKTOP TOP BAR
      ========================================================= */}
      <motion.div
        initial={false}
        animate={{
          height: showTopBar ? "auto" : 0,
          opacity: showTopBar ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="hidden overflow-hidden border-b border-[#29414E] bg-[#063F3D] lg:block"
      >
        <MaxWidth className="flex flex-col gap-2 lg:py-1 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Information */}
          <div className="hidden flex-wrap justify-between gap-3 sm:gap-4 lg:flex lg:items-center">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="shrink-0 text-white" />

              <p className="my-auto font-montserrat text-[clamp(11px,0.7vw,14px)] text-[#DCE5E8]">
                INDIA-BASED MANUFACTURER
              </p>
            </div>

            <div className="flex items-center gap-2">
              <VscDebugStop
                className="shrink-0 text-white"
                style={{ animationDelay: "10s" }}
              />

              <p className="my-auto font-montserrat text-[clamp(12px,0.7vw,14px)] text-[#DCE5E8]">
                GSTIN - 24ADUFS1418B1Z8
              </p>
            </div>
          </div>

          {/* Right Contact */}
          <div className="flex flex-wrap justify-between gap-3 sm:gap-4 lg:items-center">
            <a
              href="tel:+919978735708"
              className="flex items-center gap-2"
            >
              <MdPhone className="shrink-0 animate-contact-attention text-white" />

              <p className="my-auto font-montserrat text-[clamp(14px,1.2vw,16px)] text-[#DCE5E8]">
                +91 997 873 5708
              </p>
            </a>

            <a
              href="mailto:sales@strapworld.com"
              className="flex items-center gap-2"
            >
              <MdMarkEmailUnread
                className="shrink-0 animate-contact-attention text-white"
                style={{ animationDelay: "10s" }}
              />

              <p className="my-auto font-montserrat text-[clamp(14px,1.2vw,16px)] text-[#DCE5E8]">
                sales@strapworld.com
              </p>
            </a>
          </div>
        </MaxWidth>
      </motion.div>
      {/* =========================================================
          MAIN HEADER
      ========================================================= */}
      <MaxWidth className="flex items-center justify-between py-3 lg:py-3">
        {/* Logo */}
        <motion.div
          whileTap={{ scale: 0.97 }}
          onClick={handleHome}
          className="cursor-pointer"
        >
          <Image
            src={logo}
            width={275}
            height={40}
            alt="Strap World"
            priority
            style={{
              width: "clamp(180px, 18vw, 225px)",
              height: "auto",
            }}
          />
        </motion.div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <div className="hidden items-center gap-2 lg:flex">
          {menuData?.map((menu, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => router.push(menu.link)}
              className="group relative mx-4 cursor-pointer py-2 font-montserrat text-[clamp(11px,0.85vw,16px)] font-normal capitalize text-[#000000]"
            >
              {menu.title}

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#39B972] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Desktop Quote */}
        <div className="hidden lg:flex lg:gap-8">
          <SaveAndCancel
            saveText="Get a Quote"
            handleClick={() => setOpenForm(!openForm)}
          />
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <div className="lg:hidden">
          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#063F3D] text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <MdClose size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <IoReorderThreeSharp size={27} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </MaxWidth>

      {/* =========================================================
          MOBILE DRAWER
      ========================================================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-[#063F3D]/30 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
              className="fixed right-0 top-0 z-[70] flex h-dvh w-full flex-col bg-white lg:hidden sm:max-w-[430px]"
            >
              {/* =================================================
                  DRAWER HEADER
              ================================================= */}
              <div className="flex shrink-0 items-center justify-between border-b border-[#063F3D]/10 px-5 py-3">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  onClick={handleHome}
                  className="cursor-pointer"
                >
                  <Image
                    src={logo}
                    width={225}
                    height={40}
                    alt="Strap World"
                    className="h-auto w-[185px]"
                  />
                </motion.div>

                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#063F3D] text-white"
                >
                  <MdClose size={25} />
                </motion.button>
              </div>

              {/* =================================================
                  CONTACT INFORMATION
              ================================================= */}
              <div className="shrink-0 bg-[#F7F9F5] px-5 py-5">
                <p className="mb-3 font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-[#2E9B4F]">
                  Contact Us
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {/* Phone */}
                  <a
                    href="tel:+919978735708"
                    className="flex items-center gap-3 rounded-xl border border-[#063F3D]/10 bg-white px-4 py-3 transition-all duration-300 hover:border-[#39B972]/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#063F3D] text-white">
                      <FaPhoneAlt size={14} />
                    </span>

                    <div>
                      <p className="font-montserrat text-[10px] font-medium uppercase tracking-wide text-black/45">
                        Call Us
                      </p>

                      <p className="mt-0.5 font-montserrat text-sm font-semibold text-[#063F3D]">
                        +91 997 873 5708
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:sales@strapworld.com"
                    className="flex items-center gap-3 rounded-xl border border-[#063F3D]/10 bg-white px-4 py-3 transition-all duration-300 hover:border-[#39B972]/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#39B972] text-white">
                      <MdMarkEmailUnread size={17} />
                    </span>

                    <div className="min-w-0">
                      <p className="font-montserrat text-[10px] font-medium uppercase tracking-wide text-black/45">
                        Email Us
                      </p>

                      <p className="mt-0.5 truncate font-montserrat text-sm font-semibold text-[#063F3D]">
                        sales@strapworld.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <p className="mb-2 px-1 font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                  Navigation
                </p>

                <nav className="flex flex-col">
                  {menuData?.map((menu, idx) => (
                    <motion.button
                      key={idx}
                      type="button"
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + idx * 0.06,
                        duration: 0.3,
                      }}
                      onClick={() => handleNavigation(menu.link)}
                      className="group flex w-full items-center justify-between border-b border-[#063F3D]/10 py-4 text-left"
                    >
                      <span className="flex items-center gap-3 font-montserrat text-lg font-semibold capitalize text-[#063F3D]">
                        <span className="text-[10px] font-bold text-[#39B972]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>

                        {menu.title}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full text-[#063F3D]/30 transition-all duration-300 group-hover:bg-[#39B972] group-hover:text-white">
                        <FiArrowUpRight
                          size={19}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* =================================================
                  BOTTOM CTA + SOCIAL
              ================================================= */}
              <div className="shrink-0 border-t border-[#063F3D]/10 bg-white px-5 py-5">
                {/* Quote Button */}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={handleQuote}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#063F3D] px-6 py-4 font-montserrat text-sm font-bold text-white transition-colors duration-300 hover:bg-[#39B972]"
                >
                  Get a Quote
                  <FiArrowUpRight size={18} />
                </motion.button>

                {/* Social */}
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                    Follow Strap World
                  </p>

                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#063F3D]/20 text-[#063F3D] transition-all duration-300 hover:bg-[#063F3D] hover:text-white"
                    >
                      <Icon name="FaLinkedinIn" size={15} />
                    </a>

                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#063F3D]/20 text-[#063F3D] transition-all duration-300 hover:bg-[#063F3D] hover:text-white"
                    >
                      <Icon name="FaInstagram" size={15} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#063F3D]/20 text-[#063F3D] transition-all duration-300 hover:bg-[#063F3D] hover:text-white"
                    >
                      <Icon name="FaTwitter" size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =========================================================
          ENQUIRY FORM
      ========================================================= */}
      <GetEnquiryForm
        isOpen={openForm}
        handleClose={() => setOpenForm(false)}
      />
    </div>
  );
};

export default Header;
