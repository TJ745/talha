"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navLinks";
import { HiMenu, HiX } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Music from "@/components/Music";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface NavbarProps {
  locale: "en" | "ar";
  setLocale: (locale: "en" | "ar") => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function Navbar({ locale, setLocale, scrollRef }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const handleScroll = (id: string) => {
    const section = scrollRef.current?.querySelector(`#${id.replace("#", "")}`);
    if (section && scrollRef.current) {
      const navbarHeight = 80; // h-16 = 64px
      const sectionTop =
        section.getBoundingClientRect().top + scrollRef.current.scrollTop;
      scrollRef.current.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-2xl font-bold uppercase text-gray-900 dark:text-white"
        >
          {t("Logo")}
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleScroll(link.href)}
              className={`text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 relative
                ${
                  pathname === link.href
                    ? "font-semibold"
                    : "hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              <span className="after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                {t(link.label)}
              </span>
            </Link>
          ))}
        </nav>

        {/* Language & Theme */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full overflow-hidden"
          >
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
                    className="object-cover h-full w-full"
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
                    className="object-cover h-full w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <ThemeToggle />
          <Music />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-300 text-2xl mr-2"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-screen w-full inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-10"
          >
            {/* Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-white text-4xl font-bold uppercase hover:text-blue-500 transition-colors flex justify-center items-center"
              >
                {t(link.label)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
