"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface LocaleProps {
  locale: "en" | "ar";
}

function About({ locale }: LocaleProps) {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="relative w-full py-12  flex flex-col items-center justify-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col mb-8 ">
          <h3 className="text-3xl font-bold mb-2 text-blue-600">
            {t("title")}
          </h3>
          <p>{t("subtitle")}</p>
        </div>
        <div className="flex justify-center items-center gap-x-[75px]">
          <div className="max-w-5xl flex flex-col justify-center">
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
      </div>
    </section>
  );
}

export default About;
