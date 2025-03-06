import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { translationUz } from "./langs/uz";
import { translationRu } from "./langs/ru";
import { translationEn } from "./langs/en";
import { translationKr } from "./langs/kr";

const resources = {
  uz: { translation: translationUz },
  ru: { translation: translationRu },
  en: { translation: translationEn },
  kr: { translation: translationKr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
