// **************************************************
// -----------------CONDITIONS--------------------------
// **************************************************

// // const calismaSuresi = prompt("Calisma Suresı:");
// // let maas = prompt("Maas:");

// // if (calismaSuresi >= 10) {
// // //   maas = Math.trunc(maas * 1.1)
// //   maas = Math.round(maas * 1.1)
// //   console.log("zamli Maas:", maas);
// //   console.log(`zamli Maas: ${maas}`);
// // } else {
// //   console.log("Uzgunuz maasiniza zam yapamıyoruz.", maas);
// // }
// // console.log("bye bye");

// const grade = prompt("Please enter ur grade");

// // let result = "";
// let result = null;

// if (grade < 0) {
//   console.log("Grade can not be small than zero");
// } else {
//   if (grade < 40) {
//     result = "FF";
//   } else if (grade <= 50) {
//     result = "DD";
//   } else if (grade <= 65) {
//     result = "CC";
//   } else if (grade <= 89) {
//     result = " BB";
//   } else if (grade <= 100) {
//     result = "AA";
//   } else {
//     console.log("Grade can not be bigger than 100");
//   }
// }

// // if (result != null){

// //     console.log(`Your score: ${result}`);
// // }
// if (result) {
//   console.log(`Your score: ${result}`);
// }

// const n1 = +prompt("Num1:")
// const n2 = +prompt("Num2:")
// const n3 = +prompt("Num3:")

// let biggest = n1

// if (n2 >= biggest){
//     biggest = n2
// }if(n3 <= biggest){
//     biggest = n3
// }

// console.log(`${biggest} is biggest`);

// ? Ternary */
// grade >= 50 ? console.log("succeed") : console.log("failed");
// grade >= 50 ? "SUCCEED" : "FAILED";

// let speed = 110;

// speed > 120
//   ? console.log("SPEEDY")
//   : speed >= 90
//   ? console.log("NORMAL")
//   : console.log("LOW SPEEDY");

// if (speed > 120) {
//   console.log("Speedy");
// } else if (speed >= 90) {
//   console.log("Normal");
// } else {
//   console.log("Low Speed");
// }

// ************************  SHORT CIRCUIT *********************

// const age = 18;

// let description = "";

//? if-else
// if (age >= 18) {
//   description = "Adult";
// }

//?  Ternary
// description = age >= 18 ? "Adult" : "";

//? Short Circuit
// age >= 18 && (description = "Adult");
// age < 18 || (description = "Adult");

// console.log(description);

// **************************************************
// -----------------LOOPS--------------------------
// **************************************************

//? ************** FOR ********************
// for(let i=1; i<=100; i++){
//     console.log(`${i} - FS14`);
// }

/* const n = +prompt("Enter ur number.");

let sum = 0; // Global degisken 
for (let i = 1; i <= n; i++) { // i local variables
  sum += i;
//   console.log(sum);
}
console.log(`SUM : ${sum}`); */

/* 
const number = +prompt("How many numbers:?");

for (let sayac = 1; sayac <= number; sayac++) {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`${sayac}.sayınız: ${randomNumber}`);
}
 */

/* 
Math.floor() // en yakin tamsayıya
Math.ceil() // en yakin ust tamsayıya
Math.round() //degerine gore yuvarlar
Math.trunc() // kesirli sayinin tam kismini alir.
 */

//? Asal mı değil mi? Programı yaz. For ile yaz.

/* const number = +prompt("Enter a number");

 let isPrime = true;
if (number <= 1) {
  console.log(`${number} is not prime`);
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime`);
  } else {
    console.log(`${number} is a  not prime`);
  }
} else {
  console.log("The number is not a prime ");
} 
 */

//? ************** WHILE ********************

/* let i = 1
while(i <=100){
    console.log(i);
    i++
}
console.log("BYE"); */

/* let not = prompt("0-100 arasında bir rakam gir");

// if (not < 0 || not > 100) {
    //   console.log("Not 0-100 arasında olmaldır");
    // }
    while (not < 0 || not > 100) {
        console.log("Not 0-100 arasında olmaldır");
        not = prompt("0-100 arasında bir rakam gir");
    }
    
    console.log("Notunuz:", not); */

//? ************** DO-WHILE ********************
/*     let not; 
    do  {
        not = prompt("0-100 arasında bir rakam gir");
        if (not < 0 || not > 100){
            alert("Not 0-100 asrasında olmalı")
        }
    }while (not < 0 || not > 100)
    console.log("Notunuz:", not);
 */
//? Gues Number App yap

// let sayac = 5;
// let number = +prompt("Give a number between 0-100");
// const randomNumber = Math.trunc(Math.random() * 100);
// console.log(randomNumber);

// do {
//   if (number < 0 || number > 100) {
//     number = +prompt("Keep gueshing");
//     alert("Number must be between in 0-100");
//   } else if (randomNumber < number) {
//     console.log(`You've guessed to high`);
//   } else if (randomNumber > number) {
//     console.log(`You've guessed too low`);
//   } else {
//     console.log(`Conguraculations 👏👏👏`);
//   }
// } while (number != randomNumber);

// **************************************************
// -----------------FUNCTIONS--------------------------
// **************************************************

//? ************** DECLARATION ********************

// function add(x,y){
//   return x + y
// }
// console.log(add(3,5));

//? ************** EXPRESSION ********************

// const add = function(x,y){
//   return x +y
// }

// console.log(add(3,5));

//? ************** ARROW ********************
// const add = (x, y) => x + y;
// console.log(add(3, 5));

// const kareAl = (x)=> x*x
// console.log(kareAl(2));

//ORNEK: Bir func icinde baska bir func cagrilabilr (//! Hesap makinası)

/* const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const multiple = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

const compute = (n1, n2, operator) => {
  let result = 0;
  switch (operator) {
    case "+":
      // result = n1 + n2;
      result = add(n1, n2);
      break;
    case "-":
      // result = n1 - n2;
      result = sub(n1, n2);
      break;
    case "x":
    case "*":
      // result = n1 * n2;
      result = multiple(n1, n2);
      break;
    case "/":
      // result = n1 / n2;
      result = div(n1, n2);
      break;
    default:
      alert("Incorrect Operator")
      result="Error"
      break;
  }
  return result;
};
const n1 = +prompt("First Number:");
const operator = prompt("Operator:"); 
const n2 = +prompt("Second Number:");

console.log(`${n1}${operator}${n2}=${compute(n1, n2, operator)}`); */

//ORNEK: Girilen sayinin faktoriyelini hesaplayan programı fonksiyonlar yardımıyla kodlayiniz.

//? FIBONACCI terimler: n! = n *(n-1)!

//! ITERASYON YONTEMI
//? FAkto(5)=> 5.4.3.2

/* const facto = (n) => {
  let f = 1;
  for (let i = n; i > 1; i--) {
    f = f * i;
  }
  return f;

  // for(let i=2; i<=n;i++){}
};

const n = +prompt("Give a number:");
n < 0
  ? alert("Number should be bigger than zero")
  : console.log(`(${n}!)=${facto(n)}`); */

//! ************** RECURSION ********************
// Kendi kendii cagiran fonksiyonlara recursive func denir.

//? FIBONACCI terimler: n! = n *(n-1)!
//? FAkto(5)=> 5.4.3.2

//ORNEK: Girilen sayinin faktoriyelini hesaplayan programı recursive fonksiyon yardımıyla kodlayiniz.

/* const facto = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * facto(n - 1);
  }
};

const n = +prompt("Give a number:");

n < 0
  ? alert("Number should be bigger than zero")
  : console.log(`(${n}!)=${facto(n)}`);
 */

//? fibonacci çöz
// fibo = 1 , 1 , 2, 3, 5, 8, 13, 21..
/* const n = +prompt("n:")

const fibo = (n)=>{
    let küme = 1 
    for(let i=1; i<n;i++){
      küme +=  fibo(n-1)
    }
    return küme
  }

  console.log(`${n}.fibo=${fibo(n)}`); */

//? ************** SCOPE *********************

/*   let number1 = 3 // Global
  let number2 = 5 // Global

  console.log(number1); // 3


  const func = ()=>{
    number1 = 44 // Global değiskene atama yapildi
    const number2 = 7// local (block-scopped) degisken
    console.log("LOCAL:", number2);// 7
  }

  func()

  console.log(number1); // 44
  console.log("GLOBAL:", number2);// Golabl number 2 (5) */

//? Blocked Scope
/* {
  let x = 77;
  x++;
  console.log(x);
} */

// console.log(x); //! Error: Scope Dışında
// let number2 = 90;
// number2 = 4;
// console.log(number2);

//! Hoisted degiskendir
/* // number3 = 101; //?isim verilmezse var devreye giriyor.
console.log(number3);
var number3 = 101; //? Hoisted degiskendir */

//? Muadili
/* var number3;
console.log(number3);
number3 = 101; // Hoisted degiskendir

if (number3 === 101) {
  let result = "Hi";
  console.log(result);
} else {
  console.log(result);
  var result = "Hello";
}

console.log(result);
 */

// **************************************************
// -----------------STRINGS-METHODS--------------------------
// **************************************************

// const str = "Hello world";
// console.log(str.length);
// console.log(str[6]);

// for (let i =0; i<str.length;i++){
//   console.log(str[i]);
// }
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

//? ************** METHODS *********************

//? slice()
/* let str1="Clarusway"
let str2 = str1.slice(-3)
console.log(str1, str2); //Clarusway //way */

//? substring()
// let str= "Orange"
// console.log(str.substring(0,4)); //Oran
// console.log(str.substring(str.length-4));//ange
// console.log(str.substring(-4));//Orange //çalışmaz
// console.log(str.substring(3));//nge // 3'ten başla sona git

// let str2 = str.substring(0,2)
// console.log(str2);//Or

//? concat()
// let str1 = "Clarusway"
// let str2= "Full"
// let str3= "Stack"
// const result = str1.concat(" ", str2, " ", str3)
// console.log(result);

//? includes()
// let str= "Hello John, welcome to clarusway"
// console.log(str.includes("welcome")); // true
// let str1 = "Clarusway"
// console.log(str1.includes("l",1)); // true 1. indexten itibaren bak

//? indexOf()
/* let str1 = "Clarusway"
// let str= "Hello John, welcome to clarusway"
// console.log(str.indexOf("welcome"));//12
// console.log(str.includes("welcome")); // true
console.log(str1.indexOf("a",3)); // 7 // 3.indexten itibaren bak
console.log(str1.indexOf("l",3));//-1 içerisinde bulunamadı. */
// Örnek: Email check(@)
// const email = prompt("Give email")
// console.log(email.includes("@"));

// örnek2: Cümle içerisinde kelimenin kaç defa kullanıldığını yazan program

/* const findCount=(source,search)=>{
  let count = 0
  let position= source.indexOf(search)

  while(position !== -1){
    count ++
    position= source.indexOf(search, ++position)
  }
  return count
}

let str = `You do not know waht you do not know until you know.`
console.log(findCount(str, "know")); */

/* //? lastIndexOf()
let str= "Hello John, welcome to clarusway"
console.log(str.lastIndexOf("o")); //21
console.log(str.lastIndexOf("o", 20)); //16 index 20'ye kadar olan kısma bakar */

//? search()

/* let str = `You do not KNOW waht you do not know until you know.`

console.log(str.search("know"));//32
console.log(str.search(/know/));//32
console.log(str.search(/know/i));//11 (i means not case sensitive)
console.log(str.search("klnow"));//-1 */
/* let str2 = "hello World";
const arama = /[A-Z]/; // A_Z arası bütün büyük harfler
const arama2 = /[a-z]/; // a_a arası bütün küçük harfler
console.log(str2.search(arama)); // 6 */

//? replace()
/* let str1 = "Mr Brown has a brown house and a brown car";
let newStr = str1.replace("brown", "red");
let newStr2 = str1.replace(/brown/i, "red");
let newStr3 = str1.replace(/brown/ig, "red");
let newStr4 = str1.replace(/brown/g, "red");
console.log(newStr); //Mr Brown has a red house and a brown car
console.log(newStr2); //Mr red has a brown house and a brown car
console.log(newStr3); //Mr red has a red house and a red car
console.log(newStr4); //Mr Brown has a red house and a red car
 */

//? replaceAll()
/* let str1 = "Mr Brown has a brown house and a brown car"
console.log(str1.replaceAll("Brown", "red"));//Mr red has a brown house and a brown car //? Sorguya uyanların tümünü değiştir */

//? split()
// array'e çevir
/* let str = "Welcome to: Full Stack"
console.log(str.split()); //['Welcome to: Full Stack']
console.log(str.split(":")); // ['Welcome to', ' Full Stack']
console.log(str.split(" ")); // ['Welcome', 'to:', 'Full', 'Stack']
console.log(str.split("")); //['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ':', ' ', 'F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k'] */

//? toLoweCase() & toUpperCase()
/* let str= "Welcome to Full Stack (iii sda ğğğğğğ ççç ooo ööö) "
console.log(str.toLowerCase());//welcome to full stack (iii sda ğğğğğğ ççç ooo ööö) 
console.log(str.toLocaleLowerCase()); //welcome to full stack (iii sda ğğğğğğ ççç ooo ööö) 

console.log(str.toUpperCase()); // WELCOME TO FULL STACK (III SDA ĞĞĞĞĞĞ ÇÇÇ OOO ÖÖÖ) 
console.log(str.toLocaleUpperCase("TR")); //WELCOME TO FULL STACK (İİİ SDA ĞĞĞĞĞĞ ÇÇÇ OOO ÖÖÖ)  */

//? trim()

/* let str = "  Welcome to Full Stack    "

console.log(str.trim());//Welcome to Full Stack 
console.log(str.trimEnd()); // Sondan temizler
console.log(str.trimStart()); // Baştan Temizler */

//? startsWith() & endsWith()
/* let str = "clarusway@Clarusway.com is our e-mail address"
console.log(str.endsWith("clarusway"));
console.log(str.startsWith("Clarusway"));
console.log(str.startsWith("Clarusway", 10)); */

/* let email = "clarusway@Clarusway.com"
console.log(email.endsWith("com")); // true */

//? chaining

/* let str = "       Clarusway Full Stack   "


console.log(str.trim().slice(0,9).toUpperCase());//CLARUSWAY */

// **************************************************
// -----------------ARRAYS-METHODS--------------------------
// **************************************************

/* const colors = ["red", "green", "blue"]
colors[6] =2 
console.log(colors); // ['red', 'green', 'blue', empty × 3, 2]
console.log(colors.length); // 7
console.log(colors[3]);// undefined
colors[100] = "pink"
console.log(colors); // ['red', 'green', 'blue', empty × 3, 2, empty × 93, 'pink'] */

//? primitive values
/* let a = 5;
let b = a;
console.log(a); // 5
console.log(b); // 5

a = 6;
console.log(b); // 5
console.log(a); // 6

b = a;
console.log(b); // 6 */

//? non-primitive values

/* let arr1 = [1,2,'Three', false]

const arr2 = arr1 
console.log(arr1); // [1, 2, 'Three', false]
console.log(arr2); // [1, 2, 'Three', false]

arr1[0]= 0

console.log(arr1); // [0, 2, 'Three', false]
console.log(arr2); // [0, 2, 'Three', false]
 */

/* const c = ["2"]
console.log(c); // []
console.log(Boolean(c)); // true
const d = ["2"]
console.log(c == d); // false //? sebebi stack'te farklı referans olarak atanmasıdır. Heap'te aynı değeri taşısa dahi referansları farklı olacağından eşitlik söz konusu değildir. */

//? ************** METHODS *********************

//? slice()
/* slice(start, stop); // stop index not included */

/* const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];
const cls = colors.slice();

console.log(colors); //['Red', 'Green', 'Blue', 'Brown']
console.log(cls); // ['Red', 'Green', 'Blue', 'Brown']

console.log(colors.slice(2, 4)); // ['Blue', 'Yellow']
console.log(colors.slice(-2)); //  ['Yellow', 'Brown']
console.log(colors.slice(2)); //  ['Blue', 'Yellow', 'Brown']
console.log(colors.slice(6)); // [] limit dışı
console.log(colors.slice(-2, 1)); // [] hatalı indexleme
console.log(colors.slice(2, -1)); // [] hatalı indexleme
console.log(colors.slice(-3, -1)); // ['Blue', 'Yellow'] */

//? push()
//? original array will be changed
/* const arr = ["red", "blue"]
arr.push("orange")
console.log(arr); //  ['red', 'blue', 'orange'] */
/* 
const colors = ["Red", "Green"];
let c = "White";
const d = colors.push("Blue", 2023, c);
console.log(d); // 5
console.log(colors); //['Red', 'Green', 'Blue', 2023, 'White']

console.log(colors.length); // 5
console.log(d + ' d'); */

/* const car = ["Audi", "BMW"];
const car2 = ["Ford", "Tesla"]; */
/* car.push(car2);
console.log(car); //["Audi", "BMW", ["Ford", "Tesla"]] // length=3 */
/* car.push(...car2);
console.log(car); //['Audi', 'BMW', 'Ford', 'Tesla'] // length= 4 //? destructuring */

//? pop()
//? removes the last element
//? returns that moved element
//? lenght of array changes

/* const car = ["Ford","Audi", "BMW"]
console.log(car.pop()); // BMW
console.log(car); // ['Audi', 'BMW']
const movedElement = car.pop()
console.log(movedElement); // Audi
console.log(car); //['Ford'] */

//? unshift()
//? adds one or more elements to beginning

/* const colors = ["red", "lue"];
// colors.unshift("Green");
console.log(colors.unshift("Green")); // 3 length of new array
console.log(colors); // ['Green', 'red', 'lue']
 */

/* const car = ["Audi", "BMW"];
const car2 = ["Ford", "Tesla", "Mercedes"];
 */
/* car.unshift(car2);
console.log(car); // [["Ford", "Tesla", "Mercedes"], "Audi", "BMW"]; */
/* car.unshift(...car2);
console.log(car); // ['Ford', 'Tesla', 'Mercedes', 'Audi', 'BMW']
 */

//? shift()
//? removes the first element
//? returns that moved element
//? lenght of array changes

/* const colors = ["Red", "Green", "Blue", "Yellow", "Brown"]
console.log(colors.shift());// Red
console.log(colors); // ['Green', 'Blue', 'Yellow', 'Brown'] */

//! Question:
// const arr1 = ["red", "blue", "purple","white","orange"]
// Replace the red and orange...

/* const first = arr1.pop()
const last = arr1.shift()

arr1.unshift(first)
arr1.push(last)
console.log(arr1); //  ['orange', 'blue', 'purple', 'white', 'red'] */

//? splice(a,b)
//?  go to index a , delete b item

// deleted
// const colors = ["red", "blue", "purple", "white", "orange"];
/* console.log(colors.splice(2,1)); // ["purple"]
console.log(colors); // ['red', 'blue', 'white', 'orange']
console.log(colors.splice(2)); //  ['white', 'orange'] */

// added
/* console.log(colors.splice(2,0, "white")); // [] silmediği için boş array döndürür.
console.log(colors); // ['red', 'blue', 'white'] */

// change element
/* console.log(colors.splice(3,1, "Pink")); // ["white"]
console.log(colors); // ['red', 'blue', 'purple', 'Pink', 'orange']
 */
/* console.log(colors.splice(3,2, "Pink", "Black")); // ['white', 'orange']
console.log(colors); // ['red', 'blue', 'purple', 'Pink', 'Black'] */

//! Question:
/* const arr1 = ['red', 'blue', 'purple']
const removed = arr1.splice(0,0, 'yellow')

console.log(arr1); // ??? ["yellow","red", "blue", "purple"]
console.log(removed); // ??? [] */

//? concat()

/* let color1 = ["red", "green"];
const color2 = ["blue", "orange"];
const color3 = [10, true]; */

/* const joinedArray = color1.concat(color2, color3)
console.log(joinedArray); // ['red', 'green', 'blue', 'orange', 10, true]
 */
/* const destructuringArray = color1.push(...color2, ...color3)
console.log(destructuringArray); //  6
console.log([...color1, ...color2, ...color3]); //['red', 'green', 'blue', 'orange', 10, true, 'blue', 'orange', 10, true] */

/* color1 = color1.concat("Black", color2, 2);
console.log(color1); // ['red', 'green', 'Black', 'blue', 'orange', 2]
 */

//? indexOf() & lastIndexOf()
// const colors = ["Red", "Green", "Blue", "Brown", "Green"]
/* console.log(colors.indexOf("Green")); //1
console.log(colors.indexOf("Green",3)); //4
console.log(colors.indexOf("green")); //-1 not found */
/* console.log(colors.lastIndexOf("Green")); // 4
console.log(colors.lastIndexOf("Green",-2)); // 1
console.log(colors.lastIndexOf("Green",3)); // 1
console.log(colors.lastIndexOf("green")); // -1 */

//? reverse()
//? changes the origin array
/* const colors = ["Red", "Green", "Blue", "Brown", "Yellow"];
colors.reverse();
console.log(colors); //  ['Yellow', 'Brown', 'Blue', 'Green', 'Red'] */

//? join()
// array chnage to string
/* const arr = ['c', 'a','r']
console.log(arr.join()); // c,a,r
console.log(arr.join('')); // car
console.log(arr.join('-')); //c-a-r
console.log(arr); // ['c', 'a','r'] */

//! Question:
/* text = "Murat" //? Reverse the text "taruM"
const reversed= text.split("").reverse().join('')
console.log(reversed); // taruM */

//? sort()
//? change origin array

/* const arr = [55, 5, 2, 11, 1, 111]
console.log(arr.sort()); // [1, 11, 111, 2, 5, 55] //? sort default olarak string types olarak sıralar */

/* // ascending
console.log(arr.sort((a,b)=>a-b)); // [1, 2, 5, 11, 55, 111]
// descending
console.log(arr.sort((a,b)=>b-a)); // [111, 55, 11, 5, 2, 1]

 */

//? includes()
/* const arr = ["Red", "Green", "Blue", "Brown", "Yellow"]
console.log(arr.includes('Blue')); // true
console.log(arr.includes('blue')); // false
console.log(arr.includes('Blue', 2)); // true */

//? Nested Arrays:

/* const arr =[1,2,[3,4,5],[6,7,8]]
console.log(arr[0]); // 1
console.log(arr[2]);//[3,4,5]
console.log(arr[2][0]); // 3
console.log(arr[2][2]); // 5
console.log(arr[3]); // [6,7,8]
console.log(arr[3][2]); // 8
 */

//! Question.
/* const arr = [['red', 'blue', 'purple']]
console.log(arr.length);// 1 //???  */

//? extra info
/* const arr = ["Red", "Green", , "Blue"]; 
console.log(arr); // ['Red', 'Green', empty, 'Blue']
 */

//? ************** ITERATION IN ARRAYS *********************

// ******************* FOR **********************

//! Question:
//? Sum of items in Array
/* const numbers = [-5,15, 22, -4, 45, 78,-25]
let sum= 0
// console.log(numbers.length); // 7
for(let i=0; i<numbers.length;i++){
  sum +=numbers[i]
  // console.log(sum);
}
console.log(sum);// 126 */
//! Question:
//? Average of notes:

/* const grades = [55, 77, 23, 89, 100, 44, 33];
let sum = 0;
let average = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
  average = sum / grades.length;
}
console.log(`sum of notes:${sum}-- average of notes: ${average.toFixed(2)}`); */

//! Question:
//? less than 50 , bigger than 50 create 2 arrays
/* const grades = [55, 77, 23, 89, 100, 44, 33];
let biggerAndEqual50 =[]
let lessThan50 = []
for(let i=0; i<grades.length;i++){
  if(grades[i]<50){
    lessThan50.push(grades[i])
  }else{
    biggerAndEqual50.push(grades[i])
  }
}
console.log("biggerAndEqual50:",biggerAndEqual50);
console.log("lessThan50:",lessThan50); */

// ******************* FOR IN *********************

//! Question:
//? less than 50 , bigger than 50 create 2 arrays
// use for in
/* const grades = [55, 77, 23,50, 89, 100, 44, 33];
let biggerAndEqual50 = [];
let lessThan50 = []; */

//? for in
// for (let i in grades) {
//   if (grades[i] < 50) {
//     lessThan50.push(grades[i]);
//   }else{
//     biggerAndEqual50.push(grades[i])
//   }
// }

//? ternary
/* for (let i in grades) {
  grades[i] < 50
    ? lessThan50.push(grades[i])
    : biggerAndEqual50.push(grades[i])
} */

/* console.log("biggerAndEqual50:", biggerAndEqual50);
console.log("lessThan50:", lessThan50); */

// ******************* FOR OF *********************
//! Question:
//? Sum of items in Array use for of

/* const numbers = [-5,15, 22, -4, 45, 78,-25]
let sum = 0

for(let number of numbers){
  sum += number
}
console.log(sum); // 126 */

//! Question:
//? cahnge the items of array to text
/* const cars = ["BMW ", "VOLVO ", "FORD"]

let textOfCarsName = ""
for(let car of cars){
  textOfCarsName += car
}
console.log(textOfCarsName); // BMW VOLVO FORD */

//! Question:
//? Girilen isim dizide var mı varsa kaç tane olduğunu yazdır.
/* const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];

const findStudent = (name) => {
  let counter = 0;
  for (let student of students) {
    student === name.toLowerCase() && counter++;
  }
  return counter === 0
    ? `${name} can not be found`
    : `${name} found ${counter} times`;
}; */

/* console.log(findStudent("Ahmet"));
console.log(findStudent("İsmet"));
console.log(findStudent("Murat")); */

// ******************* FOREACH() METHOD *********************
//? VOID function
//? inmutable
//? return özelliği yok
//? consuming--terminal method
// const prices = [250, 150, 300, 500]
//?  classical for
/* for(let i=0; i<prices.length;i++){
  console.log(prices[i]);
}
 */
//? forEach()
// prices.forEach((p)=> console.log(p))
// prices.forEach((p,i)=> console.log("Değer:",p, "indis:",i))

//! Question:
// Sum of items
/* const prices = [250, 150, 300, 500];
let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);
 */
/* const prices = [250, 150, 300, 500];
//* forEach ile dongu icerisnde herhangi bir item okunabilir, listelenebilir veya yazdirilabilir. ncak bu değeri döndürmek mümkün değildir.
prices.forEach((price) => console.log(price * 2)); */

// ******************* MAP() METHOD *********************
//? Her zaman bir array döndürür
//! Question:
//? convert all items in Array to UpperCase:

// const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe","Canan"]
// const upperName = names.map((name)=> name.toLocaleUpperCase())
// console.log(upperName); // ['MUSTAFA', 'MURAT', 'AHMET', 'MUSTAFA', 'AYŞE', 'CANAN']

//! Orjinal diziyi modifiye etmek için 3.paramaetre kullanılablir.
/* names.map((name,i, arr)=>{
  arr[i] = name.toLocaleUpperCase()
})
console.log(names); */
//! Question:
//? convert tl to Euro and Dollar

/* const euro = 33.77;
const dollar = 31.15;
const tlPrices = [100, 150, 50, 80];

const dollarPrices = tlPrices.map((tl) => Number((tl / dollar).toFixed(2)));
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));
console.log(dollarPrices); // [3.21, 4.82, 1.61, 2.57]
console.log(euroPrices); //[2.96, 4.44, 1.48, 2.37] */

// ******************* FILTER() METHOD *********************
//? Her zaman bir array döndürür
//! Question:
//? Collect a new array that items  bigger than 10000

/* const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const biggerThan = salaries.filter((salary) => salary >= 10000);
const lessThan = salaries.filter((salary) => salary < 10000);

console.log(biggerThan); //[10000, 15000, 25000]
console.log(lessThan); // [5500, 8000, 6500, 9000] */

// ******************* PIPELINE(CHAINING) *********************

//! Question:
//? Maasi 9000' den az olanlara %10 zam yapatak bu değerleri yeni diziye aktar.

/* const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const lessThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)));
console.log(lessThan9000);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s)); //? consuming -- returning olmadığı için sonlarnır. */

// ******************* REDUCE() METHOD *********************
//? Accumulative işlemler yapar. (Birikimli, Ardaşık)
//? Reduce bir primitive değer döndürür.
//? Consuming function

//! Question:
//? find the sum of salaries:
/* const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
const sumOfSalaries = salaries.reduce((sum,value)=> sum + value,0)
console.log("SUM OF SALARIES:",sumOfSalaries);//79000 */

//! Question:
//? Maaşı 6000 ile 10000 tl arasındaki arkadaşlara %10 zam yapıp bu maaşların topmanın hesapla.

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
/* const scaleSalaries = salaries.filter(
  (salary) => 6000 < salary && salary < 10000
);
console.log(scaleSalaries); // [8000, 6500, 9000] */

/* const scaleAndInterested = scaleSalaries.map((x) =>
  Number((x * 1.1).toFixed(2))
);
console.log(scaleAndInterested); // [8800, 7150, 9900] */

/* const sumOfSalariesWithInterest = scaleAndInterested.reduce(
  (acc, value) => acc + value,
  0
);
console.log(sumOfSalariesWithInterest); // 36850 */

//? chaining:

/* const sumOfInterestedSalaries = salaries
  .filter((salary) => 6000 <= salary && salary <= 10000)
  .map((interested) => interested * 1.1)
  .reduce((acc, value) => acc + value);
console.log(sumOfInterestedSalaries); // 36850 */

// *******************  OTHERS METHOD *********************
//? every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

//  const ages = [18, 22, 78, 34, 78, 79, 15]
// const check = ages.every((age) => age >= 18)
// check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//? some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

/* const over80 = ages.some((a) => a >= 80)
console.log(over80) //? false */

//? find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
/* const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined */

//? findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

/* const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1 */

// **************************************************
// -----------------OBJECTS--------------------------
// **************************************************
//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

//! ^farkli yöntem ile object olusturulur.
//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------
/* const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
console.log(car); */

//? Objenin okunmasi:
//? 1. notasyonu ile erişim
/* console.log(car.brand); //Mercedes
console.log(car.color[0]); //pink
console.log(car.color); //  ['pink', 'black', 'blue', 'green']
car.color.forEach((c) => console.log(c));
console.log(car.Engine); // undefined

//? Objenin degerinin degistirilmesi(write):
car.speed = 7;
car.color = "Morcivert";
car.class = "E"
console.log(car); // {brand: 'Mercedes', model: 2020, engine: 2000, speed: 7, color: 'Morcivert', class: 'E'} */

//! Uncaught TypeError: Assignment to constant variable.
// car = {
//   deneme: "I"
// }
//? 1. notasyonu ile erişim
//? objectName["keyName"]
/* console.log("ENGINE:", car["engine"]); // ENGINE: 2000

const myKey = prompt(
  "Araba ile ilgili ne ögrenmek istersiniz: speed, color, engine..."
)
alert(car[myKey]) */

//* ---------------------------------------------------------
//* 2- Object() class'ından new Operatoru ile
//* ---------------------------------------------------------
/* const myCar = new Object();
myCar.brand = "Mercedes";
myCar.model = 2022;
myCar.speed = 7;

console.log(myCar.speed); // 7
console.log(myCar["model"]); // 2022
console.log(myCar); */

//* ---------------------------------------------------------
//* 3- Object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

/* function Personel(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
}

const person1 = new Personel("1234567890", "Ahmet Can", 33, 30000);
const person2 = new Personel("123456789023435", "Mehmet Veli", 23, 10000);

console.log(person1); // {id: '1234567890', name: 'Ahmet Can', age: 33, salary: 30000}
console.log(person2); // {id: '123456789023435', name: 'Mehmet Veli', age: 23, salary: 10000} */

//? ES6
/* class Personel{
    constructor()
} */

// **************************************************
// -----------------OBJECTS' METHODS--------------------------
// **************************************************

/* const personel = {
  name:"Ahmet",
  surname: "Canan",
  dob: 1990,
  salary: 30000,
  drivingLicense: true,
  calculateAge : function(){
    console.log(this); //? personel objesini refere eder.
    return new Date().getFullYear() - this.dob
  },
  summary: ()=>{
    console.log(this); //? window objesini refere eder.
    return `${this.name} is ${this.calculateAge()} years old`
  }
}

console.log(personel.name + " " + personel.surname); // Ahmet Canan
console.log("AGE",personel.calculateAge()); // 34 */

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.
// console.log(personel.summary()); // TypeError: this.calculateAge is not a function

// **************************************************
//* JSON => JavaScript Object Notation
// **************************************************

/* const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; */

/* console.log(team);
console.log(team[1]); // {name: 'Mary', surname: 'Bary', job: 'tester', age: 22}
console.log(team[1].name); // Mary
console.log(team[2].age); // 20

console.log("**********************"); */

//! Örnek1:
//? team dizisindeki  job'lari tek tek yazdiriniz.
// team.forEach((p) => console.log(p.job)); //Developer //tester // developer

//! Örnek2:
//? age'leri bir arttırarak yeni bir diziye saklayiniz.

/* const personelAges = team.map((person)=> ++person.age)
console.log(personelAges); // [31, 23, 21] */

//! Ornek3:
//? name ve surname'leri birlestirip buyuk harfe ceviren ve bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5 arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

/* const fullName = team.map((p) => {
  return {
    fullName: p.name + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});
console.log(fullName);  */

//? Alternative way:

/* const teamFullName = team.map((p)=>({
  fullName: p.name + " " + p.surname.toUpperCase(),
    age: p.age + 5
}))
console.log(teamFullName);
 */

//! Ornek4:
//? Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

// team.filter((p)=>p.age <= 22).forEach((list)=> console.log(list.name))

//? 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.
/* const lessThanAndEqual22 = team.filter((p)=> p.age <= 22).map((p)=>p.name)
console.log(lessThanAndEqual22);  */

//! Ornek6:
//? ortalama yasi hesaplayiniz.

/* const teamAverageage = team.reduce((acc,val)=> acc + val.age,0).toFixed(2) / team.length
console.log(teamAverageage); */

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//*======================================================
console.log("****** NEW OPERATORS *******");

/* const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["Pink", "Blue"],
};

//? 1.yöntem (. notasyon)
const brand = car.brand;
console.log(car.brand); // BMW

//? 2.yöntem (square bracket)
console.log(car["model"]); // 2020

//? 3.yöntem (Destructure)
const { brand: name, engine, colors } = car; //? Object destr.

console.log(engine, colors, name);
const { model } = car;
console.log(model);
 */
//* EXAMPLE: NESTED
/* const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
  car3: ["anadol", "togg", "devrim"],
  car4: "kağnı",
};
 */
/* let { car1, car2, car4, car3 } = cars; //? 1.seviye destruc.
console.log(car2, car4); */

/* const { name: c1Name, model: c1Model } = car1; //? 2.seviye destr.
const { name: c2Name, model: c2Model } = car1;
console.log(c2Name, c2Model); */

//? Alternatively:
/* const {
  car1: { nameCar1, modelCar1, engineCar1 },
  car2: { nameCar2, modelCar2, engineCar2 },
} = cars; */

//! Example:
/* const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
 */
//? KLASIK
/* team.forEach((t) => {
  console.log("Name:", t.name);
  console.log("SurName:", t.surname);
  console.log("Job:", t["job"]);
  console.log("Age:", t["age"]);
  console.log("***************");
}); */

//? DESTR.
/* team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name:", person.name);
  console.log("SurName:", person.surname);
  console.log("Job:", person["job"]);
  console.log("Age:", person["age"]);
  console.log("***************");
}); */

/* const getProduct = () => {
  return {
    id: "123",
    pName: "NIKE",
    price: 300,
    stock: 1000,
  };
}; */

/* console.log(getProduct());

let { pName, price, stock } = getProduct(); //{id: '123', pName: 'NIKE', price: 300, stock: 1000}
//? function'un dondordugu obje dogrudan dest. yapilabilir.
console.log("PRODUCT NAME:", pName, "<=>", "PRICE:", price); // PRODUCT NAME: NIKE <=> PRICE: 300
stock = stock - 100;
console.log("REMAINING STOCK:",stock); // REMAINING STOCK: 900 */

// const data = { id: "123", pName: "NIKE", price: 300 };

// const print = (data) => {
//   const { id, pName, price } = data;
//   console.log(pName, price); // NIKE 300
// };
/* 
const print = ({pName, price}) => { //? Yolda destr.
  console.log(pName, price); // NIKE 300
};
print(data); */

//======================================================
//*  DESTRUCTURING (ARRAY)
//*======================================================

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//? Klasik:
/* const ismet = names[2]
console.log(ismet);

const [ahmo,, ismo,safo] = names
console.log(ahmo,ismo,safo); */

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: Array
/* const araclar = ["bmw", "mercedes", "ferrari", "rover", "lambo"];
const [araba1, araba2, ...geriKalanlar] = araclar;
console.log(araba1); //bmw
console.log(geriKalanlar); // ['ferrari', 'rover', 'lambo']
 */
//* REST: Object

/* const kisi = {
  ad: "Canan",
  soyad: "Cano",
  yas: 33,
  meslek: "tester",
}; */

/* const { meslek, yas, ...isim } = kisi;
console.log(meslek, yas); // tester 33
console.log(isim); // {ad: 'Canan', soyad: 'Cano'} */

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

/* const topla = (a, b) => a + b;
console.log("SONUC:", topla(2, 3, 4, 5)); // SONUC: 5
 */
//? REST (...) ile non-iterable olan sayilari iterable(diziye) cevirmis olduk.
/* const toplaminiAl = (...sayilar) => {
  console.log(sayilar); // [2, 5, 10, 4, 6, 8]
  return sayilar.reduce((t, v) => t + v, 0);
};
console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8)); // SONUC: 35
 */

//*==================================================
//*  SPREAD (...)
//* =================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

/* const ucanAraclar = ["drone", "heli", "ucak"];
const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"];

const tasitlar = [ucanAraclar, karaAraclari];
console.log(tasitlar);
console.log(tasitlar[0][1]); // heli

const tasitlar1 = [...ucanAraclar, ...karaAraclari];
console.log(tasitlar1); // ['drone', 'heli', 'ucak', 'Tir', 'Araba', 'Kamyonet', 'Bisiklet'] */

/* const sentence = "To be or not to be"

const character = [...sentence]
console.log(character); // ['T', 'o', ' ', 'b', 'e', ' ', 'o', 'r', ' ', 'n', 'o', 't', ' ', 't', 'o', ' ', 'b', 'e']
console.log(sentence); // To be or not to be */
/* 
console.log("MAX:", Math.max(1, 2, 3, -1, 23)); // MAX: 23s

const numbers = [23, 45, 66, 77, 12, -1];
console.log("MIN:", Math.min(...numbers)); // MIN: -1 */

//? Array Copy
/* const numbers = [4, 5, 6, [11, 22]];

const herNumbers = [1, 2, 3, ...numbers];
const hisNumbers = [...herNumbers];
console.log(herNumbers, numbers); // [1, 2, 3, 4, 5, 6], [4, 5, 6]
console.log(hisNumbers); // [1, 2, 3, 4, 5, 6]

hisNumbers.push(7);
console.log("My:", numbers); // [4, 5, 6]
console.log("Her:", herNumbers); // [1, 2, 3, 4, 5, 6]
console.log("His:", hisNumbers); // [1, 2, 3, 4, 5, 6, 7] */

// numbers[3][1] = 44 //? spread kullanılsa dahi nested aolan alanlar deep copy olmaz.

//? Sığ Kopyalama
/* const theirNumbers = hisNumbers;
theirNumbers.push(8);
console.log(theirNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(hisNumbers); // [1, 2, 3, 4, 5, 6, 7, 8] */

//? Object Copy

/* const firstObj = { a: 1, b: 2, c: 3 };
const secondObj = { a: 2, d: 3, c: 4 };
const copiedFirstObj = { ...firstObj };
console.log(copiedFirstObj); // {a: 1, b: 2, c: 3}

copiedFirstObj.a = 44;
//? nesting olmadigi icin  deep copy gibi davranir.
console.log(copiedFirstObj, firstObj); // {a: 44, b: 2, c: 3} {a: 1, b: 2, c: 3}

const combinedObjs = { ...secondObj, ...firstObj };
console.log(combinedObjs); // {a: 1, d: 3, c: 3, b: 2} */

//? nested
/* const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
}; */

// console.log("SALARY:", people.person3.salary);
//! FOR - IN
//* for (key in object){
//*    // code block to be exceduted
//* }

/* for (let person in people) {
  //   console.log(person);
  //   console.log(people[person]); //? square bracket notation
  /* 
  person1
   {name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000', …}
  
   person2
   {name: 'John', surname: 'Sweet', dob: '1990', job: 'tester', salary: '110000', …}
  
   person3
   {name: 'Steve', surname: 'Job', dob: '2000', job: 'developer', salary: '90000', …} */
//  console.log(people[person].salary);
// } */

//? Objeler normalde iterable değillerdir. Ancak for-in ve for of gibi döngğ elemanları ile özel olarak itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
/* console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people)) */

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

/* console.log("****************");
for(let key of Object.keys(people)){
  console.log(key);
} */

/* console.log("****************");
//? people objesindeki tüm salry 'leri yazdir.
for(let v of Object.values(people)){
  console.log(v.salary);
  // console.log(v["salary"]);
}
 */
