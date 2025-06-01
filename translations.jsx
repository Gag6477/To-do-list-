import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Translate() {
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState('en')
    return (
        <div className="flex justify-end items-end  w-full gap-2">
            <button
                className={selectedLanguage == 'hy' ? 'p-1 bg-white' : 'p-1'}
                onClick={() => {
                    i18n.changeLanguage('hy')
                    setSelectedLanguage('hy')
                }}><img  src="/images/armenia.png" alt="" /></button>
            <button
                className={selectedLanguage == 'en' ? 'p-1 bg-white' : 'p-1'}
                onClick={() => {
                    i18n.changeLanguage('en')
                    setSelectedLanguage('en')
                }}><img src="/images/usa.png" alt="" /></button>
        </div>
    )
}

// i18next react-i18next
// locales -> en,hy
// main.jsx -> i18 setup
// translation component for language flags