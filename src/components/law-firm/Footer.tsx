"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = {
  "Practice Areas": [
    "Corporate Governance",
    "Real Estate Law",
    "Dispute Resolution",
    "Sharia-Compliant Advisory",
    "Commercial Contracts",
    "Foreign Investment",
  ],
  Company: [
    "About the Firm",
    "Our Founder",
    "Client Testimonials",
    "Legal Insights",
    "Careers",
    "Contact Us",
  ],
  "Quick Links": [
    "Book a Consultation",
    "Schedule a Call",
    "Request a Proposal",
    "Download Brochure",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export function Footer() {
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
                Ready to Protect Your Legal Interests?
              </h3>
              <p className="mt-3 text-white/60 text-lg">
                Schedule a confidential consultation with our legal team today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold px-8 py-4 rounded-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Book Consultation
              </button>
              <a
                href="tel:+966112345678"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +966 11 234 5678
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
                  AL-MUSALLAM
                </span>
                <span className="text-xs text-gold/80 font-medium tracking-[0.15em] uppercase">
                  Law Firm
                </span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed max-w-sm text-sm">
              Saudi Arabia&apos;s premier legal counsel for corporate governance,
              commercial litigation, and Sharia-compliant advisory services.
              Trusted by leading businesses across the Kingdom and GCC region.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+966112345678"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +966 11 234 5678
              </a>
              <a
                href="mailto:info@almusallam-law.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@almusallam-law.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Olaya Towers, Tower A, Floor 28
                <br />
                King Fahd Road, Riyadh 12241
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
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
            © {new Date().getFullYear()} Mohammed Al-Musallam Law Firm. All
            rights reserved. Licensed by the Saudi Ministry of Justice.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/30 hover:text-gold transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-navy text-white shadow-xl shadow-navy/30 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300 z-40 border border-white/10"
        aria-label="Back to top"
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
