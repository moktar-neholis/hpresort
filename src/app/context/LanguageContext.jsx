'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({ lang: 'fr', setLang: () => {} })

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('fr')

    useEffect(() => {
        const saved = localStorage.getItem('hp_lang')
        if (saved === 'en' || saved === 'fr') setLang(saved)
    }, [])

    const switchLang = (newLang) => {
        setLang(newLang)
        localStorage.setItem('hp_lang', newLang)
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang: switchLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
