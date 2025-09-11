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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  const messages = locale === "ar" ? ar : en;

  return (
    <>
      <CustomCursor />
      <div
        className="relative h-screen border-[24px] border-gray-300 dark:border-gray-700 overflow-hidden shadow-2xl"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="w-full">
            <Navbar
              locale={locale}
              setLocale={setLocale}
              scrollRef={scrollRef}
            />
          </div>
          <main
            className="h-full w-full overflow-y-auto scroll-smooth "
            ref={scrollRef}
          >
            <Hero locale={locale} />
            <About locale={locale} />
            <Contact locale={locale} />
            <Footer />
          </main>
        </NextIntlClientProvider>
      </div>
    </>
  );
}
