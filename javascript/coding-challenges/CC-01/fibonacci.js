//*  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
   
// const n = +prompt("istenilen fibonacci sayisini giriniz:")
// let n1 = 0;
// let n2 = 1;
// let n3;
// if(n === 0){
//     n3 = 0;
// }else if(n === 1){
// n3 = 0;
// }
// for(let i = 2 ; i <= n ; i++){
// n3 = n1 + n2
// n1 = n2
// n2 = n3
// }
// console.log(n3)


let number = +prompt("Bulmak istediğiniz Fibonacci sayisini yaziniz: " )
let sayi1 = 0;
let sayi2 = 1;
let sayi3;
if (number == 0) {
  alert(`${number}. fibonacci sayisi --> ${sayi1}`);
} else if (number == 1) {
  alert(`${number}. fibonacci sayis --> ${sayi2}`);
} else {
  for (let i = 3; i <= number + 1; i++) {
    sayi3 = sayi1 + sayi2;
    sayi1 = sayi2;
    sayi2 = sayi3;
  }
  alert(`${number}. fibonacci sayisi --> ${sayi3}`);
}
