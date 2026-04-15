"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import {
  Scale,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-navy via-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold">
                {t.footer.ctaTitle}
              </h3>
              <p className="mt-3 text-white/60 text-lg">
                {t.footer.ctaSubtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold px-8 py-4 rounded-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:scale-[1.02]"
              >
                {t.footer.ctaBtn}
              </button>
              <a
                href="tel:+966506707007"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0506707007
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Scale className="w-6 h-6 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wide">
                  {lang === "ar" ? "المسلم" : "AL-MUSALLAM"}
                </span>
                <span className="text-xs text-gold/80 font-medium tracking-[0.15em] uppercase">
                  {lang === "ar" ? "للمحاماة" : "Law Firm"}
                </span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed max-w-sm text-sm">
              {t.footer.description}
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+966506707007"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                0506707007
              </a>
              <a
                href="mailto:info@mohamalmusallam.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors"
              >
                {lang === "ar" ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-none stroke-current"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-none stroke-current"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
                info@mohamalmusallam.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {t.contact.mapAddress}
                  <br />
                  {t.contact.mapAddress2}
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://x.com/mohamalmusallam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-white/40 group-hover:text-gold transition-colors"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(t.footer.links).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm tracking-wide mb-5 text-white/80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className="bg-white/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30">
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-gold transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-gold transition-colors"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-navy text-white shadow-xl shadow-navy/30 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300 z-40 border border-white/10"
        aria-label={lang === "ar" ? "العودة للأعلى" : "Back to top"}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
}
