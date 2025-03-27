import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ptPtTranslations} from './locales/pt-pt';
import {enGbTranslations} from './locales/en-gb';
import {esEsTranslations} from './locales/es-es';
import {itItTranslations} from './locales/it-it';
import {deDeTranslations} from './locales/de-de';
import {frFrTranslations} from './locales/fr-fr';
import {jaJpTranslations} from './locales/ja-jp';

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
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
