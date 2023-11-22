import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATION_AZ } from '../locales/az/Translation';
import { TRANSLATION_RU } from '../locales/ru/Translation';

i18n.use(initReactI18next).init({
  resources: {
    ru: TRANSLATION_RU,
    az: TRANSLATION_AZ,
  },
  lng: 'az',
  interpolation: {
    escapeValue: false,
  },
});
