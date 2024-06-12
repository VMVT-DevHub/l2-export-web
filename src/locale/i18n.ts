import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ltTranslation from './lt/lt.json';
import enTranslation from './en/en.json';
import ruTranslation from './ru/ru.json';

const resources = {
  lt: {
    translation: ltTranslation,
  },
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'lt', // language to use
  fallbackLng: ['lt', 'en', 'ru'],
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
