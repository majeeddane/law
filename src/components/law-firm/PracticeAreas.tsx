"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Gavel,
  Scale,
  FileText,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";

const practiceIcons = [Building2, Home, Gavel, Scale, FileText, Briefcase];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PracticeAreas() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  return (
    <section id="practice" className="relative py-24 sm:py-32 bg-white">
      {/* Subtle top border */}
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.practice.areas.map((area, i) => {
            const Icon = practiceIcons[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative p-6 lg:p-8 rounded-2xl border border-navy/8 bg-white hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-navy group-hover:text-gold-dark transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy">{area.title}</h3>

                {/* Description */}
                <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">
                  {area.description}
                </p>

                {/* Highlights */}
                <ul className="mt-5 space-y-2">
                  {area.highlights.map((h, j) => (
                    <li
                      key={j}
                      className={cn(
                        "flex items-center gap-2 text-sm text-charcoal/70",
                        isRTL && "flex-row-reverse text-right"
                      )}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
