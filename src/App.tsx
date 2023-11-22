import React from 'react';
import AppRouter from './components/AppRouter';
import { i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATION_AZ } from './locales/az/Translation';
import { TRANSLATION_RU } from './locales/ru/Translation';

i18n.use(initReactI18next).init({
  resources: {
    RU: TRANSLATION_RU,
    AZ: TRANSLATION_AZ,
  },
  lng: 'AZ',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
