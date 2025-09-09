"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // disable auto scroll restore
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); // force Hero
  }, []);

  return null;
}
