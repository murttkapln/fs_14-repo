
// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

const Events = () => {
  let message = "EVENTS"
  const handleClick = (e) => {
    alert("Hi")
    console.log(e);
    console.log(e.target);
  }
  
  const handleChange = ()=> {
    message = "STATE"
  }
  return (
    <div className="text-center mt-5 p-2">
      <h1 className="display-6 fw-bold text-danger-emphasis" >{message}</h1>
      <button className="btn btn-dark me-2 rounded-start-pill" onClick={handleClick}>Click</button>
      <button className="btn btn-success" onClick={handleChange}>Change</button>
      {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button className="btn btn-warning ms-2 rounded-end-pill" onClick={()=> alert("deneme")}>Save</button>
    </div>
  )
}

export default Events


//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.