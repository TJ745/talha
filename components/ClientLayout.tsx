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
  const [messages, setMessages] = useState<{ hello: string }>({ hello: "" });
  const pathname = usePathname();

  useEffect(() => {
    // Simulate loading for 1.5s (can be API check, session check, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    import(`../app/messages/${locale}.json`).then((mod) =>
      setMessages(mod.default)
    );
  }, [locale]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      <div
        className="flex  max-w-7xl mx-auto h-screen"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {/* Desktop View */}
        {/* Left Sidebar */}
        <aside className="hidden w-80 p-4  lg:flex flex-col justify-between pt-8 border-r border-gray-800 overflow-y-auto">
          <div>
            {/* User Info */}
            <div className="flex flex-col items-center ">
              <Image
                src="/images/avatar.jpg"
                width={100}
                height={100}
                alt="User"
                className="w-30 h-30 rounded-full mb-4"
              />
              <span className="text-2xl">Talha Jamil</span>
              <span className="font-light text-gray-500 text-sm">
                @talhajamil
              </span>
            </div>

            {/* Language & Theme */}
            <div className="flex items-center justify-between p-4 ">
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
            <hr className="mb-2" />
            {/* Navigation Buttons */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`p-2 rounded ${
                    pathname === link.href ? "bg-gray-600" : "hover:bg-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-center text-sm text-gray-400">
            <hr className="mb-4" />© 2025 Your Company
          </div>
        </aside>

        {/* Mobile Top Navbar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 dark:bg-black dark:text-white  p-4 flex items-center justify-between z-20">
          {/* Left: Profile */}
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="/images/avatar.jpg" // replace with your image
              alt="Profile"
              className="w-8 h-8 rounded-full border border-white"
            />
            <span className="font-medium">Talha Jamil</span>
          </div>

          {/* Middle: Buttons */}
          <div className="flex space-x-7">
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
                      width={24}
                      height={24}
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
                      width={24}
                      height={24}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <Music />
            <ThemeToggle />
          </div>

          {/* Right: Burger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* {isOpen ? <HiX size={28} /> : <HiMenu size={28} />} */}
            <HiMenu size={28} />
          </button>
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
        <main className="lg:flex-1 w-full overflow-auto mt-16 lg:mt-0">
          {children}
        </main>
      </div>
    </>
  );
}
