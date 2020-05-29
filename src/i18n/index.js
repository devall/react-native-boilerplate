import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locales/ru.json';
import en from './locales/en.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

const config = {
  fallbackLng: 'en',
  debug: true,
  resources: {
    en,
    ru,
  },
};

i18next.use(languageDetector).use(initReactI18next);

export { i18next, config };
