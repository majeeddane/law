"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Building2,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const { lang } = useLangStore();
  const t = getTranslations(lang);
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    practice: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.practice || !formData.message) {
      toast({
        title: t.contact.form.validationTitle,
        description: t.contact.form.validationMsg,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      toast({
        title: t.contact.form.toastTitle,
        description: t.contact.form.toastMsg,
      });
    } catch {
      toast({
        title: t.contact.form.errorTitle,
        description: t.contact.form.errorMsg,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: t.contact.info.visit.title,
      lines: t.contact.info.visit.lines,
    },
    {
      icon: Phone,
      title: t.contact.info.call.title,
      lines: t.contact.info.call.lines,
      href: "tel:+966506707007",
    },
    {
      icon: Mail,
      title: t.contact.info.email.title,
      lines: t.contact.info.email.lines,
      href: "mailto:info@mohamalmusallam.com",
    },
    {
      icon: Clock,
      title: t.contact.info.hours.title,
      lines: t.contact.info.hours.lines,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-secondary/30">
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
            {t.contact.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            {t.contact.title}
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactCards.map((info, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white border border-navy/5 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                <info.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <div className="font-semibold text-navy text-sm mb-2">
                {info.title}
              </div>
              {info.lines.map((line, j) => (
                <div key={j}>
                  {info.href && j === 0 ? (
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-gold-dark transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">{line}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-navy/5"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {t.contact.form.success}
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  {t.contact.form.successMsg}
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      practice: "",
                      message: "",
                    });
                  }}
                >
                  {t.contact.form.submitAnother}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-navy mb-1">
                  {t.contact.form.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                  {t.contact.form.requiredNote}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.nameLabel}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.emailLabel}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.contact.form.phoneLabel}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder={t.contact.form.phonePlaceholder}
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t.contact.form.companyLabel}</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder={t.contact.form.companyPlaceholder}
                        value={formData.company}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice">{t.contact.form.practiceLabel}</Label>
                    <Select
                      value={formData.practice}
                      onValueChange={(value) =>
                        setFormData({ ...formData, practice: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20">
                        <SelectValue placeholder={t.contact.form.practicePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.contact.practiceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.messageLabel}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-6 rounded-lg shadow-lg shadow-navy/20 transition-all duration-300 group"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-sm border border-navy/5 min-h-[400px] lg:min-h-0"
          >
            <div className="absolute inset-0 bg-navy/5">
              <iframe
                src="https://maps.google.com/maps?q=Olaya+Towers+Prince+Muhammed+Ibn+Abdulaziz+St+Al+Olaya+Riyadh+12213+Saudi+Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.1]"
                title="Office Location Map"
              />
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-navy text-sm">
                    {lang === "ar" ? "مكتب المحامي محمد المسلم" : "Mohammed Al-Musallam Law Firm"}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t.contact.mapAddress}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.contact.mapAddress2}
                  </div>
                  <a
                    href="https://share.google/IO61hJAKHhpS3mT0s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold-dark hover:text-gold font-medium mt-2 transition-colors"
                  >
                    {lang === "ar" ? "عرض على الخريطة" : "View on Google Maps"}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
