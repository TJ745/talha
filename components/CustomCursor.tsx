"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
    };

    const detectTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    // Track mouse + theme
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    detectTheme();

    // Track hover on links & buttons
    const clickableEls = document.querySelectorAll("a, button");
    clickableEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
      observer.disconnect();
      clickableEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  const baseSize = isHovering ? 70 : 35;
  const size = isClicked ? baseSize * 1.6 : baseSize;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-150 ease-out mix-blend-difference`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${position.x - size / 2}px, ${
          position.y - size / 2
        }px)`,
        backgroundColor: theme ? "#fff" : "", // always white!
      }}
    />
  );
}
