"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import CustomCursor from "./CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Music from "./Music";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<"en" | "ar">("en");
  // const [messages, setMessages] = useState<{ hello: string }>({ hello: "" });
  const pathname = usePathname();

  useEffect(() => {
    // Simulate loading for 1.5s (can be API check, session check, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   import(`../app/messages/${locale}.json`).then((mod) =>
  //     setMessages(mod.default)
  //   );
  // }, [locale]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      <div
        className=" max-w-full mx-auto h-screen "
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {/* Desktop View */}

        <div className="w-full border-b border-gray-800 bg-black/80 backdrop-blur fixed top-0 z-50">
          <div className="flex items-center justify-between px-4 py-3 lg:px-8">
            {/* User Info */}
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-semibold uppercase">
                Talha Jamil
              </span>
              <span className="font-light text-gray-500 text-sm">
                @talhajamil
              </span>
            </div>

            {/* Navigation Buttons */}
            <nav className="hidden lg:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 rounded-md ${
                    pathname === link.href
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language & Theme */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="relative w-8 h-8 overflow-hidden border border-gray-400 rounded-full shadow-md"
              >
                {/* {locale === "en" ? "Switch to AR" : "Switch to EN"} */}
                <AnimatePresence mode="wait">
                  {locale === "en" ? (
                    <motion.div
                      key="en"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src="/flags/uk.svg"
                        alt="English"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="ar"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src="/flags/sa.svg"
                        alt="Arabic"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <ThemeToggle />

              <Music />
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 text-2xl"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar (slide-in) */}
        <aside
          className={`fixed top-0 left-0 h-full w-full transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div
            className={`fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-full bg-black z-[1050] space-y-6 ${isOpen}`}
          >
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  key={link.href}
                  className="justify-center flex items-center"
                >
                  <p
                    className={`text-white w-fit text-3xl uppercase font-bold border-b-[1.5px] pb-1 border-gray-400 sm:text-[30px] cursor-pointer`}
                  >
                    {link.label}
                  </p>
                </Link>
              );
            })}
            {/* Close Icon */}
            <CgClose
              // onClick={closeNav}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white w-8 h-8"
            />
          </div>
        </aside>

        {/* Right Content */}
        <main className="lg:flex-1 w-full overflow-auto mt-16 lg:mt-0 scroll-smooth">
          {children}
        </main>
      </div>
    </>
  );
}
