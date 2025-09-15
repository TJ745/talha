"use client";

import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import { NextIntlClientProvider } from "next-intl";
import en from "@/app/messages/en.json";
import ar from "@/app/messages/ar.json";
import Hero from "@/app/hero/page";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "@/app/projects/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState<"en" | "ar">("en");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as "en" | "ar" | null;
    if (storedLocale) {
      setLocale(storedLocale);
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollTop = 0;
  //   }
  // }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  const messages = locale === "ar" ? ar : en;

  // return (
  //   <>
  //     <CustomCursor />
  //     <div
  //       className="relative h-screen border-[24px] border-gray-300 dark:border-gray-700 overflow-hidden shadow-2xl"
  //       dir={locale === "ar" ? "rtl" : "ltr"}
  //     >
  //       <NextIntlClientProvider locale={locale} messages={messages}>
  //         <div className="w-full">
  //           <Navbar
  //             locale={locale}
  //             setLocale={setLocale}
  //             scrollRef={scrollRef}
  //           />
  //         </div>
  //         <main
  //           className="h-full w-full overflow-y-auto scroll-smooth "
  //           ref={scrollRef}
  //         >
  //           <Hero locale={locale} />
  //           <About locale={locale} />
  //           <Contact locale={locale} />
  //           <Footer />
  //         </main>
  //         <ScrollToTopButton scrollRef={scrollRef} />
  //       </NextIntlClientProvider>
  //     </div>
  //   </>
  // );

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="layout"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-screen border-[24px] border-gray-300 dark:border-gray-700 overflow-hidden shadow-2xl"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <NextIntlClientProvider locale={locale} messages={messages}>
              {/* Navbar */}
              <Navbar
                locale={locale}
                setLocale={setLocale}
                scrollRef={scrollRef}
              />

              {/* Scrollable content */}
              <main
                className="h-full w-full overflow-y-auto scroll-smooth"
                ref={scrollRef}
              >
                <Hero locale={locale} />
                <About locale={locale} />
                <Projects locale={locale} />
                <Contact locale={locale} />
                <Footer />
              </main>

              {/* Scroll-to-top button */}
              <ScrollToTopButton scrollRef={scrollRef} />
            </NextIntlClientProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
