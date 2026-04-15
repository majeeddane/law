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

export function Header() {
  const { lang, toggleLang } = useLangStore();
  const t = getTranslations(lang);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.practice, href: "#practice" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stories, href: "#stories" },
    { label: t.nav.insights, href: "#insights" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((link) => link.href.slice(1));
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
  }, [lang]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "transition-all duration-500 overflow-hidden",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="bg-navy-dark/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs sm:text-sm text-white/70">
            <a
              href="tel:+966506707007"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>0506707007</span>
            </a>
            <div className="flex items-center gap-1.5 text-gold">
              <MapPin className="w-3 h-3" />
              <span>
                {lang === "ar"
                  ? "أبراج اليمامة، الرياض"
                  : "Olaya Towers, Riyadh"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white tracking-wide leading-tight">
                {lang === "ar" ? "المسلم" : "AL-MUSALLAM"}
              </span>
              <span className="text-[10px] sm:text-xs text-gold/80 font-medium tracking-[0.15em]">
                {lang === "ar" ? "للمحاماة" : "Law Firm"}
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-gold bg-gold/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Language toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className="text-white/70 hover:text-gold hover:bg-gold/10 font-medium text-sm px-3 rounded-md transition-all duration-300 flex items-center gap-1.5"
            >
              <Languages className="w-4 h-4" />
              {lang === "ar" ? "EN" : "عربي"}
            </Button>
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-gold text-navy-dark hover:bg-gold-light font-semibold text-sm px-6 rounded-md transition-all duration-300 shadow-lg shadow-gold/20"
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
              className="text-white/70 hover:text-gold hover:bg-gold/10"
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
                side={lang === "ar" ? "left" : "right"}
                className="w-80 bg-navy border-navy-light/20"
              >
                <SheetTitle className="sr-only">{t.nav.mobileNav}</SheetTitle>
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-all",
                        activeSection === link.href.slice(1)
                          ? "text-gold bg-gold/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => handleNavClick("#contact")}
                      className="w-full bg-gold text-navy-dark hover:bg-gold-light font-semibold"
                    >
                      {t.nav.cta}
                    </Button>
                  </div>
                  <div className="mt-6 space-y-3 px-4 text-sm text-white/50">
                    <a
                      href="tel:+966506707007"
                      className="flex items-center gap-2 hover:text-gold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      0506707007
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
