"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.classList.add("loading");
    
    const fadeTimer = setTimeout(() => setIsVisible(false), 1800);
    const unmountTimer = setTimeout(() => document.body.classList.remove("loading"), 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.classList.remove("loading");
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#071428", zIndex: 9999 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)",
            }}
          />

          {/* Official Logo animation */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
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
              className="h-32 md:h-44 w-auto object-contain filter drop-shadow-2xl"
            />
            
            {/* Elegant Shine Swipe */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              initial={{ left: "-150%" }}
              animate={{ left: "150%" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Subtle pulsing ring */}
          <motion.div
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border pointer-events-none"
            style={{ borderColor: "rgba(200, 169, 106, 0.15)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0, 0.4, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Professionalism text */}
          <motion.div
            className="absolute bottom-12 text-gold/30 text-[9px] uppercase tracking-[0.5em] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Al-Musallam Law Firm
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
