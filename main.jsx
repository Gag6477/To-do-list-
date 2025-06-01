import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import hy from './locales/hy'


i18next
.use(initReactI18next)
.init({
    resources:{
        en,hy
    },
    lng:'en',
    fallbackLng:'en'
})


createRoot(document.getElementById('root')).render(
    <App />
)
