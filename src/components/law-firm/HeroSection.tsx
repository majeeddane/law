"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Shield, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";

const statIcons = [Shield, Award, Users];

export function HeroSection() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
          }}
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            {t.hero.headline1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              {t.hero.headline2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:+966506707007">
              <Button
                size="lg"
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold text-base px-8 py-6 rounded-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:shadow-gold/30 hover:scale-[1.02] group"
              >
                <Phone
                  className={cn(
                    "w-5 h-5 transition-transform group-hover:scale-110",
                    isRTL ? "ml-2" : "mr-2"
                  )}
                />
                {t.hero.cta}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollTo("practice")}
              className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-base px-8 py-6 rounded-lg transition-all duration-300"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl"
        >
          {t.hero.stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
