"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number; // typing speed per letter (ms)
  deleteSpeed?: number; // deleting speed per letter (ms)
  delayBetween?: number; // pause before deleting (ms)
  className?: string;
}

export default function Typewriter({
  words,
  speed = 120,
  deleteSpeed = 80,
  delayBetween = 1500,
  className = "mt-6 text-2xl dark:text-[#AAAAAA] text-black font-sans",
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0); // loop back
      return;
    }

    if (!deleting && subIndex === words[index].length) {
      // finished typing → wait before deleting
      const timeout = setTimeout(() => setDeleting(true), delayBetween);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      // finished deleting → move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, deleteSpeed, delayBetween]);

  return (
    <div className="flex items-center">
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {words[index].substring(0, subIndex)}
      </motion.span>

      {/* Blinking cursor */}
      <motion.span
        className="mt-6 ml-1 h-[1.2em] w-[2px] bg-white"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </div>
  );
}
