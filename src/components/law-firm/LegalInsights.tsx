"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const categoryColors = [
  "bg-navy/10 text-navy",
  "bg-gold/10 text-gold-dark",
  "bg-charcoal/10 text-charcoal",
];

const articleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function LegalInsights() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  const quickLinkVariants = {
    hidden: { opacity: 0, x: isRTL ? 16 : -16 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="insights" dir={isRTL ? "rtl" : "ltr"} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* ─── Left Column: Header + Quick Links ─── */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
              {t.insights.label}
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {t.insights.title}
            </h2>

            <div className="gold-line mt-6" />

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.insights.subtitle}
            </p>

            {/* Quick Links */}
            <div className="mt-8 space-y-2">
              {t.insights.quickLinks.map((link, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={quickLinkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: "rgba(255, 248, 230, 0.5)" }}
                  className="group flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 transition-colors duration-300"
                >
                  <span className="text-sm font-medium text-charcoal transition-colors duration-300 group-hover:text-navy">
                    {link}
                  </span>
                  <motion.span
                    className="flex items-center justify-center"
                    whileHover={{
                      x: isRTL ? -3 : 3,
                      y: -3,
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 text-charcoal/30 transition-colors duration-300 group-hover:text-gold",
                        isRTL && "rtl-flip"
                      )}
                    />
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right Column: Article Cards ─── */}
          <div className="space-y-6 lg:col-span-2">
            {t.insights.articles.map((article, i) => (
              <motion.article
                key={i}
                custom={i}
                variants={articleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  borderColor: "rgba(218, 165, 32, 0.2)",
                  boxShadow:
                    "0 10px 30px -5px rgba(0,0,0,0.08), 0 4px 10px -4px rgba(0,0,0,0.04)",
                  y: -2,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="group cursor-pointer rounded-2xl border border-navy/5 p-6 lg:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Left: Badge + Meta */}
                  <div className="flex flex-col gap-2 sm:min-w-[160px] sm:items-start sm:gap-2">
                    <span
                      className={cn(
                        "inline-block self-start rounded-full px-3 py-1 text-center text-xs font-semibold",
                        categoryColors[i % categoryColors.length]
                      )}
                    >
                      {article.category}
                    </span>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:gap-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Right: Title + Excerpt + CTA */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-gold-dark">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <motion.span
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark"
                      whileHover={{ gap: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {t.insights.readArticle}
                      <ArrowRight
                        className={cn("h-4 w-4", isRTL && "rtl-flip")}
                      />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
