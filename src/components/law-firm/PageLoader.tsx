"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("loading");
    const fadeTimer = setTimeout(() => setIsVisible(false), 2500);
    const unmountTimer = setTimeout(() => document.body.classList.remove("loading"), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.classList.remove("loading");
    };
  }, []);

  // Simple particle system
  const particles = Array.from({ length: 20 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#071428", zIndex: 9999 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Background Particles (Gold Dust) */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, Math.random() * -100 - 50 + "px"],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: Math.random() * 2 + 2, 
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Background Glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(200, 169, 106, 0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* The Cinematic Beam Reveal */}
          <div className="relative flex items-center justify-center">
            {/* Horizontal Gold Beam */}
            <motion.div
              className="absolute h-[1px] bg-gold z-20"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }}
              style={{ boxShadow: "0 0 20px #C8A96A" }}
            />

            {/* Logo with Reveal Mask */}
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-32 md:h-48 w-auto object-contain filter drop-shadow-[0_0_30px_rgba(200,169,106,0.3)]"
              />
              
              {/* Vertical Shine Sweep */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                initial={{ left: "-150%" }}
                animate={{ left: "150%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Floating Text Hint (Optional/Subtle) */}
          <motion.div
            className="mt-12 text-gold/40 text-[10px] uppercase tracking-[0.4em] font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Professionalism & Integrity
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
