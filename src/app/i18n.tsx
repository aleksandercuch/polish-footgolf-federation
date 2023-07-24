import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        lng: 'pl',
        resources: {
            pl: {
                translation: {
                    federation: "Federacja",
                    history: "Historia",
                    navHistoryBarFirst: "test",
                    navHistoryBarSecond: "test",
                    navHistoryBarThird: "test",
                    navHistoryBarFourth: "test",
                    management: "Zarząd",
                    statue: "Statut",
                    games: "Rozgrywki",
                    postolowoLeauge: "Liga Postołowo 2023",
                    leaugeItemOne: "Item 1",
                    leaugeItemTwo: "Item 2",
                    leaugeItemThree: "Item 3",
                    polishOpen: "Polish Open 2023",
                    fifaWorldCup: "Fifa World Cup 2023",
                    cadre: "Kadra",
                    playerProfiles: "Profile Zawodników",
                    list: "Lista",
                    recordsAndRegulations: "Zapisy i Regulamin",
                    recordsFifa: "Zapisy FIFA",
                    regulationsLeauge: "Regulamin Ligi 2023",
                    regulationsPolishOpen: "Regulamin Polish Open 2023",
                    login: "Logowanie",
                }
            },
            en: {
                translation: {
                    federation: "Federation",
                    history: "History",
                    navHistoryBarFirst: "test",
                    navHistoryBarSecond: "test",
                    navHistoryBarThird: "test",
                    navHistoryBarFourth: "test",
                    management: "Management",
                    statue: "Statue",
                    games: "Games",
                    postolowoLeauge: "Postolowo Leauge 2023",
                    leaugeItemOne: "Item 1",
                    leaugeItemTwo: "Item 2",
                    leaugeItemThree: "Item 3",
                    polishOpen: "Polish Open 2023",
                    fifaWorldCup: "Fifa world Cup 2023",
                    cadre: "Cadre",
                    playerProfiles: "Player Profiles",
                    list: "List",
                    recordsAndRegulations: "Records and Regulations",
                    recordsFifa: "Records FIFA",
                    regulationsLeauge: "Regulations Leauge 2023",
                    regulationsPolishOpen: "Regulations Polish Open 2023",
                    login: "Login"
                }
            }
        }
    })