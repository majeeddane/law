"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Scale, Phone, MapPin, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/stores/language-store";
import { getTranslations } from "@/lib/translations";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Header() {
  const { lang, toggleLang } = useLangStore();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en";

  const navLinks = [
    { label: t.nav.home, href: isHome ? "#home" : "/#home" },
    { label: t.nav.practice, href: isHome ? "#practice" : "/#practice" },
    { label: t.nav.about, href: isHome ? "#about" : "/#about" },
    { label: t.nav.stories, href: isHome ? "#stories" : "/#stories" },
    { label: t.nav.insights, href: isHome ? "#insights" : "/#insights" },
    { label: t.nav.careers, href: "/careers" },
    { label: t.nav.contact, href: isHome ? "#contact" : "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navLinks
        .filter(link => link.href.includes("#"))
        .map((link) => link.href.split("#")[1]);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang, pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (isHome) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (scrolled || !isHome)
          ? "bg-[#0A1F3D]/95 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      {/* Top bar - slides up on scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ maxHeight: 60, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="bg-[#071428]/80 backdrop-blur-sm border-b border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs sm:text-sm text-white/60">
                <a
                  href="tel:+966506707007"
                  className="flex items-center gap-2 hover:text-[#C8A96A] transition-colors duration-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="tracking-wide">0506707007</span>
                </a>
                <div className="hidden sm:flex items-center gap-2 text-[#C8A96A]/70">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {isRTL ? "أبراج العليا، الرياض" : "Olaya Towers, Riyadh"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center group relative h-full"
          >
            <div
              className={cn(
                "relative transition-all duration-500 transform group-hover:scale-105",
                scrolled ? "h-10 sm:h-12 w-auto" : "h-14 sm:h-20 w-auto"
              )}
            >
              <img
                src="/logo.png"
                alt={isRTL ? "المسلم للمحاماة" : "Al-Musallam Law Firm"}
                className="h-full w-auto object-contain filter drop-shadow-sm transition-all duration-300"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 relative",
                  activeSection === link.href.slice(1)
                    ? "text-[#C8A96A]"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C8A96A]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Language toggle */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className="text-white/60 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10 font-medium text-[13px] px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-1.5"
            >
              <Languages className="w-4 h-4" />
              {isRTL ? "EN" : "عربي"}
            </Button>
            <Button
              onClick={() => handleNavClick("#contact")}
              className={cn(
                "bg-[#C8A96A] text-[#071428] hover:bg-[#D4BC85] font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#C8A96A]/20",
                scrolled ? "text-[13px] px-5 py-2.5" : "text-sm px-6 py-3"
              )}
            >
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLang}
              className="text-white/60 hover:text-[#C8A96A] hover:bg-[#C8A96A]/10"
            >
              <Languages className="w-5 h-5" />
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={isRTL ? "left" : "right"}
                className="w-80 bg-[#0A1F3D] border-white/10"
              >
                <SheetTitle className="sr-only">{t.nav.mobileNav}</SheetTitle>
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                        activeSection === link.href.slice(1)
                          ? "text-[#C8A96A] bg-[#C8A96A]/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => handleNavClick("#contact")}
                      className="w-full bg-[#C8A96A] text-[#071428] hover:bg-[#D4BC85] font-semibold rounded-xl"
                    >
                      {t.nav.cta}
                    </Button>
                  </div>
                  <div className="mt-6 space-y-3 px-4 text-sm text-white/40">
                    <a
                      href="tel:+966506707007"
                      className="flex items-center gap-2.5 hover:text-[#C8A96A] transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>0506707007</span>
                    </a>
                    <div className="flex items-center gap-2.5 text-[#C8A96A]/60">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {isRTL ? "أبراج العليا، الرياض" : "Olaya Towers, Riyadh"}
                      </span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line on scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent origin-center"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
