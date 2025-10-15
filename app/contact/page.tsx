"use client";
import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchat,
  FaX,
} from "react-icons/fa6";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface ContactProps {
  locale: "en" | "ar";
}

function Contact({ locale }: ContactProps) {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto py-12  flex flex-col items-center justify-center"
    >
      <motion.h1
        className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold uppercase"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {t("title")}
      </motion.h1>

      <motion.p
        className="max-w-2xl text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {t("subtitle1")}
      </motion.p>
      <motion.p
        className="max-w-2xl text-center text-sm sm:text-base text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {t("subtitle2")}
      </motion.p>
      <div className="w-full flex justify-center ">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row items-start  px-6">
          <motion.div
            className="w-full lg:w-1/2 block px-8 lg:py-10 py-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-semibold mb-6">{t("contact")}</h2>
            <p className="mb-4">
              <strong>{t("location")}</strong>
              <br />
              {t("locationValue")}
            </p>
            <p className="mb-4">
              <strong>{t("phone")}</strong>
              <br />
              +966 53 841 8406
            </p>
            <p className="mb-4">
              <strong>{t("email")}</strong>
              <br />
              talha_mughalz@hotmail.com
            </p>
          </motion.div>
          {/* Right Side */}
          <motion.div
            className="w-full lg:w-1/2 block px-8 lg:py-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col mb-6">
              <h3 className="text-xl font-semibold mb-3">{t("follow")}</h3>
              <div className="relative z-10 flex flex-wrap gap-6 lg:text-4xl text-2xl justify-center items-center py-2">
                <Link
                  href="https://github.com/TJ745"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com/in/talha-jamil-937b3b32"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://instagram.com/t_e_e.j_a_y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://snapchat.com/add/te3_j4y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSnapchat />
                </Link>
                <Link
                  href="https://discord.gg/teejay745"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </Link>
                <Link
                  href="https://x.com/yourtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaX />
                </Link>
              </div>
              <div className="flex gap-3">
                {/* <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-blue-600 bg-stone-400 dark:bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaFacebookF className="text-2xl" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-rose-600 bg-stone-400 dark:bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaInstagram className="text-2xl" />
                </Link>{" "}
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-yellow-600 bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaSnapchat className="text-2xl" />
                </Link>{" "}
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition hover:bg-gray-900 bg-stone-400 dark:bg-zinc-800 rounded-xl p-2 text-white"
                >
                  <FaTiktok className="text-2xl" />
                </Link> */}
              </div>
            </div>
            <div className="w-full border dark:border-white p-4 rounded-2xl">
              <div className="flex items-center mb-2">
                <FaClock className="inline-block text-xl text-gray-800 dark:text-white" />
                <h1 className="ml-2 mr-2">{t("availability")}</h1>
              </div>
              <p>{t("available")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
