//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const delay = (waitingtime) => {
//   const startTime = new Date().getTime();

//   while (new Date().getTime() < startTime + waitingtime) {}
// };

// console.log("Hello");
// alert("Blocked!") //? Blocking
// console.time("gecikme");
// delay(4000); //? blocking code
// console.timeEnd("gecikme");
// console.log("Hi");

//* Asenkron (setTimeout)
//* ------------------------------------------------

/* setTimeout(() => {
  console.log("I'm fine");
}, 1000); */

/* setTimeout(() => {
  console.log("Whats up!"), 2000;
  // console.timeEnd("Timer")
}, 2000); */

// console.log("start");
// console.time("timer")

//* Asenkron (setInterval, clearInterval)
//* ------------------------------------------------

//? setInterval periyodik zaman araligi olusturmak icin kullanilabilir.
//? clearInterval yardimiyla surekli devam eden interval pasif hale gelir.
// let count = 0;
// const sec1 = setInterval(() => {
//   console.log(++count);
//   if (count > 9) {
//     clearInterval(sec1);
//   }
// }, 1000);

//! Callback hell (nested ve birbirine bagli callback'ler)
//! ------------------------------------------------
//* Eger birbirine bagimli asenkron  kodlarin yazilmasi gerekirse, nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
//! callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukça zordur.

setTimeout(() => {
  console.log("John: Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("john: How are you?");
      setTimeout(() => {
        console.log("Sarah: Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


//? CUZUMLER
//? ------------------------------------------------
//* 1 - XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2 - Promise
//! 3 - Fetch API ( Promise 'in basitlestirilmis hali)
//! 4 - ASYNC-AWAIT (Fetch API 'nin makyajlanmis  hali)

