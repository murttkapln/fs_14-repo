//? Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//? Sonuc Tablosu
const gelirinizTd = document.getElementById("geliriniz");

//? Variables
let gelirler = 0;

//?Events

// Formun submit butonuna basildiginda.
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //? reload 'u engeller
  gelirler = Number(gelirler) + Number(gelirInput.value); //?  string eklemeyi engelledik
  localStorage.setItem("gelirler", gelirler); //? Gelirleri kalici olması icin localeStorage 'da sakliyoruz

  ekleFormu.reset(); //? input degerini sifirladik

  hesaplaVeGuncelle(); //? Degisiklikleri sonuc tablosuna yazan fonks.
});

//! Sayfa her yuklendikten sonra calisan event
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler"));
  hesaplaVeGuncelle();
});

//? Functions
hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler;
};
