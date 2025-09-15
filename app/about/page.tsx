"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Resume from "@/components/Resume";
import { motion } from "framer-motion";

interface LocaleProps {
  locale: "en" | "ar";
}

function About({ locale }: LocaleProps) {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="relative w-full py-12 flex flex-col items-center justify-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col mb-8 ">
          <h3 className="text-3xl font-bold mb-2 text-blue-600">
            {t("title")}
          </h3>
          <p>{t("subtitle")}</p>
        </div>
        <div className="max-w-7xl grid items-center grid-cols-1 lg:grid-cols-2 mb-8 gap-8 lg:gap-0">
          <motion.div
            className="mx-auto hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Image
              src={"/images/About.jpeg"}
              alt="About Me"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            className="mx-auto lg:hidden block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Image
              src={"/images/About.jpeg"}
              alt="About Me"
              width={300}
              height={300}
            />
          </motion.div>
          <div className="max-w-5xl mx-auto flex flex-col justify-center">
            <div>
              <p className="text-justify">
                {t.raw("description")}
                <br />
                <br />
                {t("closing")}
                <br />
                <br />
              </p>
              <Image
                src="/images/sign.png"
                alt="signature"
                width={350}
                height={400}
              />
            </div>
          </div>
        </div>
        <Resume />
      </div>
    </section>
  );
}

export default About;
