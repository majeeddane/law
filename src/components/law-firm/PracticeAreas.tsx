"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Home,
  Gavel,
  Scale,
  FileText,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import {
  StaggerContainer,
  staggerChild,
} from "@/components/law-firm/ParallaxSection";

const practiceIcons = [Building2, Home, Gavel, Scale, FileText, Briefcase];

export function PracticeAreas() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="practice" className="relative py-24 sm:py-32 bg-white">
      {/* Subtle top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4">
            {t.practice.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            {t.practice.title}
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            {t.practice.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.1}
        >
          {t.practice.areas.map((area, i) => {
            const Icon = practiceIcons[i];
            const isExpanded = activeCard === i;

            return (
              <motion.div
                key={i}
                variants={staggerChild}
                whileHover={{ y: -4 }}
                onClick={() => toggleCard(i)}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "group relative rounded-2xl border bg-white p-6 lg:p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5 cursor-pointer select-none",
                  isExpanded ? "border-gold/40 shadow-lg shadow-navy/5" : "border-navy/8"
                )}
              >
                {/* Header with Icon and Chevron */}
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300",
                    isExpanded ? "bg-gold/15" : "bg-navy/5 group-hover:bg-gold/10"
                  )}>
                    <Icon className={cn(
                      "w-7 h-7 transition-colors duration-300",
                      isExpanded ? "text-gold-dark" : "text-navy group-hover:text-gold-dark"
                    )} />
                  </div>
                  
                  {/* Chevron indicator for mobile/hint */}
                  <div className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100",
                    isExpanded ? "border-gold bg-gold text-white rotate-180" : "border-navy/10 text-navy/30"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy">{area.title}</h3>

                {/* Read more hint (visible on mobile only) */}
                {!isExpanded && (
                  <span className="inline-block mt-3 text-xs font-semibold text-gold-dark/60 lg:hidden uppercase tracking-wider">
                    {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </span>
                )}

                {/* Content - Expands on hover (desktop) or click (mobile) */}
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 lg:group-hover:max-h-96 lg:group-hover:opacity-100 lg:group-hover:mt-4"
                )}>
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {area.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2">
                    {area.highlights.slice(0, 4).map((h, j) => (
                      <li
                        key={j}
                        className={cn(
                          "flex items-center gap-2 text-sm text-charcoal/70",
                          isRTL && "text-right"
                        )}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
