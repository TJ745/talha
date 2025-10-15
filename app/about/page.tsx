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
    <section id="about" className="relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-4xl font-extrabold mb-2 font-montserrat"
          >
            {t("title")}
          </motion.h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mb-8">
          <motion.div
            className="flex flex-1 justify-center items-center"
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
          <div className="flex flex-2 flex-col justify-center items-center text-left">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-justify font-sans w-[80%]"
            >
              {t.raw("description")}
              <br />
              <br />
              {t("closing")}
              <br />
              <br />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <Image
                src="/images/sign.png"
                alt="signature"
                width={350}
                height={400}
              />
            </motion.div>
          </div>
        </div>
        <Resume />
      </div>
    </section>
  );
}

export default About;
