// app/SmoothScrollWrapper.js
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction
      gestureDirection: "vertical", // Gesture direction for touch
      smoothTouch: false, // Disable smooth scrolling on touch devices (optional)
    });

    // Log initialization for debugging
    console.log("SmoothScrollWrapper initialized");

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      console.log("SmoothScrollWrapper destroyed");
      lenis.destroy();
    };
  }, []); // Empty dependency array to run only once per page load

  return <div>{children}</div>;
}