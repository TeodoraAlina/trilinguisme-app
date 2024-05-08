import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        de: {
            translation: {
                title: 'Dreisprachigkeit',
                label: "Wählen Sie eine andere Sprache!",
                about: "Über",
                home: "Startseite"
            }
        },
        es: {
            translation: {
                title: "Trilingüismo",
                label: "Selecciona otro lenguaje!",
                about: "Sobre",
                home: "Inicio"
            }
        },
        fr: {
            translation: {
                title: "Trilinguisme",
                label: "Sélectionnez une autre langue!",
                about: "À propos",
                home: "Page d'accueil"
            }
        }
    },
});

export default i18n;