"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import { FloatingLabelInput } from "@/components/law-firm/FloatingLabelInput";
import { RevealOnScroll } from "@/components/law-firm/ParallaxSection";
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
    <section id="contact" className="bg-[#FAFAFA] py-28 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
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
        </RevealOnScroll>

        {/* Contact info cards */}
        <RevealOnScroll delay={0.1} className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((info, i) => (
              <div
                key={i}
                className={cn(
                  "bg-white rounded-xl p-5 border border-navy/5 card-premium"
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/8 flex items-center justify-center mb-3">
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
          </div>
        </RevealOnScroll>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-navy/5 shadow-sm">
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
                      <FloatingLabelInput
                        id="name"
                        name="name"
                        label={t.contact.form.nameLabel}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FloatingLabelInput
                        id="email"
                        name="email"
                        type="email"
                        label={t.contact.form.emailLabel}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FloatingLabelInput
                        id="phone"
                        name="phone"
                        type="tel"
                        label={t.contact.form.phoneLabel}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FloatingLabelInput
                        id="company"
                        name="company"
                        label={t.contact.form.companyLabel}
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Select
                        value={formData.practice}
                        onValueChange={(value) =>
                          setFormData({ ...formData, practice: value })
                        }
                      >
                        <SelectTrigger className="rounded-xl border-navy/10 focus:border-gold focus:ring-gold/10 focus:outline-none h-12">
                          <SelectValue placeholder={t.contact.form.practiceLabel} />
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
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.contact.form.messageLabel}
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-navy/10 focus:border-gold focus:ring-gold/10 focus:outline-none resize-none text-[15px] bg-white px-4 pt-3 pb-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-6 rounded-xl shadow-lg shadow-navy/20 transition-all duration-300 group"
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
            </div>
          </RevealOnScroll>

          {/* Map */}
          <RevealOnScroll direction="right" delay={0.3}>
            <div className="relative rounded-2xl overflow-hidden border border-navy/5 min-h-[500px] shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Olaya+Towers+Prince+Muhammed+Ibn+Abdulaziz+St+Al+Olaya+Riyadh+12213+Saudi+Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: "500px",
                  filter:
                    "grayscale(60%) contrast(1.1) brightness(0.95)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />

              {/* Floating overlay card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 glass-dark rounded-xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-white text-sm">
                      {lang === "ar"
                        ? "مكتب المحامي محمد المسلم"
                        : "Mohammed Al-Musallam Law Firm"}
                    </div>
                    <div className="text-xs text-white/70 mt-1">
                      {t.contact.mapAddress}
                    </div>
                    <div className="text-xs text-white/70">
                      {t.contact.mapAddress2}
                    </div>
                    <a
                      href="https://share.google/IO61hJAKHhpS3mT0s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold-light font-medium mt-2 transition-colors"
                    >
                      {lang === "ar" ? "فتح في الخريطة" : "Open in Maps"}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
