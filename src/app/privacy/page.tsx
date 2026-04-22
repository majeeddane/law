"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/law-firm/Header";
import { Footer } from "@/components/law-firm/Footer";
import { LanguageProvider } from "@/components/law-firm/LanguageProvider";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  );
}

function PrivacyContent() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" dir={isRTL ? "rtl" : "ltr"}>
          {/* Back button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gold-dark hover:text-gold transition-colors mb-12 font-medium"
          >
            {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {t.legal.backToHome}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-gold-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.legal.privacy.title}
            </h1>
            <p className="text-muted-foreground font-medium">
              {t.legal.privacy.lastUpdated}
            </p>
            <div className="gold-line mt-8" />
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {t.legal.privacy.sections.map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-navy/5 shadow-sm"
              >
                <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-sm text-gold-dark">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-charcoal/80 leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-20 p-8 rounded-2xl bg-navy text-white text-center">
            <p className="text-white/70">
              {isRTL 
                ? "لأي استفسارات بخصوص سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني."
                : "For any inquiries regarding this privacy policy, please contact us via email."}
            </p>
            <a href="mailto:info@mohamalmusallam.com" className="text-gold hover:text-gold-light font-bold mt-2 inline-block">
              info@mohamalmusallam.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
