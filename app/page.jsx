"use client"; 
// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/styles.css';


const Home = () => {
    const [language, setLanguage] = useState('en');
    
    const texts = {
        en: {
            signIn: "Sign In",
            welcome: "Welcome, Please Sign In!",
            staffLogin: "Staff Login",
            guestLogin: "Guest Login",
            checkbox1: "I Accept the Agreement.",
            checkbox2: "I Allow to Share My Information.",
        },
        tr: {
            signIn: "Giriş Yap",
            welcome: "Hoş geldiniz, Lütfen Giriş Yapınız!",
            staffLogin: "Personel Girişi",
            guestLogin: "Misafir Girişi",
            checkbox1: "Sözleşmeyi Kabul Ediyorum.",
            checkbox2: "Bilgilerimi Paylaşmaya İzin Veriyorum.",
        },
        de: {
            signIn: "Einloggen",
            welcome: "Willkommen, bitte melden Sie sich an!",
            staffLogin: "Mitarbeiter Login",
            guestLogin: "Gast Login",
            checkbox1: "Ich akzeptiere die Vereinbarung.",
            checkbox2: "Ich erlaube die Weitergabe meiner Informationen.",
        }
    };

    const flagSrc = {
        en: '/assets/image/eng.png',
        tr: '/assets/image/tr.jpg',
        de: '/assets/image/alm.jpg'
    };

    const handleLanguageChange = (e) => setLanguage(e.target.value);

    return (
        <>
            <Head>
                <title>Stella Elite Resort & Spa</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="container">
                <div className="language-selector">
                    <Image src={flagSrc[language]} alt="Flag" width={20} height={15} />
                    <select onChange={handleLanguageChange} value={language}>
                        <option value="en">English</option>
                        <option value="tr">Türkçe</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
                <div className="logo2">
                    <Image src="/assets/image/star.png" alt="Stella Elite Resort & Spa Logo" width={100} height={100} />
                </div>
                <div className="sign-in">{texts[language].signIn}</div>
                <div className="welcome-text">{texts[language].welcome}</div>
                <a href="/login.html">
                    <button className="button staff">{texts[language].staffLogin}</button>
                </a>
                <button className="button guest">{texts[language].guestLogin}</button>
                <div className="checkbox-container">
                    <input type="checkbox" id="agreement-checkbox" />
                    <label htmlFor="agreement-checkbox">{texts[language].checkbox1}</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" id="share-info-checkbox" />
                    <label htmlFor="share-info-checkbox">{texts[language].checkbox2}</label>
                </div>
            </div>
            <div className="footer">
                <div className="contact">
                    <i className="fas fa-phone" /> 0242 606 24 24
                </div>
                <div className="logo">
                    <Image src="/assets/image/mse.png" alt="MSE Logo" width={100} height={100} />
                </div>
            </div>
        </>
    );
};

export default Home;
