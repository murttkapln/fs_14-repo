//? 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

function calFahrenheight(a) {
    return (a * 9 / 5) + 32;
}
console.log(calFahrenheight(30)); // output: 86

//?2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) 

// function reverseString(a) {
//     return a.split('').reverse().join('');
// }
// console.log(reverseString("hello world")); //output: dlrow olleh

console.log(x("hello world"));

function x (a) {
    let result ="";
    for (let i=a.lenght -1; i>=0; i--) {
        result += a[i]
    }
    return result;
}



