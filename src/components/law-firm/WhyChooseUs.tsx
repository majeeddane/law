"use client";

import { motion } from "framer-motion";
import { Shield, Heart, BookOpen, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import {
  StaggerContainer,
  staggerChild,
} from "@/components/law-firm/ParallaxSection";

const featureIcons = [Shield, Heart, BookOpen, Trophy];

export function WhyChooseUs() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-navy overflow-hidden">
      {/* Decorative radial glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(200,169,106,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(200,169,106,0.25) 0%, transparent 70%)",
        }}
      />

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-sm font-semibold text-gold uppercase tracking-[0.2em] mb-4">
            {t.whyUs.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.12}
        >
          {t.whyUs.features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={i}
                variants={staggerChild}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative rounded-2xl p-6 lg:p-8 cursor-default"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(200, 169, 106, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.25)";
                  e.currentTarget.style.boxShadow = "0 20px 60px -15px rgba(200, 169, 106, 0.15), 0 0 0 1px rgba(200, 169, 106, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Gold top accent line (hidden by default, visible on hover) */}
                <div
                  className={cn(
                    "absolute top-0 left-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500",
                    isRTL ? "right-1/2 left-auto" : "left-1/2",
                    "w-0 group-hover:w-3/4",
                    "translate-x-[-50%]"
                  )}
                />

                {/* Icon container */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500",
                    "bg-white/5 group-hover:bg-gold/15"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-7 h-7 transition-colors duration-500",
                      "text-gold/60 group-hover:text-gold"
                    )}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className={cn(
                    "text-lg font-bold text-white mb-3 transition-colors duration-500 group-hover:text-gold-light"
                  )}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={cn(
                    "text-white/50 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/70"
                  )}
                >
                  {feature.description}
                </p>

                {/* Bottom decorative dot */}
                <div
                  className={cn(
                    "absolute bottom-5",
                    isRTL ? "left-6" : "right-6",
                    "w-1.5 h-1.5 rounded-full bg-gold/0 group-hover:bg-gold/40 transition-colors duration-500"
                  )}
                />
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
