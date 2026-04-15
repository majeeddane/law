"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Gavel,
  ArrowUpRight,
  Scale,
  FileText,
  Briefcase,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Governance",
    description:
      "Comprehensive advisory on board structures, shareholder rights, regulatory compliance, and corporate restructuring aligned with Saudi Vision 2030 reforms and SAMA regulations.",
    highlights: [
      "Board Advisory & Compliance",
      "Mergers & Acquisitions",
      "Joint Ventures & Partnerships",
      "Corporate Restructuring",
    ],
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description:
      "End-to-end legal services for real estate transactions, property development, and investment structuring, including RERA compliance and land registry matters across the Kingdom.",
    highlights: [
      "Property Transactions",
      "Development Agreements",
      "RERA Compliance",
      "Land Registry & Title",
    ],
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    description:
      "Strategic representation before Saudi courts, commercial tribunals, and international arbitration panels. Expert mediation for complex commercial and corporate disputes.",
    highlights: [
      "Commercial Litigation",
      "International Arbitration",
      "Mediation & Settlement",
      "Enforcement of Judgments",
    ],
  },
  {
    icon: Scale,
    title: "Sharia-Compliant Advisory",
    description:
      "Specialized guidance on Islamic finance structures, Sharia-compliant contracts, and fatwa compliance for banking, investment, and commercial operations in the Kingdom.",
    highlights: [
      "Islamic Finance Structuring",
      "Sukuk & Bond Issuance",
      "Sharia Board Liaison",
      "Fatwa Compliance",
    ],
  },
  {
    icon: FileText,
    title: "Commercial Contracts",
    description:
      "Drafting, reviewing, and negotiating high-value commercial agreements with meticulous attention to Saudi law, protecting your business interests at every stage.",
    highlights: [
      "Contract Drafting & Review",
      "Agency & Distribution",
      "Franchise Agreements",
      "Service Contracts",
    ],
  },
  {
    icon: Briefcase,
    title: "Foreign Investment",
    description:
      "Navigating SAGIA licensing, foreign ownership regulations, and investment incentive programs to help international businesses establish and thrive in Saudi Arabia.",
    highlights: [
      "SAGIA Licensing",
      "Foreign Ownership Setup",
      "Investment Incentives",
      "Regulatory Approvals",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PracticeAreas() {
  return (
    <section id="practice" className="relative py-24 sm:py-32 bg-white">
      {/* Subtle top border */}
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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Practice Areas
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We deliver decisive legal strategies across the full spectrum of
            corporate and commercial law, grounded in deep expertise of the
            Saudi legal system.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {practiceAreas.map((area, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative p-6 lg:p-8 rounded-2xl border border-navy/8 bg-white hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300">
                <area.icon className="w-7 h-7 text-navy group-hover:text-gold-dark transition-colors duration-300" />
              </div>

              {/* Title */}
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-navy/20 group-hover:text-gold transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Description */}
              <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">
                {area.description}
              </p>

              {/* Highlights */}
              <ul className="mt-5 space-y-2">
                {area.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-charcoal/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/40 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
