"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  id?: string;
  className?: string;
  particleCount?: number;
  lightColors?: string[];
  darkColors?: string[];
  speed?: number;
}

export default function SparklesCore({
  id,
  className = "",
  particleCount = 120,
  lightColors = ["#000000"], // light mode
  darkColors = ["#ffffff"], // dark mode
  speed = 0.5,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // ✅ Detect theme after hydration
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setTheme(isDarkMode ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!theme) return; // wait until theme is known

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const colors = theme === "dark" ? darkColors : lightColors;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 0 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);

    let raf: number;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });
      raf = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [theme, particleCount, speed, lightColors, darkColors]);

  return (
    <motion.canvas
      id={id}
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: theme ? 1 : 0 }} // fade in after theme detected
      transition={{ duration: 1.2 }}
    />
  );
}
