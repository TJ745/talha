"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  education,
  experience,
  frontendSkills,
  backendSkills,
  sectionIcons,
} from "@/data/aboutData";
import { useTranslations } from "next-intl";

type TabItem = { title: React.ReactNode; content: React.ReactNode };

function ResumeTabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState<number>(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Resume sections"
        className="flex flex-wrap justify-center gap-3 mb-6"
      >
        {items.map((it, i) => (
          <button
            key={i}
            ref={i === 0 ? firstBtnRef : null}
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors  ${
              active === i
                ? "bg-black text-white dark:bg-gray-100 dark:text-black"
                : "bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white border dark:border-white dark:hover:bg-white dark:hover:text-black"
            }`}
          >
            {it.title}
          </button>
        ))}
      </div>

      {/* Panels */}
      {items.map((it, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          className={active === i ? "block" : "hidden"}
        >
          {it.content}
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  const {
    education: EducationIcon,
    experience: ExperienceIcon,
    personal: PersonalIcon,
    frontend: FrontendIcon,
    backend: BackendIcon,
  } = sectionIcons;
  const t = useTranslations("Resume");

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const items: TabItem[] = [
    // EDUCATION
    {
      title: (
        <div className="flex items-center gap-2">
          <EducationIcon className="text-xl" />
          <span>{t("Education")}</span>
        </div>
      ),
      content: (
        <div className="relative flex flex-col items-center mt-6 space-y-8 md:space-y-16">
          {/* vertical line (only desktop) */}
          <div className="hidden md:block absolute left-1/2 top-20 -bottom-5 w-[2px] dark:bg-gray-200 bg-black" />
          {education.map((e, idx) => {
            const Icon = e.icon;
            return (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                variants={fadeInUp}
                key={idx}
                className="relative flex flex-col md:flex-row items-center md:items-start w-full md:max-w-2xl"
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 dark:bg-gray-200 bg-black rounded-full -translate-x-[40%] top-16" />

                {/* Card */}
                <div
                  className={`w-full max-w-sm md:w-[350px] p-4 bg-transparent  shadow-md border  border-black dark:border-white rounded-xl ${
                    idx % 2 === 0
                      ? "md:mr-[calc(50%+20px)] md:ml-auto"
                      : "md:ml-[calc(50%+20px)]"
                  }`}
                >
                  <div className="flex items-center gap-4 ">
                    <Icon className="text-3xl text-black dark:text-white" />
                    <div>
                      <h5 className="text-lg font-semibold">{t(e.degree)}</h5>
                      <p className="text-sm text-gray-600">{t(e.school)}</p>
                      <span className="inline-block mt-2 bg-black text-white text-xs py-1 px-3 rounded dark:bg-white dark:text-black">
                        {t(e.period)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ),
    },

    // EXPERIENCE
    {
      title: (
        <div className="flex items-center gap-2">
          <ExperienceIcon className="text-xl" />
          <span>{t("Experience")}</span>
        </div>
      ),
      content: (
        <div className="relative flex flex-col items-center mt-6 space-y-8 md:space-y-16">
          <div className="hidden md:block absolute left-1/2 top-20 -bottom-5 w-[2px] bg-black dark:bg-gray-200" />
          {experience.map((ex, idx) => {
            const Icon = ex.icon;
            return (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                variants={fadeInUp}
                key={idx}
                className="relative flex flex-col md:flex-row items-center md:items-start w-full md:max-w-2xl"
              >
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-black dark:bg-gray-200 rounded-full -translate-x-[40%] top-16" />
                <div
                  className={`w-full max-w-sm md:w-[350px] p-4 bg-transparent  shadow-md border  border-black dark:border-white rounded-xl ${
                    idx % 2 === 0
                      ? "md:mr-[calc(50%+20px)] md:ml-auto"
                      : "md:ml-[calc(50%+20px)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="text-3xl text-black dark:text-white" />
                    <div>
                      <h5 className="text-lg font-semibold">{t(ex.role)}</h5>
                      <p className="text-sm text-gray-600">{t(ex.company)}</p>
                      <span className="inline-block mt-2 text-xs py-1 px-3 rounded bg-black text-white dark:bg-white dark:text-black">
                        {t(ex.period)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ),
    },

    // SKILLS
    {
      title: (
        <div className="flex items-center gap-2">
          <PersonalIcon className="text-xl" />
          <span>{t("Skills")}</span>
        </div>
      ),
      content: (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto"
        >
          {/* Frontend */}
          <div className="text-black dark:text-white border border-black dark:border-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FrontendIcon className="text-2xl" />
              <h4 className="text-lg font-semibold">{t("Front-End")}</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <Icon className="text-lg text-green-300" />
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <span className="text-xs text-gray-300">{s.level}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Backend */}
          <div className="text-black dark:text-white border border-black dark:border-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BackendIcon className="text-2xl" />
              <h4 className="text-lg font-semibold">{t("Back-End")}</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <Icon className="text-lg text-green-300" />
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <span className="text-xs text-gray-300">{s.level}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <ResumeTabs items={items} />
    </div>
  );
}
