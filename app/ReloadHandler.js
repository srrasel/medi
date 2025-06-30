// app/ReloadHandler.js
"use client";
import { useEffect } from "react";

export default function ReloadHandler({ children }) {
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      // Check if the link is internal (starts with "/") and not external
      if (target && target.href && target.getAttribute("href")?.startsWith("/")) {
        e.preventDefault();
        window.location.href = target.href; // Force full page reload
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return <>{children}</>;
}