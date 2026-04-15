"use client";

import { useEffect } from "react";
import { useLangStore } from "@/stores/language-store";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useLangStore((s) => s.lang);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
}
