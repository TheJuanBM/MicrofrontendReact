import i18n, { InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { en, es } from './locales'

const currentLanguage = new URLSearchParams(window.location.search).get('lng') || 'en'

const INIT_CONFIG: InitOptions = {
  resources: { es, en },
  lng: currentLanguage,
  fallbackLng: currentLanguage
}

i18n.use(LanguageDetector).use(initReactI18next).init(INIT_CONFIG)

export default i18n
