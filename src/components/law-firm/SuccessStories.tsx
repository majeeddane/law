"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building2, Factory, Landmark } from "lucide-react";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { AnimatedCounter } from "@/components/law-firm/AnimatedCounter";

const testimonialIcons = [Building2, Factory, Landmark];

interface MetricCounterConfig {
  end: number;
  prefix: string;
  suffix: string;
  duration: number;
}

const metricConfigs: MetricCounterConfig[] = [
  { end: 98, prefix: "", suffix: "%", duration: 2000 },
  { end: 15, prefix: "", suffix: "B+", duration: 2500 },
  { end: 45, prefix: "", suffix: "+", duration: 2000 },
  { end: 12, prefix: "", suffix: "", duration: 1800 },
];

export function SuccessStories() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);

  const getCounterDisplay = (i: number): string => {
    if (lang === "ar") {
      return ["SAR ", "+", "+", ""][i];
    }
    return ["", "SAR ", "+", ""][i];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="stories" className="relative py-24 sm:py-32 bg-secondary/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4">
            {t.stories.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            {t.stories.title}
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            {t.stories.subtitle}
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.stories.testimonials.map((testimonial, i) => {
            const Icon = testimonialIcons[i] || Building2;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-navy/5 shadow-sm hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-gold/20 mb-6" />

                {/* Rating - 5 gold stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-charcoal/80 leading-relaxed text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Case badge */}
                <div className="mt-6">
                  <Badge
                    variant="secondary"
                    className="bg-navy/5 text-navy font-medium text-xs px-3 py-1.5 rounded-full"
                  >
                    {testimonial.case}
                  </Badge>
                </div>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-navy/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-navy/40" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust metrics banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 sm:p-12 rounded-2xl bg-navy text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stories.metrics.map((metric, i) => {
              const config = metricConfigs[i];
              const counterDisplay = getCounterDisplay(i);
              return (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-bold text-gold">
                    {i === 1 ? (
                      <>
                        <AnimatedCounter
                          end={config.end}
                          duration={config.duration}
                          prefix={counterDisplay}
                          suffix={config.suffix}
                        />
                        {lang === "ar" && (
                          <span className="text-lg mr-1 text-gold/70">
                            {"مليار ريال"}
                          </span>
                        )}
                      </>
                    ) : (
                      <AnimatedCounter
                        end={config.end}
                        duration={config.duration}
                        prefix={counterDisplay}
                        suffix={config.suffix}
                      />
                    )}
                  </div>
                  <div className="mt-2 text-sm text-white/50">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
