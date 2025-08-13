// store/useLanguageStore.ts
import { create } from "zustand";

type LanguageStore = {
  language: string;
  setLanguage: (lang: string) => void;
};

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "eng", // default language
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
