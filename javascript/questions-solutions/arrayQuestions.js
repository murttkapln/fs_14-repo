//? ******************************** ARRAYS  *****************************************

//* soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

// const numbers = [1, 2, 3, 45, 65];
// let sum = 0;
// const countOfNumbers = numbers.length
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum += element;
// }
// const avg = sum / numbers.length
// console.log(`${sum} / ${countOfNumbers} --> ${avg} `);

// ? Reduce Method
const numbers = [1, 2, 3, 45, 65];
// const sum = numbers.reduce((a, b) => a + b, 0);
// // console.log(sum);
// const avg = sum / numbers.length
// console.log(avg);

//? forEach Method
// let sum = 0;

// function total (par){
//     sum += par;
// }

// numbers.forEach(total)

// const avg =  sum / numbers.length
// console.log(avg);



// numbers.forEach((function()))

// soru 2: Bir prağraftaki sesliharflerin sayısını bulan fonksiyonu yazınız?

// soru 3: Bir dizideki en büyük sayıyı bulan fonksiyonu yazınız?

// let numbers1 = [1, 2, 3, 45, 65, 2];

// function max(arr) {
//   let biggest = arr[0];
//   numbers1.forEach((item) => {
//     if (item > biggest) {
//       biggest = item;
//     }
//   });
//   return biggest
// }
// console.log(max(numbers1));


// let biggest = numbers1.sort((a,b) => b-a)
// console.log(biggest[0]);

// soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

// soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

// soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.
