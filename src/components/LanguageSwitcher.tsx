"use client"; // Required because we're using hooks
import useLanguageStore from "@/store/useLanguageStore";
import { useTranslation } from "react-i18next";

type LanguageStore = {
  setLanguage: (lang: string) => void;
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("bn"); // Access i18n to change language
  const { setLanguage } = useLanguageStore() as LanguageStore; // From Zustand

  // const handleLanguageToggle = () => {
  //   const newLang = i18n.language === "en" ? "bn" : "en";

  //   i18n.changeLanguage(newLang); // Change i18next language
  //   setLanguage(newLang); // Sync Zustand store
  // };
  const handleLanguageToggle = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    void i18n.changeLanguage(newLang); // Add void operator
    setLanguage(newLang);
  };

  return (
    <div>
      <button onClick={handleLanguageToggle}>
        {i18n.language === "en" ? "বাংলায় দেখুন" : "View in English"}
      </button>
    </div>
  );
}
