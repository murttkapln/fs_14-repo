//? Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//? Sonuc Tablosu
const gelirinizTd = document.getElementById("geliriniz");

//? Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//? Harcama Tablosu
const harcamaBody = document.getElementById("harcama-body");

//? Variables
let gelirler = 0;

let harcamaListesi = [];

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
  //? Gelir abilgisini localStorage 'dan okuyarak global degiskenimize yaz
  gelirler = Number(localStorage.getItem("gelirler"));

  //? localeStorage ' dan harcama listesini okuyarak global dizimize saklıyoruz
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []; // || yoksa  && varsa

  //? harcama dizisinin icindeki objeleri tek tek DOM 'a yaziyoruz.
  harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama));

  // console.log(harcamaListesi);

  //? Tarih inputunu bugunun degeri ile yukle
  tarihInput.valueAsDate = new Date();

  //? Degisen bilgileri hesapla ve DOM'a  bas
  hesaplaVeGuncelle();
});

//! Harcama Formu submit edildiginde calisir
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(e);

  //? Yeni harcama bilgileri ile bir obje olustur.
  const yeniHarcama = {
    id: new Date().getTime(), //? Sistem saatini (ms olarak) verir. Unique gibidir.
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };
  //? yeni harcama objesini diziye ekle
  harcamaListesi.push(yeniHarcama);

  harcamayiDomaYaz(yeniHarcama);

  //? dizinin son halini localeStorage ' e gonder
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));

  harcamaFormu.reset(); //? formdaki verileri sil
  tarihInput.valueAsDate = new Date();
});

//? Functions
hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler;
};

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const { id, miktar, tarih, alan } = yeniHarcama;
  harcamaBody.innerHTML += `
  <tr>
    <th>${tarih}</th>
    <th>${alan}</th>
    <th>${miktar}</th>
    <th><i id=${id} class="fa-solid fa-trash text-danger" type="button"></i></th>
  </tr>  
  `;
};

harcamaBody.addEventListener("click", (e) => {
  // console.log(e.target);

  //? Event bir sil butonundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    //? DOM 'dan ilgili row 'u sildik.
    e.target.parentElement.parentElement.remove();

    const id = e.target.id;
    console.log(id);

    //? Dizideki ilgili objeyi sildik.
   harcamaListesi =  harcamaListesi.filter((harcama)=> harcama.id != id)


//? Sİlinmis yeni diziyi localStorage  'a aktardık.
localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))


   console.log(harcamaListesi);
  }
});
