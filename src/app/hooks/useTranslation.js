'use client'
import { useLanguage } from '../context/LanguageContext'
import fr from '../translations/fr.json'
import en from '../translations/en.json'

const translations = { fr, en }

export function useTranslation() {
    const { lang, setLang } = useLanguage()
    const t = translations[lang] || fr

    return { t, lang, setLang }
}
