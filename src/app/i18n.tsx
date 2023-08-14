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
                    NAV: {
                        homePage: "Strona Główna",
                        federation: "Federacja",
                        history: "Historia",
                        trophies: "Trofea",
                        pastChampions: "Zwycięzcy Lat Ubiegłych",
                        management: "Zarząd",
                        statue: "Statut",
                        games: "Rozgrywki",
                        postolowoLeauge: "Liga Postołowo 2023",
                        createGame: "Utwórz Rozgrywkę",
                        presentTables: "Aktualne Tabele",
                        roundsChampions: "Zwycięzcy Rund",
                        polishOpen: "Polish Open 2023",
                        fifaWorldCup: "Fifa World Cup 2023",
                        cadre: "Kadra",
                        playerProfiles: "Profile Zawodników",
                        list: "Lista",
                        recordsAndRegulations: "Zapisy i Regulamin",
                        recordsFifa: "Zapisy FIFA",
                        regulationsLeauge: "Regulamin Ligi 2023",
                        regulationsPolishOpen: "Regulamin Polish Open 2023",
                        gallery: "Galeria",
                        contact: "Kontakt",
                        polishFields: "Footgolf w Polsce",
                        login: "Logowanie",
                    },
                    AUTH: {
                        login: "Logowanie",
                        registration: "Rejestracja",
                        userName: "Nazwa użytkownika",
                        email: "Email",
                        password: "Hasło",
                        basicInfo: "Podstawowe informacje",
                        gender: "Gender",
                        firstName: "Imię",
                        lastName: "Nazwisko",
                        male: "Mężczyzna",
                        female: "Kobieta",
                        contactInfo: "Dane kontaktowe",
                        streetAndNumber: "Ulica i nr",
                        city: "Miasto",
                        zip: "ZIP",
                        state: "Kraj",
                        phone: "Telefon",
                        avatar: "Awatar",
                        pickAvatar: "Wybierz zdjęcie",
                        otherInfo: "Inne informacje",
                        approvals: "Zgody",
                        description: "Opis"
                    },
                    STATUE: {
                        data: "Dane PFFG",
                        download: "Pobierz Statut",
                        address: "Adres siedziby",
                        legalForm: "Forma prawna",
                        registrationDate: "Data rejestracji",
                        organizationSize: "Wielkość organizacji",
                    },
                    ERRORS: {
                        invalidEmail: "Niepoprawny email",
                        required: "Wymagane",
                    },
                }
            },
            en: {
                translation: {
                    NAV: {
                        homePage: "Home Page",
                        federation: "Federation",
                        history: "History",
                        trophies: "Trophies",
                        pastChampions: "Past Champions",
                        management: "Management",
                        statue: "Statue",
                        games: "Games",
                        postolowoLeauge: "Postolowo Leauge 2023",
                        createGame: "Create Game",
                        presentTables: "Present Tables",
                        roundsChampions: "Rounds Champions",
                        polishOpen: "Polish Open 2023",
                        fifaWorldCup: "Fifa world Cup 2023",
                        cadre: "Cadre",
                        playerProfiles: "Player Profiles",
                        list: "List",
                        recordsAndRegulations: "Records and Regulations",
                        recordsFifa: "Records FIFA",
                        regulationsLeauge: "Regulations Leauge 2023",
                        regulationsPolishOpen: "Regulations Polish Open 2023",
                        gallery: "Gallery",
                        contact: "Contact",
                        polishFields: "Polish Footgolf",
                        login: "Login"
                    },
                    AUTH: {
                        login: "Login",
                        registration: "Sign up",
                        userName: "User name",
                        email: "Email",
                        password: "Password",
                        errorMessage: "* Uzupełnij wymagane pola",
                    }
                }
            }
        }
    })