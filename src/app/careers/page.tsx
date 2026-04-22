"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/law-firm/Header";
import { Footer } from "@/components/law-firm/Footer";
import { LanguageProvider } from "@/components/law-firm/LanguageProvider";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Users,
  GraduationCap,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CareersPage() {
  return (
    <LanguageProvider>
      <CareersContent />
    </LanguageProvider>
  );
}

function CareersContent() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  const icons = [Users, GraduationCap, Sparkles];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                {t.careers.label}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {t.careers.title}
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {t.careers.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", isRTL && "lg:flex-row-reverse")}>
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  {t.careers.whyJoin.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  {t.careers.whyJoin.description}
                </p>
                
                <div className="space-y-8">
                  {t.careers.whyJoin.features.map((feature, i) => {
                    const Icon = icons[i];
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-gold-dark" />
                        </div>
                        <div>
                          <h4 className="font-bold text-navy text-lg">{feature.title}</h4>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/images/founder-portrait.png" 
                  alt={isRTL ? "مؤسس المكتب" : "Firm Founder"}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-navy/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                {t.careers.positions.title}
              </h2>
              <div className="gold-line mx-auto" />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {t.careers.positions.items.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "group p-8 rounded-2xl border border-navy/5 bg-white hover:border-gold/30 hover:shadow-xl transition-all duration-500",
                    isRTL ? "text-right" : "text-left"
                  )}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 bg-navy/5 px-3 py-1 rounded-full">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 bg-navy/5 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {isRTL ? "منذ يومين" : "2 days ago"}
                        </span>
                      </div>
                      <p className="mt-4 text-charcoal/70 max-w-2xl">
                        {job.description}
                      </p>
                    </div>
                    
                    <a 
                      href="mailto:careers@mohamalmusallam.com"
                      className="bg-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-navy transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold/20"
                    >
                      {isRTL ? "قدم الآن" : "Apply Now"}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* General CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-navy rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">{t.careers.cta.title}</h2>
                <p className="text-white/60 mb-10 text-lg">
                  {t.careers.cta.subtitle}
                </p>
                <a 
                  href="mailto:careers@mohamalmusallam.com"
                  className="bg-gold text-navy px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/20 inline-flex items-center gap-3"
                >
                  {t.careers.cta.btn}
                  {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
