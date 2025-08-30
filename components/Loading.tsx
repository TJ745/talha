"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none noise"></div>

      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines"></div>

      {/* Glitching text */}
      <h1
        className="relative text-5xl font-bold glitch z-30 select-none"
        data-text="Loading..."
      >
        Loading...
      </h1>
    </motion.div>
  );
}
