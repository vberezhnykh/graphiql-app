import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enNs from './locales/en/translation.json';
import ruNs from './locales/ru/translation.json';

export const defaultNS = 'ns1';

export const resources = {
  en: { ns1: enNs },
  ru: { ns1: ruNs },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources,
    defaultNS,
  });

export default i18n;
