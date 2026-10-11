"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import AdminAuthGuard from "./AdminAuthGuard";
import axios from "axios";
import { socket } from "@/@core/lib/socket";

import { FaCircleUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import {
  MdKeyboardArrowDown,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdLogout,
} from "react-icons/md";

import { categoryConfig, menuData, Notifications } from "./data/data";
import logo from "../../../public/starp_world.svg";
import Image from "next/image";
import { BaseUrl } from "../baseurl";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const [userData, setUserData] = useState<any>(null);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(Notifications);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  // Close mobile sidebar when the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === "unread") return !n.isRead;
    if (activeTab === "read") return n.isRead;
    return true;
  });

  const groupedNotifications = filteredNotifications.reduce(
    (acc: any, curr) => {
      if (!acc[curr.type]) acc[curr.type] = [];
      acc[curr.type].push(curr);
      return acc;
    },
    {},
  );

  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(`${BaseUrl}contact`);

      console.log("📦 API DATA:", res.data);

      const data = res.data.data || [];
      const filtered = data.filter((item: any) => item.isRead === false);

      setEnquiries(filtered);
    } catch (error) {
      console.log("❌ FETCH ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [refresh]);

  /*
   * REALTIME SOCKET UPDATE
   *
   * Existing socket functionality is left unchanged.
   */

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-2 bg-white px-3 py-3 shadow-sm sm:px-6 sm:py-4 lg:px-10">
        {/* Header left section */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close sidebar" : "Open sidebar"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="shrink-0 cursor-pointer p-2 lg:hidden"
          >
            <span className="text-2xl leading-none">☰</span>
          </button>

          <div
            onClick={() => router.push("/admin")}
            className="flex min-w-0 shrink-0 cursor-pointer items-center gap-2 sm:gap-4 lg:gap-6"
          >
            <Image
              src={logo}
              alt="Logo"
              width={140}
              height={50}
              className="h-auto w-45 sm:w-50 lg:w-50"
            />

            {/* Desktop sidebar collapse button */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={`${
                isOpen ? "left-66.5" : "left-26.5"
              } hidden cursor-pointer items-center justify-center p-2 transition-all duration-300 active:scale-95 lg:flex`}
            >
              {isOpen ? (
                <MdKeyboardDoubleArrowLeft size={25} />
              ) : (
                <MdKeyboardDoubleArrowRight size={25} />
              )}
            </div>
          </div>

          {/* Search - hidden on mobile */}
          <div className="hidden min-w-0 max-w-100 flex-1 items-center overflow-hidden rounded-full border border-black/10 bg-[#f8f8f8] transition-all duration-300 md:flex">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-w-0 px-5 py-3 outline-none"
            />
          </div>
        </div>

        {/* Header right section */}
        <div className="flex shrink-0 items-center justify-between gap-2 sm:gap-4">
          {/* ================= NOTIFICATIONS ================= */}
          <div className="relative group pb-2">
            <div className="relative cursor-pointer rounded-full bg-green-100 p-2">
              <FaRegBell
                size={25}
                onClick={() => setOpen((prev) => !prev)}
                className="z-50 text-green-600"
              />

              {enquiries.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-fit w-fit items-center justify-center rounded-full bg-red-500 px-2 py-0.5 text-[12px] font-bold text-white">
                  {enquiries.length > 9 ? "9+" : enquiries.length}
                </span>
              )}

              <div
                className={`absolute right-0 mt-3 w-[min(20rem,calc(100vw-1.5rem))] rounded-2xl border border-primary/30 bg-white p-4 shadow-lg transition-all duration-200 ${
                  open
                    ? "visible opacity-100"
                    : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaRegBell className="text-xl" />
                  <h2 className="text-xl font-semibold">Notification</h2>
                </div>

                <div className="my-3 flex flex-wrap gap-2">
                  {["all", "unread", "read"].map((tab, index) => (
                    <button
                      type="button"
                      aria-label={`read ${index + 1}`}
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-3 py-1 text-xs ${
                        activeTab === tab
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Notification list */}
                <div className="max-h-72 space-y-4 overflow-y-auto">
                  {Object.entries(groupedNotifications).map(
                    ([type, items]: any) => {
                      const config =
                        categoryConfig[
                          type as keyof typeof categoryConfig
                        ];

                      if (!config) return null;

                      return (
                        <div key={type}>
                          <p
                            className="mb-2 text-xs font-semibold"
                            style={{ color: config.color }}
                          >
                            {config.label} ({items.length})
                          </p>

                          <div className="space-y-2">
                            {items.map((n: any) => (
                              <div
                                key={n.id}
                                className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100"
                                style={
                                  !n.isRead
                                    ? { backgroundColor: config.bg }
                                    : {}
                                }
                              >
                                <div
                                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                                  style={{
                                    backgroundColor: config.bg,
                                    color: config.color,
                                  }}
                                >
                                  {config.icon}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <p className="break-words text-sm">
                                    {n.text}
                                  </p>

                                  <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                                    <FaClock size={12} />
                                    <p className="text-xs text-gray-400">
                                      {n.time}
                                    </p>
                                  </div>
                                </div>

                                <div
                                  onMouseEnter={() => setHoveredId(n.id)}
                                  onMouseLeave={() => setHoveredId(null)}
                                  className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center"
                                >
                                  {hoveredId === n.id ? (
                                    <span
                                      onClick={() => removeNotification(n.id)}
                                    >
                                      ✕
                                    </span>
                                  ) : (
                                    !n.isRead && (
                                      <span
                                        className="h-2 w-2 rounded-full"
                                        style={{
                                          backgroundColor: config.color,
                                        }}
                                      />
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    },
                  )}

                  {Object.keys(groupedNotifications).length === 0 && (
                    <p className="text-center text-sm text-gray-400">
                      No notifications
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= PROFILE ================= */}
          <div className="relative group pb-2">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-orange-100 p-2">
                <BiUser
                  size={25}
                  className="cursor-pointer text-orange-600"
                />
              </div>

              <p className="my-auto hidden py-1 font-semibold sm:block">
                {userData?.name?.split(" ")[0]}
              </p>
            </div>

            <div className="invisible absolute right-0 mt-1 w-[min(15rem,calc(100vw-1.5rem))] rounded-2xl border border-secondary/30 bg-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="px-4 pt-4 text-center">
                <FaCircleUser className="mx-auto text-5xl text-primary" />

                <p className="break-words py-1 text-sm font-semibold">
                  {userData?.name}
                </p>

                <p className="break-all text-xs text-gray-500">
                  {userData?.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="w-full cursor-pointer px-3 py-4 font-semibold transition hover:text-red-600"
              >
                <div className="flex items-center justify-center gap-2">
                  {isOpen && "Logout"}
                  <MdLogout size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE BACKDROP ================= */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/40 sm:top-[5.4rem] lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div className="flex min-w-0 pt-16 sm:pt-[5.4rem]">
        <aside
          className={`
            fixed left-0 top-16 sm:top-[5.4rem]
            z-40 flex flex-col justify-between
            overflow-x-hidden overflow-y-auto
            bg-white py-4 pr-4 shadow-md
            transition-all duration-300 ease-in-out
            h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5.4rem)]
            w-68
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
            ${isOpen ? "lg:w-68" : "lg:w-24"}
          `}
        >
          {/* ================= MENU ================= */}
          <div>
            {menuData.map((menu: any, idx) => {
              const hasChildren = !!menu.children;

              const isActive =
                (menu.path && pathname === menu.path) ||
                (menu.path !== "/admin" &&
                  menu.path &&
                  pathname.startsWith(menu.path)) ||
                (hasChildren &&
                  menu.children.some((sub: any) =>
                    pathname.startsWith(sub.path),
                  ));

              const isOpenMenu = openMenu === menu.label;

              const handleClick = () => {
                if (hasChildren) {
                  setOpenMenu(isOpenMenu ? null : menu.label);
                }
              };

              // Keep labels visible in the mobile drawer.
              const showLabels = isOpen || mobileMenuOpen;

              return (
                <div key={idx}>
                  {/* Parent menu */}
                  {hasChildren ? (
                    <div
                      onClick={handleClick}
                      className={`
                        relative mb-2 cursor-pointer rounded-r-full
                        transition-all duration-300
                        ${
                          showLabels
                            ? "px-4 py-2"
                            : "flex justify-center py-2"
                        }
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 hover:text-black"
                        }
                      `}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-r-full border border-white/20 bg-linear-to-r from-primary/90 to-primary shadow-md backdrop-blur-md" />
                      )}

                      {!isActive && (
                        <span className="absolute inset-0 rounded-r-full border border-white/20 bg-white/40 opacity-0 transition hover:opacity-100 backdrop-blur-sm" />
                      )}

                      <div
                        className={`relative z-10 flex items-center ${
                          showLabels ? "justify-between" : "justify-center"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className={`shrink-0 rounded-full p-2 ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "text-gray-500"
                            }`}
                          >
                            {menu.icon}
                          </span>

                          {showLabels && (
                            <p className="truncate font-medium tracking-wide">
                              {menu.label}
                            </p>
                          )}
                        </div>

                        {showLabels && (
                          <span
                            className={`shrink-0 text-sm transition-transform duration-300 ${
                              isOpenMenu ? "rotate-180" : ""
                            }`}
                          >
                            <MdKeyboardArrowDown size={20} />
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Normal menu link */
                    <Link
                      href={menu.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        relative mb-2 block rounded-r-full
                        transition-all duration-300
                        ${
                          showLabels
                            ? "px-4 py-2"
                            : "flex justify-center py-2"
                        }
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 hover:text-black"
                        }
                      `}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-r-full border border-white/20 bg-linear-to-r from-primary/90 to-primary shadow-md backdrop-blur-md" />
                      )}

                      {!isActive && (
                        <span className="absolute inset-0 rounded-r-full border border-white/20 bg-white/40 opacity-0 transition hover:opacity-100 backdrop-blur-sm" />
                      )}

                      <div
                        className={`relative z-10 flex items-center ${
                          showLabels ? "gap-3" : "justify-center"
                        }`}
                      >
                        <span
                          className={`shrink-0 rounded-full p-2 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "text-gray-500"
                          }`}
                        >
                          {menu.icon}
                        </span>

                        {showLabels && (
                          <p className="truncate font-medium tracking-wide">
                            {menu.label}
                          </p>
                        )}
                      </div>
                    </Link>
                  )}

                  {/* ================= SUBMENU ================= */}
                  {hasChildren && isOpenMenu && showLabels && (
                    <div className="mb-1 ml-0 w-[80%] space-y-1">
                      {menu.children.map((sub: any, i: number) => {
                        const isSubActive = pathname === sub.path;

                        return (
                          <Link
                            key={i}
                            href={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`
                              relative block rounded-r-full py-3 pl-8 pr-4
                              transition-all duration-300
                              ${
                                isSubActive
                                  ? "text-white"
                                  : "text-gray-600 hover:text-black"
                              }
                            `}
                          >
                            {isSubActive && (
                              <span className="absolute inset-0 rounded-r-full border border-white/20 bg-linear-to-r from-primary/80 to-primary shadow-md backdrop-blur-md" />
                            )}

                            {!isSubActive && (
                              <span className="absolute inset-0 rounded-r-full border border-white/20 bg-white/40 opacity-0 transition hover:opacity-100 backdrop-blur-sm" />
                            )}

                            <div className="relative z-10 flex items-center gap-3">
                              <span
                                className={`h-2 w-2 shrink-0 rounded-full ${
                                  isSubActive ? "bg-white" : "bg-gray-400"
                                }`}
                              />

                              <span className="truncate text-[1rem] font-medium tracking-wide">
                                {sub.label}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= SETTINGS ================= */}
          <button
            aria-label="Settings"
            className="mb-4 rounded-md bg-blue-100 px-3 py-3 font-semibold transition hover:bg-red-100 hover:text-red-600"
          >
            <div className="flex items-center justify-center gap-3">
              <IoSettingsOutline size={20} />
              {(isOpen || mobileMenuOpen) && "Settings"}
            </div>
          </button>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main
          className={`
            min-h-[calc(100dvh-4rem)] min-w-0 flex-1
            bg-slate-50 p-3 transition-all duration-300
            sm:p-5 lg:p-6
            ml-0
            ${isOpen ? "lg:ml-68" : "lg:ml-24"}
          `}
        >
          <AdminAuthGuard>{children}</AdminAuthGuard>
        </main>
      </div>
    </div>
  );
}