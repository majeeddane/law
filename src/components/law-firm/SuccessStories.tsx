"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building2, Factory, Landmark, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Khalid Al-Rashid",
    title: "CEO, Al-Rashid Holdings",
    icon: Building2,
    quote:
      "Al-Musallam Law Firm's strategic counsel was instrumental in our SAR 2 billion acquisition. Their understanding of both Saudi regulatory frameworks and international deal structures is unmatched.",
    rating: 5,
    case: "SAR 2B Corporate Acquisition",
  },
  {
    name: "Sarah Mitchell",
    title: "VP Legal, PetroChem Global",
    icon: Factory,
    quote:
      "When faced with complex multi-jurisdictional disputes, Mohammed and his team delivered outcomes that exceeded our expectations. Their Sharia-compliant approach gave us complete confidence throughout the arbitration process.",
    rating: 5,
    case: "International Arbitration",
  },
  {
    name: "Abdullah Al-Faisal",
    title: "Chairman, Faisal Real Estate Group",
    icon: Landmark,
    quote:
      "Their real estate legal team navigated our landmark development project through every regulatory hurdle. The depth of knowledge in Saudi property law saved us significant time and resources.",
    rating: 5,
    case: "Major Real Estate Development",
  },
];

export function SuccessStories() {
  return (
    <section id="stories" className="relative py-24 sm:py-32 bg-secondary/50">
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
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Client Success Stories
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Trusted by industry leaders across Saudi Arabia and the GCC region.
            Our results speak through the success of our clients.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-navy/5 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-charcoal/80 leading-relaxed text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Case badge */}
              <div className="mt-6">
                <Badge
                  variant="secondary"
                  className="bg-navy/5 text-navy font-medium text-xs px-3 py-1.5 rounded-full"
                >
                  {testimonial.case}
                </Badge>
              </div>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-navy/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <testimonial.icon className="w-5 h-5 text-navy/40" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 sm:p-12 rounded-2xl bg-navy text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "SAR 15B+", label: "Transaction Value" },
              { value: "45+", label: "Industry Awards" },
              { value: "12", label: "GCC Countries Served" },
            ].map((metric, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-bold text-gold">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-white/50">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
