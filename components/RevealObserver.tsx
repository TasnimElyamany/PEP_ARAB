"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" }
    );

    const observe = () => {
      document.querySelectorAll("[data-reveal]:not(.visible)").forEach((el) => io.observe(el));
    };

    // Run immediately, then again after paint + 300 ms to catch late-hydrating client components
    observe();
    requestAnimationFrame(() => { observe(); setTimeout(observe, 300); });

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return null;
}
