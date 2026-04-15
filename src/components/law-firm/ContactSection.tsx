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
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Building2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Olaya Towers, Tower A", "Floor 28, King Fahd Road", "Riyadh 12241, Saudi Arabia"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+966 11 234 5678", "+966 50 123 4567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@almusallam-law.com", "consultations@almusallam-law.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday - Saturday: By Appointment"],
  },
];

const practiceOptions = [
  "Corporate Governance",
  "Real Estate Law",
  "Dispute Resolution",
  "Sharia-Compliant Advisory",
  "Commercial Contracts",
  "Foreign Investment",
  "Other",
];

export function ContactSection() {
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
        title: "Please fill in all required fields",
        description: "Name, email, practice area, and message are required.",
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
        title: "Consultation Request Submitted",
        description:
          "Thank you for reaching out. Our team will contact you within 24 hours.",
      });
    } catch {
      toast({
        title: "Submission Failed",
        description:
          "Please try again or contact us directly by phone.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Book a Consultation
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Take the first step toward resolving your legal matter. Our team is
            ready to provide the expert guidance you need.
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
          {contactInfo.map((info, i) => (
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
                <div key={j} className="text-sm text-muted-foreground">
                  {line}
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
                  Request Received
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you, {formData.name}. Our legal team will review your
                  inquiry and respond within 24 business hours.
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
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-navy mb-1">
                  Request a Consultation
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+966 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice">
                      Practice Area <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.practice}
                      onValueChange={(value) =>
                        setFormData({ ...formData, practice: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-navy/10 focus:border-gold focus:ring-gold/20">
                        <SelectValue placeholder="Select a practice area" />
                      </SelectTrigger>
                      <SelectContent>
                        {practiceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Your Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Briefly describe your legal matter..."
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Consultation Request
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
            {/* Map placeholder with actual Google Maps embed */}
            <div className="absolute inset-0 bg-navy/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6742045568!2d46.6752!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02833e0eaaaa%3A0x8d7c6e5c5c5c5c5c!2sOlaya%20Towers%2C%20King%20Fahd%20Rd%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.1]"
                title="Olaya Towers Location Map"
              />
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">
                    Al-Musallam Law Firm
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Olaya Towers, Tower A, Floor 28
                  </div>
                  <div className="text-xs text-muted-foreground">
                    King Fahd Road, Riyadh 12241
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
