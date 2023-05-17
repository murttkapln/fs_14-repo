// let str1 = "This is a string"
// let str2 = "This is a string"
// let str3 = "This is a string"
// let str4 = new String("This is a string")

// console.log(typeof str1); //string
// console.log(typeof str2); //string
// console.log(typeof tr3);  //string
// console.log(typeof str4); //object
// console.log(str1[0]); // T

// const str = "Hello World"
// console.log(str.length); // 11
// console.log(str[6]);   // w
// let newStr = "";
// for (let i =0; i< str.length; i++){
// //   console.log(str[i]);
// newStr += str[i];
// }
// console.log(newStr);  // Hello World

// let newStr = "";
// for (let i = str.length-1; i>=0; i--){
//     // console.log(str[i]);
//     newStr += str[i]
//   }
//   console.log(newStr); // dlroW olleH

// let str = 'I\'m a string'
// let str2 = "I'm a\0string\""
// console.log(str2);

// alert(`1- ders\n 2-Kayit\n 3-Pre-class`)

// ****************** slice *****************
// ?  --> orjinal veriyi bozmaz
// ? --> 2.değer sınırı belirler

//  let str = "Hello World"
//  console.log(str.slice(-3)); // rld
//  console.log(str.slice(-9, -3)); //  llo Wo

// ****************** substring *****************
// ?  --> orjinal veriyi bozmaz
// ?  -->ilk değer bakılması gereken index, ikinci değer ise sonrasında alınacak karakter sayısını belirtir.

//  let str = "Orange"

//  console.log(str.substring(0,4)); // Oran
//  console.log(str.substring(4,0)); // Oran
//  console.log(str.substring(2));  // ange
//  console.log(str.substring(str.length -4)); // ange //?--> son 4 karakter alındı
//  console.log(str.substring(-4));   //! çalışmaz

// ****************** concat*****************
// ? orjinal veri bozulmaz
// ? (+) concat'a göre daha hızlı işleme alır

//  let srt = "Clarusway"
//  let str2 = "Full"
//  let str3 = "Stack"
//  const result = str1.concat(" ", str2, " ", str3)
//  console.log(result);
//  console.log(str1);

// let greet = "Hello"

// console.log(greet.concat("World"));
// console.log("Hello".concat("World"));
// let isim = prompt("Adınızı giriniz")

// console.log("Merhaba ".concat(isim));

// console.log("Merhaba " + isim);

// ****************** includes *****************
// ?  --> yazı içerisinde var mı kontrol ediyor
// ? boolean değer döndürür (true -false)
//? sorgulanan değer bulunmuyorsa  -1 döndürür

//  let str1 = "Clarusway"

//  console.log(str1.includes("l")); // true
//  console.log(str1.includes("l",1)); //true //?-->  1.değerden itibaren ara

// ****************** indexOf *****************
// ? içerisnde bulunmazsa -1 döndürür.
//  let str1 = "Clarusway";
//  console.log(str1.indexOf("l")); // 3
//  console.log(str1.indexOf("a", 3)); // 7
//  console.log(str1.indexOf("l", 3)); // -1 //? atanan değer bulunamadı
// ****************** örnek *****************
//?  E-mail validation
// const email = prompt("Give ur email adress");
// if (email.indexOf("@") === -1) {
//   console.log("Invalid Email");
// } else {
//   console.log("Valid Email");
// }
// //  console.log(email.includes("@"));


// ****************** lastIndexOf *****************
//? Aranan değer yok ise -1 döndürür.
//? verilen indexten sonrasındaki değerin en son bulunduğu index döndürülür.

// let str = "Hello Jhon, welcome to Clarusway"

// console.log(str.lastIndexOf("o")); // 21

// console.log(str.lastIndexOf("o", 6)); // 4
// console.log(str.lastIndexOf("0", 6)); // -1

// console.log(str.indexOf("o")); //4

// ****************** search *****************
//? 2. parametre yok


// let str = "You do not KNOW what you do not know until you know.";

// console.log(str.search("know")); // 32
// console.log(str.search(/know/)); // 32  with regular expression
// console.log(str.search(/know/i)); // 11 ( ıt means not case sensitive)
// console.log(str.search(/klow/i)); // -1


// let str1 = "hello world"
// const arama = /[A-Z]/; //? A-Z arası bütün büyük harfler
// const arama2 = /[a-z]/; //? a-z arası bütün küçük harfler
// console.log(str1.search(arama)); //-1



// ****************** replace *****************

// let str = "Mr Brown has a brown house and a brown car"

// let newStr = str.replace("brown", "red")
// let newStr2 = str.replace(/brown/i, "red") // case sensitive ignore eder
// let newStr3 = str.replace(/brown/ig, "red") // ne kadar varsa değiştirir.
// let newStr4 = str.replace(/brown/g, "red") //küçük brownların tümünü değiştir

// console.log(newStr);
// console.log(newStr2);
// console.log(newStr3);
// console.log(newStr4);

// ****************** replaceAll *****************
//? belirtilen değerlerinin tümünü değiştitir

// let str = "Mr Brown has a brown house and a brown car"

// console.log(str.replaceAll("brown", "red")); // sorguya uyan tüm sonuçları değiştirir

// ****************** split *****************
// ? string ifadeleri böleciği yeri seçer ve o kısımdan itibaren Array içersine atar
//? aratılan değer yok ise Array içerisinde yine kendini döndürür

// let str = "Welcome to: Full Stack";
// console.log(str.split());
// console.log(str.split(" "));
// console.log(str.split(":"));
// console.log(str.split("Full"));
// console.log(str.split("full"));
// console.log(str.split());


// ****************** toLowerCase - toUpperCase *****************

// let str = "Welcome to  Full Stack";
// let str1 = "ÖğiüüşşşÇÇÇİÖgğğiİĞÇ"

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());



// ****************** trim() *****************
//? string ifadenin boşluklarını almamıza olanak sağlar

// let str = "      welcome to Full Stack      ";

// console.log(str);
// console.log(str.trim()); // hem baştan hem sondan boşlukları temizler
// console.log(str.trimStart()); // baştaki boşlukları temizler
// console.log(str.trimEnd()); //  sondaki boşlukları temizler


// ****************** startsWith() - endsWith() *****************
//? boolean değer döndürür
//? 2. parametre ile aratılack olan kısım specific olarak belirtilir
// ?  şartı karşılıyorsa  --> true vermiyorsa --> false 

// let str = "clarusway @Clarusway.com is our e-mail address";

// console.log(str.startsWith("clarusway")); // true
// console.log(str.startsWith("Clarusway")); // false
// console.log(str.endsWith("clarusway", 10)); // false



// ****************** Chaining Methods *****************

// let str = "      Clarusway Full Stack      "

// let str1 = str.trim() // Clarusway Full Stack
// let str2 = str1.slice(0,9) //Clarusway
// let str3 = str2.toUpperCase() // CLARUSWAY

// console.log(str.trim().slice(0,9).toLocaleUpperCase());