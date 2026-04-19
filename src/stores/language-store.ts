import { create } from "zustand";

export type Lang = "ar" | "en";

interface LanguageStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  isRTL: () => boolean;
}

export const useLangStore = create<LanguageStore>((set, get) => ({
  lang: "ar",
  setLang: (lang) => set({ lang }),
  toggleLang: () =>
    set((state) => ({ lang: state.lang === "ar" ? "en" : "ar" })),
  isRTL: () => get().lang === "ar",
}));
