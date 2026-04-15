"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const categoryColors = [
  "bg-navy/10 text-navy",
  "bg-gold/10 text-gold-dark",
  "bg-charcoal/10 text-charcoal",
];

export function LegalInsights() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Header + Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <span className="inline-block text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4">
              {t.insights.label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              {t.insights.title}
            </h2>
            <div className="gold-line mt-6" />
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              {t.insights.subtitle}
            </p>

            {/* Quick links */}
            <div className="mt-8 space-y-3">
              {t.insights.quickLinks.map((link, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-secondary/50 cursor-pointer group transition-colors"
                >
                  <span className="text-sm font-medium text-charcoal group-hover:text-navy transition-colors">
                    {link}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "w-4 h-4 text-charcoal/30 group-hover:text-gold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      lang === "ar" && "rtl-flip"
                    )}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Articles */}
          <div className="lg:col-span-2 space-y-6">
            {t.insights.articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 lg:p-8 rounded-2xl border border-navy/5 hover:border-gold/20 transition-all duration-500 hover:shadow-lg hover:shadow-navy/5 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Category & meta */}
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2 sm:min-w-[160px]">
                    <Badge
                      className={cn(
                        categoryColors[i % categoryColors.length],
                        "border-0 text-xs font-semibold px-3 py-1"
                      )}
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground sm:flex-col sm:gap-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark group-hover:gap-2 transition-all">
                      {t.insights.readArticle}
                      <ArrowRight
                        className={cn(
                          "w-4 h-4",
                          lang === "ar" && "rtl-flip"
                        )}
                      />
                    </div>
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
