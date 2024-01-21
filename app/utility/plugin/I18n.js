import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../locals/en';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  resources: { en }
})

// REVERT THIS FUCNTIONALITY IF I18NEXT IS CREATING ISSUE IN LANGUAGE CONVERSION

// const I18n = require('react-native-i18n').default

// // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`

// I18n.fallbacks = true;

// I18n.translations = {
//   en,
// };
export default i18next;

