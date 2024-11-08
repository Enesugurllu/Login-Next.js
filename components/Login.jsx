// pages/signin.tsx
import { useEffect, useState } from 'react';
import styles from '../styles/SignIn.module.css'; // CSS modülü

const SignIn = () => {
  const [language, setLanguage] = useState('en');
  const [formType, setFormType] = useState('tc-identity');
  const [modalText, setModalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const translations = {
    en: {
        description: "Welcome, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tab1: "TC Identity",
        tab2: "Foreign Identity",
        tab3: "SMS",
        tab4: "Email",
        tcLabel: "TC Identity Number",
        nameLabel: "Name",
        surnameLabel: "Surname",
        birthDayLabel: "Day",
        birthMonthLabel: "Month",
        birthYearLabel: "Year",
        connectButton: "Connect",
        agreementLabel: "I Accept the Agreement.",
        shareInfoLabel: "I Allow to Share My Information.",
        foreignIdLabel: "Passport Identification Number",
        foreignNameLabel: "Name",
        foreignSurnameLabel: "Surname",
        foreignBirthDayLabel: "Day",
        foreignBirthMonthLabel: "Month",
        foreignBirthYearLabel: "Year",
        foreignConnectButton: "Connect",
        foreignAgreementLabel: "I Accept the Agreement.",
        foreignShareInfoLabel: "I Allow to Share My Information.",
        smsNumberLabel: "SMS Number",
        smsNameLabel: "Name",
        smsSurnameLabel: "Surname",
        smsConnectButton: "Connect",
        smsAgreementLabel: "I Accept the Agreement.",
        smsShareInfoLabel: "I Allow to Share My Information.",
        emailLabel: "Email",
        emailConnectButton: "Connect",
        emailAgreementLabel: "I Accept the Agreement.",
        emailShareInfoLabel: "I Allow to Share My Information.",
        phoneNumber: "0242 606 24 24",
        months: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ]
    },
    tr: {
        description: "Hoş geldiniz, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tab1: "TC Kimlik",
        tab2: "Yabancı Kimlik",
        tab3: "SMS",
        tab4: "E-posta",
        tcLabel: "TC Kimlik Numarası",
        nameLabel: "İsim",
        surnameLabel: "Soyisim",
        birthDayLabel: "Gün",
        birthMonthLabel: "Ay",
        birthYearLabel: "Yıl",
        connectButton: "Bağlan",
        agreementLabel: "Sözleşmeyi kabul ediyorum.",
        shareInfoLabel: "Bilgilerimin paylaşılmasına izin veriyorum.",
        foreignIdLabel: "Pasaport Kimlik Numarası",
        foreignNameLabel: "İsim",
        foreignSurnameLabel: "Soyisim",
        foreignBirthDayLabel: "Gün",
        foreignBirthMonthLabel: "Ay",
        foreignBirthYearLabel: "Yıl",
        foreignConnectButton: "Bağlan",
        foreignAgreementLabel: "Sözleşmeyi kabul ediyorum.",
        foreignShareInfoLabel: "Bilgilerimin paylaşılmasına izin veriyorum.",
        smsNumberLabel: "SMS Numarası",
        smsNameLabel: "İsim",
        smsSurnameLabel: "Soyisim",
        smsConnectButton: "Bağlan",
        smsAgreementLabel: "Sözleşmeyi kabul ediyorum.",
        smsShareInfoLabel: "Bilgilerimin paylaşılmasına izin veriyorum.",
        emailLabel: "E-posta",
        emailConnectButton: "Bağlan",
        emailAgreementLabel: "Sözleşmeyi kabul ediyorum.",
        emailShareInfoLabel: "Bilgilerimin paylaşılmasına izin veriyorum.",
        phoneNumber: "0242 606 24 24",
        months: [
          "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
          "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ]
    },
    de: {
        description: "Willkommen, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tab1: "TC Identität",
        tab2: "Fremde Identität",
        tab3: "SMS",
        tab4: "E-Mail",
        tcLabel: "TC Identitätsnummer",
        nameLabel: "Name",
        surnameLabel: "Nachname",
        birthDayLabel: "Tag",
        birthMonthLabel: "Monat",
        birthYearLabel: "Jahr",
        connectButton: "Verbinden",
        agreementLabel: "Ich akzeptiere die Vereinbarung.",
        shareInfoLabel: "Ich erlaube das Teilen meiner Informationen.",
        foreignIdLabel: "Pass-Identifikationsnummer",
        foreignNameLabel: "Name",
        foreignSurnameLabel: "Nachname",
        foreignBirthDayLabel: "Tag",
        foreignBirthMonthLabel: "Monat",
        foreignBirthYearLabel: "Jahr",
        foreignConnectButton: "Verbinden",
        foreignAgreementLabel: "Ich akzeptiere die Vereinbarung.",
        foreignShareInfoLabel: "Ich erlaube das Teilen meiner Informationen.",
        smsNumberLabel: "SMS Nummer",
        smsNameLabel: "Name",
        smsSurnameLabel: "Nachname",
        smsConnectButton: "Verbinden",
        smsAgreementLabel: "Ich akzeptiere die Vereinbarung.",
        smsShareInfoLabel: "Ich erlaube das Teilen meiner Informationen.",
        emailLabel: "E-Mail",
        emailConnectButton: "Verbinden",
        emailAgreementLabel: "Ich akzeptiere die Vereinbarung.",
        emailShareInfoLabel: "Ich erlaube das Teilen meiner Informationen.",
        phoneNumber: "0242 606 24 24",
        months: [
          "Januar", "Februar", "März", "April", "Mai", "Juni",
          "Juli", "August", "September", "Oktober", "November", "Dezember"
        ]
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const showForm = (type) => {
    setFormType(type);
  };

  const toggleModal = (text) => {
    setModalText(text);
    setModalVisible(!modalVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Giriş Başarılı!');
  };

  useEffect(() => {
    

    
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img alt="Logo" src="/assets/image/star.png" />
        <div className={styles.languageSelector}>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
      <p>{translations[language].description}</p>
      <div className={styles.tabs}>
        <button onClick={() => showForm('tc-identity')}>{translations[language].tab1}</button>
        <button onClick={() => showForm('foreign-identity')}>{translations[language].tab2}</button>
        <button onClick={() => showForm('sms')}>{translations[language].tab3}</button>
        <button onClick={() => showForm('email')}>{translations[language].tab4}</button>
      </div>

      {/* TC Identity Form */}
      {formType === 'tc-identity' && (
        <form onSubmit={handleSubmit}>
          <label>TC Identity Number</label>
          <input type="text" placeholder="Enter Your TC Number" required />
          <button type="submit">Connect</button>
        </form>
      )}

      {/* Foreign Identity Form */}
      {formType === 'foreign-identity' && (
        <form onSubmit={handleSubmit}>
          <label>Passport Identification Number</label>
          <input type=" text" placeholder="Enter Your Passport Identification Number" required />
          <button type="submit">Connect</button>
        </form>
      )}

      {/* SMS Form */}
      {formType === 'sms' && (
        <form onSubmit={handleSubmit}>
          <label>SMS Number</label>
          <input type="text" placeholder="Enter Your SMS Number" required />
          <button type="submit">Connect</button>
        </form>
      )}

      {/* Email Form */}
      {formType === 'email' && (
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter Your Email" required />
          <button type="submit">Connect</button>
        </form>
      )}

      {/* Modal for Checkbox Agreement */}
      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => toggleModal('')}>×</span>
            <p>{modalText}</p>
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <p>Contact: 0242 606 24 24</p>
      </div>
    </div>
  );
};

export default SignIn;