"use client";

import {
  GraduationCap,
  BookOpen,
  Scale,
  Award,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/law-firm/AnimatedCounter";
import { RevealOnScroll } from "@/components/law-firm/ParallaxSection";

const credentialIcons = [GraduationCap, BookOpen, Scale, Award];

export function AboutFounder() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="gradient-dark-radial relative py-28 sm:py-36 overflow-hidden"
    >
      {/* Subtle brand pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/images/brand-pattern.svg')",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow decorations */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Top edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ─── Image Column ─── */}
          <RevealOnScroll direction={isRTL ? "right" : "left"}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Founder portrait */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/15 shadow-2xl shadow-black/40">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/founder-portrait.png')",
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />

                {/* Decorative corner — top-right gold border accent */}
                <div
                  className={cn(
                    "absolute top-0 w-20 h-20 border-t-2 border-l-2 border-gold/15 pointer-events-none",
                    isRTL ? "left-0 border-l-2 border-r-0" : "right-0 border-r-2 border-l-0"
                  )}
                  style={{
                    [isRTL ? "borderLeftWidth" : "borderRightWidth"]: "2px",
                    borderTopWidth: "2px",
                  }}
                />
              </div>

              {/* Floating glass badge with years counter */}
              <div className="absolute -bottom-6 right-4 lg:-right-6 z-20">
                <div className="glass rounded-2xl px-6 py-4 shadow-2xl border border-white/10 bg-[#0A1F3D]/60 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white tracking-tight leading-none">
                        <AnimatedCounter end={25} duration={2000} suffix="+" />
                      </span>
                      <span className="text-xs text-gold font-medium mt-1 whitespace-nowrap">
                        {t.about.yearsLabel}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ─── Text Column ─── */}
          <RevealOnScroll direction={isRTL ? "left" : "right"} delay={0.15}>
            <div>
              {/* Label */}
              <span className="inline-block text-gold uppercase tracking-[0.2em] text-[13px] font-semibold mb-5">
                {t.about.label}
              </span>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-white tracking-tight leading-[1.15]">
                {t.about.title1}
                <span className="text-gold"> {t.about.title2}</span>
              </h2>

              {/* Gold line divider */}
              <div className="gold-line mt-7" />

              {/* Bio */}
              <p className="mt-8 text-white/50 text-lg leading-relaxed">
                {t.about.bio1}
              </p>
              <p className="mt-4 text-white/35 text-base leading-relaxed">
                {t.about.bio2}
              </p>

              {/* Credentials — 2-column grid */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.credentials.map((cred, i) => {
                  const Icon = credentialIcons[i] || Award;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-sm text-white/60">{cred.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Achievements */}
              <div className="mt-8 space-y-3.5">
                {t.about.achievements.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button
                  onClick={() => handleScrollTo("contact")}
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl",
                    "bg-gold text-navy-dark font-bold text-sm",
                    "hover:bg-gold-light transition-all duration-300",
                    "shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-[1.03]",
                    "active:scale-[0.98]"
                  )}
                >
                  {t.about.cta}
                  <ArrowLeft
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isRTL ? "rotate-0 mr-1" : "rotate-180 ml-1"
                    )}
                  />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
