"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scale } from "lucide-react";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loader is visible
    document.body.classList.add("loading");

    // Start fade-out after 1.5s, fully unmount after 2s
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    const unmountTimer = setTimeout(() => {
      document.body.classList.remove("loading");
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => document.body.classList.remove("loading")}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#0A1F3D",
            zIndex: 9999,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Decorative radial glow behind icon */}
          <div
            className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)",
            }}
          />

          {/* Official Logo animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-32 md:h-48 w-auto object-contain filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Subtle pulsing ring */}
          <motion.div
            className="absolute w-40 h-40 rounded-full border pointer-events-none"
            style={{ borderColor: "rgba(200, 169, 106, 0.1)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
