// app/SmoothScrollWrapper.js
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // Faster scroll duration (reduced from 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t)), // More responsive easing
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 1.5, // Better touch response
      infinite: false,
    });

    // Optimized animation frame loop
    let animationFrameId;
    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
}