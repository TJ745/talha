"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
};

export default function ScrollToTopButton({ scrollRef }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const toggle = () => {
      setVisible(el.scrollTop > 300);
    };

    el.addEventListener("scroll", toggle);
    return () => el.removeEventListener("scroll", toggle);
  }, [scrollRef]);

  const handleScroll = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scrollToTop"
            onClick={handleScroll}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-900 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center 
              shadow-lg focus:outline-none hover:bg-red-950 cursor-pointer"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
