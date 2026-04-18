"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLangStore } from "@/stores/language-store";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.13.557 4.134 1.532 5.876L.06 23.976l6.27-1.61A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function FloatingActions() {
  const { lang } = useLangStore();
  const isRTL = lang === "ar";

  return (
    <>
      {/* ── WhatsApp button ────────────────────────────── */}
      <motion.a
        href="https://wa.me/966506707007"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ opacity: 0, scale: 0, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "fixed bottom-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-shadow duration-300",
          "bg-[#25D366] shadow-[0_4px_14px_rgba(37,211,102,0.45)]",
          "hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]",
          isRTL ? "right-6" : "left-6",
          "lg:hidden"
        )}
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.a>

      {/* ── Phone call button ──────────────────────────── */}
      <motion.a
        href="tel:+966506707007"
        aria-label="Call us"
        initial={{ opacity: 0, scale: 0, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "fixed bottom-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-shadow duration-300",
          "bg-[#C8A96A] shadow-[0_4px_14px_rgba(200,169,106,0.45)]",
          "hover:shadow-[0_6px_20px_rgba(200,169,106,0.6)]",
          isRTL ? "left-6" : "right-6",
          "lg:hidden"
        )}
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </>
  );
}
