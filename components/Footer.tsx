"use client";

import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-black/80 backdrop-blur py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 mb-16">
        <p>
          © {new Date().getFullYear()} {t("title")}
        </p>
        <p>{t("subtitle")}</p>
      </div>
    </footer>
  );
}

export default Footer;
