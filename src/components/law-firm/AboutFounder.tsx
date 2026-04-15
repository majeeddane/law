"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Award,
  BookOpen,
  Scale,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const credentialIcons = [GraduationCap, BookOpen, Scale, Award];

export function AboutFounder() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-navy-dark overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/founder-portrait.png')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
              </div>

              {/* Credentials badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">25+</div>
                    <div className="text-xs text-muted-foreground">
                      {t.about.yearsLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold text-gold uppercase tracking-[0.2em] mb-4">
              {t.about.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {t.about.title1}
              <br />
              <span className="text-gold">{t.about.title2}</span>
            </h2>
            <div className="gold-line mt-6" />

            <p className="mt-8 text-white/60 text-lg leading-relaxed">
              {t.about.bio1}
            </p>

            <p className="mt-4 text-white/50 leading-relaxed">
              {t.about.bio2}
            </p>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.credentials.map((cred, i) => {
                const Icon = credentialIcons[i] || Award;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-sm">{cred.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Key achievements */}
            <div className="mt-8 space-y-3">
              {t.about.achievements.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button
                size="lg"
                onClick={() => handleScrollTo("contact")}
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold shadow-lg shadow-gold/20 transition-all duration-300 group"
              >
                {t.about.cta}
                <ArrowRight
                  className={cn(
                    "w-4 h-4 group-hover:translate-x-1 transition-transform",
                    lang === "ar" ? "ml-0 rtl-flip" : "ml-2"
                  )}
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
