import i18n from 'i18next';
import localeEN from './locales/en.json';
import localeUZ from './locales/uz.json';
import localeRu from './locales/ru.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'uz',
  debug: false,
  fallbackLng: 'uz',
  resources: {
    ru: {
      translation: localeRu,
    },
    en: {
      translation: localeEN,
    },
    uz: {
      translation: localeUZ,
    },
  },
  ns: ['translation'],
  defaultNS: 'translation',
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
});

export default i18n;
