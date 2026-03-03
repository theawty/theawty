const texts = {
  ru: {
    heroTitle: "Автомобильная фотография",
    heroSubtitle: "Индивидуальные и коммерческие съёмки",
    portfolio: "Портфолио",
    prices: "Услуги",
    contacts: "Контакты",

    basic: "10–15 фото · 1 авто · 1 локация · 35$",
    standard: "Видео 30–60 секунд под любой запрос + несколько статичных и динамичных фото · 40$",
    premium: "20–35 фото · 1 авто · 1 локация · 45$"
  },

  en: {
    heroTitle: "Car Photography",
    heroSubtitle: "Automotive & commercial shoots",
    portfolio: "Portfolio",
    prices: "Services",
    contacts: "Contacts",

    basic: "10–15 photos · 1 car · 1 location · $35",
    standard: "30–60 sec video on request + several static and dynamic photos · $40",
    premium: "20–35 photos · 1 car · 1 location · $45"
  },

  ro: {
    heroTitle: "Fotografie auto",
    heroSubtitle: "Ședințe foto auto și comerciale",
    portfolio: "Portofoliu",
    prices: "Servicii",
    contacts: "Contacte",

    basic: "10–15 poze · 1 mașină · 1 locație · 35$",
    standard: "Video 30–60 sec la cerere + poze statice și dinamice · 40$",
    premium: "20–35 poze · 1 mașină · 1 locație · 45$"
  }
};

function setLang(lang) {
  document.getElementById("hero-title").textContent = texts[lang].heroTitle;
  document.getElementById("hero-subtitle").textContent = texts[lang].heroSubtitle;
  document.getElementById("portfolio-title").textContent = texts[lang].portfolio;
  document.getElementById("prices-title").textContent = texts[lang].prices;
  document.getElementById("contacts-title").textContent = texts[lang].contacts;

  document.getElementById("price-basic").textContent = texts[lang].basic;
  document.getElementById("price-standard").textContent = texts[lang].standard;
  document.getElementById("price-premium").textContent = texts[lang].premium;

  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "ru";
setLang(savedLang);

// Открыть полноэкранное изображение
function openImg(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

// Закрыть при клике
function closeImg() {
  document.getElementById('lightbox').style.display = 'none';
}