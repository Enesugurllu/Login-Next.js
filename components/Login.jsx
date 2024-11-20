import React from 'react'

const Login = () => {
  function changeLanguage(language) {
    var translations = {
        en: { 
            "description": "Welcome, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
            "tab-1": "TC Identity",
            "tab-2": "Foreign Identity",
            "tab-3": "SMS",
            "tab-4": "Email",
            "tc-label": "TC Identity Number",
            "name-label": "Name",
            "surname-label": "Surname",
            "birth-day-label": "Day",
            "birth-month-label": "Month",
            "birth-year-label": "Year",
            "connect-button": "Connect",
            "agreement-label": "I Accept the Agreement.",
            "share-info-label": "I Allow to Share My Information.",
            "foreign-id-label": "Passport Identification Number",
            "foreign-name-label": "Name",
            "foreign-surname-label": "Surname",
            "foreign-birth-day-label": "Day",
            "foreign-birth-month-label": "Month",
            "foreign-birth-year-label": "Year",
            "foreign-connect-button": "Connect",
            "foreign-agreement-label": "I Accept the Agreement.",
            "foreign-share-info-label": "I Allow to Share My Information.",
            "sms-number-label": "SMS Number",
            "sms-name-label": "Name",
            "sms-surname-label": "Surname",
            "sms-connect-button": "Connect",
            "sms-agreement-label": "I Accept the Agreement.",
            "sms-share-info-label": "I Allow to Share My Information.",
            "email-label": "Email",
            "email-connect-button": "Connect",
            "email-agreement-label": "I Accept the Agreement.",
            "email-share-info-label": "I Allow to Share My Information.",
            "phone-number": "0242 606 24 24",
            "months": [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
        },
        tr: {  
            "description": "Hoş geldiniz, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
            "tab-1": "TC Kimlik",
            "tab-2": "Yabancı Kimlik",
            "tab-3": "SMS",
            "tab-4": "E-posta",
            "tc-label": "TC Kimlik Numarası",
            "name-label": "İsim",
            "surname-label": "Soyisim",
            "birth-day-label": "Gün",
            "birth-month-label": "Ay",
            "birth-year-label": "Yıl",
            "connect-button": "Bağlan",
            "agreement-label": "Sözleşmeyi kabul ediyorum.",
            "share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
            "foreign-id-label": "Pasaport Kimlik Numarası",
            "foreign-name-label": "İsim",
            "foreign-surname-label": "Soyisim",
            "foreign-birth-day-label": "Gün",
            "foreign-birth-month-label": "Ay",
            "foreign-birth-year-label": "Yıl",
            "foreign-connect-button": "Bağlan",
            "foreign-agreement-label": "Sözleşmeyi kabul ediyorum.",
            "foreign-share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
            "sms-number-label": "SMS Numarası",
            "sms-name-label": "İsim",
            "sms-surname-label": "Soyisim",
            "sms-connect-button": "Bağlan",
            "sms-agreement-label": "Sözleşmeyi kabul ediyorum.",
            "sms-share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
            "email-label": "E-posta",
            "email-connect-button": "Bağlan",
            "email-agreement-label": "Sözleşmeyi kabul ediyorum.",
            "email-share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
            "phone-number": "0242 606 24 24",
            "months": [
                "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
                "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
            ]
        },
        de: {
            "description": "Willkommen, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
            "tab-1": "TC Identität",
            "tab-2": "Fremde Identität",
            "tab-3": "SMS",
            " tab-4": "E-Mail",
            "tc-label": "TC Identitätsnummer",
            "name-label": "Name",
            "surname-label": "Nachname",
            "birth-day-label": "Tag",
            "birth-month-label": "Monat",
            "birth-year-label": "Jahr",
            "connect-button": "Verbinden",
            "agreement-label": "Ich akzeptiere die Vereinbarung.",
            "share-info-label": "Ich erlaube das Teilen meiner Informationen.",
            "foreign-id-label": "Pass-Identifikationsnummer",
            "foreign-name-label": "Name",
            "foreign-surname-label": "Nachname",
            "foreign-birth-day-label": "Tag",
            "foreign-birth-month-label": "Monat",
            "foreign-birth-year-label": "jahr",
            "foreign-connect-button": "Verbinden",
            "foreign-agreement-label": "Ich akzeptiere die Vereinbarung.",
            "foreign-share-info-label": "Ich erlaube das Teilen meiner Informationen.",
            "sms-number-label": "SMS Nummer",
            "sms-name-label": "Name",
            "sms-surname-label": "Nachname",
            "sms-connect-button": "Verbinden",
            "sms-agreement-label": "Ich akzeptiere die Vereinbarung.",
            "sms-share-info-label": "Ich erlaube das Teilen meiner Informationen.",
            "email-label": "E-Mail",
            "email-connect-button": "Verbinden",
            "email-agreement-label": "Ich akzeptiere die Vereinbarung.",
            "email-share-info-label": "Ich erlaube das Teilen meiner Informationen.",
            "phone-number": "0242 606 24 24",
            "months": [
                "Januar", "Februar", "März", "April", "Mai", "Juni",
                "Juli", "August", "September", "Oktober", "November", "Dezember"
            ]
        }
    };
    
    var translation = translations[language];
    document.getElementById("description").innerText = translation.description;
    document.getElementById("tab-1").innerText = translation["tab-1"];
    document.getElementById("tab-2").innerText = translation["tab-2"];
    document.getElementById("tab-3").innerText = translation["tab-3"];
    document.getElementById("tab-4").innerText = translation ["tab-4"];
    document.getElementById("tc-label").innerText = translation["tc-label"];
    document.getElementById("name-label").innerText = translation["name-label"];
    document.getElementById("surname-label").innerText = translation["surname-label"];
    document.getElementById("birth-day-label").innerText = translation["birth-day-label"];
    document.getElementById("birth-month-label").innerText = translation["birth-month-label"];
    document.getElementById("birth-year-label").innerText = translation["birth-year-label"];
    document.getElementById("connect-button").innerText = translation["connect-button"];
    document.getElementById("agreement-label").innerText = translation["agreement-label"];
    document.getElementById("share-info-label").innerText = translation["share-info-label"];
    document.getElementById("foreign-id-label").innerText = translation["foreign-id-label"];
    document.getElementById("foreign-name-label").innerText = translation["foreign-name-label"];
    document.getElementById("foreign-surname-label").innerText = translation["foreign-surname-label"];
    document.getElementById("foreign-birth-day-label").innerText = translation["foreign-birth-day-label"];
    document.getElementById("foreign-birth-month-label").innerText = translation["foreign-birth-month-label"];
    document.getElementById("foreign-birth-year-label").innerText = translation["foreign-birth-year-label"];
    document.getElementById("foreign-connect-button").innerText = translation["foreign-connect-button"];
    document.getElementById("foreign-agreement-label").innerText = translation["foreign-agreement-label"];
    document.getElementById("foreign-share-info-label").innerText = translation["foreign-share-info-label"];
    document.getElementById("sms-number-label").innerText = translation["sms-number-label"];
    document.getElementById("sms-name-label").innerText = translation["sms-name-label"];
    document.getElementById("sms-surname-label").innerText = translation["sms-surname-label"];
    document.getElementById("sms-connect-button").innerText = translation["sms-connect-button"];
    document.getElementById("sms-agreement-label").innerText = translation["sms-agreement-label"];
    document.getElementById("sms-share-info-label").innerText = translation["sms-share-info-label"];
    document.getElementById("email-label").innerText = translation["email-label"];
    document.getElementById("email-connect-button").innerText = translation["email-connect-button"];
    document.getElementById("email-agreement-label").innerText = translation["email-agreement-label"];
    document.getElementById("email-share-info-label").innerText = translation["email-share-info-label"];
    document.getElementById("phone-number").innerText = translation["phone-number"];
  
    const flagSrc = {
        en: 'assets/image/eng.png',
        tr: 'assets/image/tr.jpg',
        de: 'assets/image/alm.jpg'
    };
  
    document.getElementById("selected-flag").src = flagSrc[language];
  
    // Ay isimlerini güncelle
    const monthSelect = document.getElementById("birth-month");
    monthSelect.innerHTML = '';
    translation.months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.text = month;
        monthSelect.appendChild(option);
    });
  
    const foreignMonthSelect = document.getElementById("foreign-birth-month");
    foreignMonthSelect.innerHTML = '';
    translation.months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.text = month;
        foreignMonthSelect.appendChild(option);
    });
  }
  
  function showForm(formId) {
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.style.display = 'none';
  });
  document.querySelector(`.${formId}-form`).style.display = 'block';
  clearForm(); // Form verilerini temizle
  }
  
  document.querySelectorAll('.tabs button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const formIds = ['tc-identity', 'foreign-identity', 'sms', 'email'];
        showForm(formIds[index]);
        document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
  });
  changeLanguage('en');
  
  
  
  // Form verilerini temizleme fonksiyonu
  function clearForm() {
  // Form input alanlarını temizle
  document.querySelectorAll('.form input').forEach(input => {
    input.value = '';
  });
  
  // Form checkbox'larını temizle
  document.querySelectorAll('.form input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  }
  
  // Sayfa değiştiğinde form verilerini temizle
  window.addEventListener('beforeunload', clearForm);
  
  // Tab butonlarına tıklandığında form verilerini temizle
  document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', clearForm);
  });
  
  // Formu gönderme fonksiyonu
  function submitForm(formId) {
  const form = document.querySelector(`.${formId}-form`);
  const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  
  // Form input alanlarını kontrol et
  let inputError = false;
  inputs.forEach(input => {
    if (input.type === 'date' && input.value === '') {
      inputError = true;
      input.style.border = '1px solid red';
    } else if (input.type !== 'date' && input.value.trim() === '') {
      inputError = true;
      input.style.border = '1px solid red';
    } else {
      input.style.border = '';
    }
  });
  
  // Form checkbox'larını kontrol et
  let checkboxError = false;
  checkboxes.forEach(checkbox => {
    if (!checkbox.checked) {
      checkboxError = true;
      checkbox.style.border = '1px solid red';
    } else {
      checkbox.style.border = '';
    }
  });
  
  // Hata varsa formu gönderme
  if (inputError || checkboxError) {
    alert('Lütfen tüm alanları doldurun ve Sözleşmeleri kabul edin.');
  
    return false;
  }
  
  // Formu gönder
  alert('Giriş Başarılı!');
  
  return true;
  }
  // Form gönderme butonlarına tıklandığında formu gönder
  document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const formId = button.id === 'connect-button' ? 'tc-identity' : button.id === 'foreign-connect-button' ? 'foreign-identity' : button.id === 'sms-connect-button' ? 'sms' : 'email';
    submitForm(formId);
  });
  });
  
  
  // Add this to your JavaScript file
  const modal = document.querySelector('.modal');
  const modalText = document.querySelector('#modal-text');
  
  document.querySelectorAll('.checkbox-container label').forEach(label => {
  label.addEventListener('click', event => {
    const checkbox = event.target.previousElementSibling;
    if (!checkbox.checked) {
      const checkboxText = event.target.textContent;
      modalText.textContent = checkboxText;
      modal.style.display = 'block';
    }
  });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
  modal.style.display = 'none';
  });
  
  
  // Formu gönderme fonksiyonu
  function submitForm(formId) {
    const form = document.querySelector(`.${formId}-form`);
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], select');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  
    // Form input alanlarını kontrol et
    let inputError = false;
    inputs.forEach(input => {
        if (input.tagName === 'SELECT' && input.value === '') {
            inputError = true;
            input.style.border = '1px solid red';
        } else if (input.type !== 'date' && input.value.trim() === '') {
            inputError = true;
            input.style.border = '1px solid red';
        } else {
            input.style.border = '';
        }
    });
  
    // Form checkbox'larını kontrol et
    let checkboxError = false;
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            checkboxError = true;
            checkbox.style.border = '1px solid red';
        } else {
            checkbox.style.border = '';
        }
    });
  
    // Hata varsa formu gönderme
    if (inputError || checkboxError) {
        alert('Lütfen tüm alanları doldurun ve Sözleşmeleri kabul edin.');
        return false;
    }
  
    // Formu gönder
    alert('Giriş Başarılı!');
    return true;
  }
  
  
  
  
  // Ay ve yıl değiştiğinde günleri güncelle
  document.querySelectorAll('#birth-month, #birth-year').forEach(select => {
    select.addEventListener('change', () => {
        const month = document.querySelector('#birth-month').value;
        const year = document.querySelector('#birth-year').value;
        const days = getDaysInMonth(month, year);
        const daySelect = document.querySelector('#birth-day');
  
        // Günleri temizle
        daySelect.innerHTML = '';
  
        // Günleri oluştur
        for (let i = 1; i <= days; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }
    });
  });
  
  // Ay ve yıl değiştiğinde günleri güncelle
  document.querySelector('#birth-year').dispatchEvent(new Event('change'));
  
  // Ay ve yıl için günleri hesapla
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  
  // Ay ve yıl değiştiğinde günleri güncelle
  document.querySelectorAll('#foreign-birth-month, #foreign-birth-year').forEach(select => {
    select.addEventListener('change', () => {
        const month = document.querySelector('#foreign-birth-month').value;
        const year = document.querySelector('#foreign-birth-year').value;
        const days = getDaysInMonth(month, year);
        const daySelect = document.querySelector('#foreign-birth-day');
  
        // Günleri temizle
        daySelect.innerHTML = '';
  
        // Günleri oluştur
        for (let i = 1; i <= days; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }
    });
  });
  
  // Ay ve yıl değiştiğinde günleri güncelle
  document.querySelector('#foreign-birth-year').dispatchEvent(new Event('change'));
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=0.9" />
  <title>Sign In</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body, html {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-family: 'Roboto', sans-serif;\n    background: url('assets/image/image.png') no-repeat center center fixed;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n.container {\n    background-color: #fff;\n    border-radius: 10px;\n    padding: 10px;\n    width: 380px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    margin-top: -80px;\n}\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.header img {\n    height: 100px;\n}\n.header h2 {\n    margin: 5px 0;\n    font-weight: 500;\n    text-align: center;\n    flex: 1;\n}\n.header p {\n    color: #666;\n    font-size: 12px;\n    text-align: center;\n    flex: 1;\n}\n.language-selector {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    justify-content: flex-start;\n}\n.language-selector img {\n    width: 23px;\n    height: 15px;\n    margin-right: 5px;\n}\n.language-selector select {\n    border: none;\n    background: none;\n    font-size: 12px;\n    cursor: pointer;\n}\n.tabs {\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 20px;\n    background-color: #F6F8FB;\n    border-radius: 5px;\n    padding: 5px;\n    height: 60px;\n}\n.tabs button {\n    background-color: transparent;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 12px;\n    color: #6c757d;\n}\n.tabs button.active {\n    background-color: #ffffff;\n    color: #000;\n    border: 1px solid #DFE3EB;\n}\n.form-group {\n    margin-bottom: 10px;\n    padding-right: 20px;\n}\n.form-group input {\n    width: 100%;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 12px;\n    height: 28px;\n}\n.form-group label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 12px;\n    color: #333;\n}\n.form-row {\n    display: flex;\n    justify-content: space-between;\n}\n.form-row .form-group {\n    flex: 1;\n}\n.form-row .form-group:last-child {\n    margin-right: 0;\n}\n.btn {\n    width: 100%;\n    padding: 5px;\n    background: #4676E8;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    font-size: 14px;\n    cursor: pointer;\n    height: 45px;\n}\n.footer {\n    text-align: center;\n    margin-top: 10px;\n    font-size: 10px;\n    color: #666;\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n}\n.footer p {\n    margin: 5px 0;\n    color: white;\n}\n.checkbox-container {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n    font-size: 13px;\n}\n.checkbox-container input {\n    margin-right: 10px;\n}\na {\n    text-decoration: none;\n    color: blue;\n}\na:hover, a:focus {\n    text-decoration: none;\n}\n.contact {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    font-size: 12px;\n    color: #ffffff;\n}\n.contact i {\n    margin-right: 5px;\n}\ninput[type=\"text\"]:not(:focus):invalid, input[type=\"email\"]:not(:focus):invalid {\n    border: 1px solid red;\n}\n\n/* Add this to your CSS file */\n.modal {\n    display: none; /* Hide the modal by default */\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content {\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;\n    height: 50%;\n}\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    margin-top: -10px;\n}\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n.modal-body {\n    padding: 20px;\n    text-align: center;\n}\n\n\n\n.day, .month, .year {\n    width: 110%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.day:hover, .month:hover, .year:hover {\n    border-color: #aaa;\n}\n\n.day:focus, .month:focus, .year:focus {\n    border-color: #666;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n    "
    }}
  />
  <div className="container">
    <div className="header">
      <img alt="Stellar Elite Hotels Spa Logo" src="assets/image/star.png" />
      <div className="language-selector">
        <img
          alt="Selected Language Flag"
          height={20}
          id="selected-flag"
          src="assets/image/eng.png"
          width={20}
        />
        <select id="language-select" onchange="changeLanguage(this.value)">
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
    <p id="description">
      Welcome, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </p>
    <div className="tabs">
      <button className="active" id="tab-1">
        TC Identity
      </button>
      <button id="tab-2">Foreign Identity</button>
      <button id="tab-3">SMS</button>
      <button id="tab-4">Email</button>
    </div>
    <div className="forms-container">
      {/* TC Identity Form */}
      <div className="form tc-identity-form">
        <div className="form-group">
          <label htmlFor="tc-identity-number" id="tc-label">
            TC Identity Number
          </label>
          <input
            id="tc-identity-number"
            placeholder="Enter Your TC Number"
            type="text"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" id="name-label">
              Name
            </label>
            <input id="name" placeholder="Enter Your Name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="surname" id="surname-label">
              Surname
            </label>
            <input id="surname" placeholder="Enter Your Surname" type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="birth-day" id="birth-day-label">
              Day
            </label>
            <select id="birth-day" className="day"></select>
          </div>
          <div className="form-group">
            <label htmlFor="birth-month" id="birth-month-label">
              Month
            </label>
            <select id="birth-month" className="month">
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="birth-year" id="birth-year-label">
              Year
            </label>
            <select id="birth-year" className="year">
              {/* 2024'den 1900'e kadar yılları oluştur */}
            </select>
          </div>
        </div>
        <button className="btn" id="connect-button">
          Connect
        </button>
        <div className="checkbox-container">
          <input type="checkbox" id="agreement-checkbox" />
          <label htmlFor="agreement-checkbox" id="agreement-label">
            I Accept the Agreement.
          </label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="share-info-checkbox" />
          <label htmlFor="share-info-checkbox" id="share-info-label">
            I Allow to Share My Information.
          </label>
        </div>
      </div>
      {/* Foreign Identity Form */}
      <div className="form foreign-identity-form" style={{ display: "none" }}>
        <div className="form-group">
          <label htmlFor="foreign-identity-number" id="foreign-id-label">
            Passport Identification Number
          </label>
          <input
            id="foreign-identity-number"
            placeholder="Enter Your Passport Identification Number"
            type="text"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="foreign-name" id="foreign-name-label">
              Name
            </label>
            <input
              id="foreign-name"
              placeholder="Enter Your Name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="foreign-surname" id="foreign-surname-label">
              Surname
            </label>
            <input
              id="foreign-surname"
              placeholder="Enter Your Surname"
              type="text"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="foreign-birth-day" id="foreign-birth-day-label">
              Day
            </label>
            <select id="foreign-birth-day" className="day"></select>
          </div>
          <div className="form-group">
            <label htmlFor="foreign-birth-month" id="foreign-birth-month-label">
              Month
            </label>
            <select id="foreign-birth-month" className="month">
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="foreign-birth-year" id="foreign-birth-year-label">
              Year
            </label>
            <select id="foreign-birth-year" className="year">
              {/* 2024'den 1900'e kadar yılları oluştur */}
            </select>
          </div>
        </div>
        <button className="btn" id="foreign-connect-button">
          Connect
        </button>
        <div className="checkbox-container">
          <input type="checkbox" id="foreign-agreement-checkbox" />
          <label
            htmlFor="foreign-agreement-checkbox"
            id="foreign-agreement-label"
          >
            I Accept the Agreement.
          </label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="foreign-share-info-checkbox" />
          <label
            htmlFor="foreign-share-info-checkbox"
            id="foreign-share-info-label"
          >
            I Allow to Share My Information.
          </label>
        </div>
      </div>
      {/* SMS Form */}
      <div className="form sms-form" style={{ display: "none" }}>
        <div className="form-group">
          <label htmlFor="sms-number" id="sms-number-label">
            SMS Number
          </label>
          <input
            id="sms-number"
            placeholder="Enter Your SMS Number"
            type="text"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sms-name" id="sms-name-label">
              Name
            </label>
            <input id="sms-name" placeholder="Enter Your Name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="sms-surname" id="sms-surname-label">
              Surname
            </label>
            <input
              id="sms-surname"
              placeholder="Enter Your Surname"
              type="text"
            />
          </div>
        </div>
        <div className="form-group">
          <button className="btn" id="sms-connect-button">
            Connect
          </button>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="sms-agreement-checkbox" />
          <label htmlFor="sms-agreement-checkbox" id="sms-agreement-label">
            I Accept the Agreement.
          </label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="sms-share-info-checkbox" />
          <label htmlFor="sms-share-info-checkbox" id="sms-share-info-label">
            I Allow to Share My Information.
          </label>
        </div>
      </div>
      {/* Email Form */}
      <div className="form email-form" style={{ display: "none" }}>
        <div className="form-group">
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <input id="email" placeholder="Enter Your Email" type="email" />
        </div>
        <div className="form-group">
          <button className="btn" id="email-connect-button">
            Connect
          </button>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="email-agreement-checkbox" />
          <label htmlFor="email-agreement-checkbox" id="email-agreement-label">
            I Accept the Agreement.
          </label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="email-share-info-checkbox" />
          <label
            htmlFor="email-share-info-checkbox"
            id="email-share-info-label"
          >
            I Allow to Share My Information.
          </label>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="contact">
        <i className="fas fa-phone-alt" />
        <p id="phone-number">0242 606 24 24</p>
      </div>
      <div className="logo ml-32">
        <img alt="MSE Logo" src="assets/image/mse.png" width={120} />
      </div>
    </div>
    {/* Add this to your HTML file */}
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">×</span>
        </div>
        <div className="modal-body">
          <p id="modal-text" />
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Login