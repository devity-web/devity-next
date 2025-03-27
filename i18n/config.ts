import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ptPtTranslations} from './locales/pt-pt';
import {enGbTranslations} from './locales/en-gb';
import {esEsTranslations} from './locales/es-es';
import {itItTranslations} from './locales/it-it';
import {deDeTranslations} from './locales/de-de';
import {frFrTranslations} from './locales/fr-fr';
import {jaJpTranslations} from './locales/ja-jp';

const getLang = () => {
  const lang = localStorage.getItem('lang');

  if (lang) {
    return lang;
  }

  return 'en';
};

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  lng: getLang(),
  resources: {
    pt: ptPtTranslations,
    en: enGbTranslations,
    es: esEsTranslations,
    it: itItTranslations,
    de: deDeTranslations,
    fr: frFrTranslations,
    ja: jaJpTranslations,
  },
});
