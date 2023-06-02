const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ['sezer', 'ali', 'hasan', 'ayse'];

const ogrenciler = [
    {id : 12, isim : "sezer", yas : 30},
    {id : 22, isim : "hasan", yas : 15},
    {id : 32, isim : "fatma", yas : 55},
    {id : 13, isim : "nuriye", yas : 19},
    {id : 92, isim : "kemal", yas : 45},
    {id : 15, isim : "mustafa", yas : 75},
    {id : 44, isim : "ceren", yas : 30}
];

//* shift() dizi başındaki elemanı siler

let a = sayilar.shift()
console.log(a);
console.log(sayilar);

let b = isimler.shift()
console.log(b);

let c = ogrenciler.shift()
console.log(c);

// * Unshift() dizilerin başına eni atama yapar
let addNewNumber = sayilar.unshift(100)
console.log(addNewNumber);
console.log(sayilar);


let addNewName = isimler.unshift("Noah")
console.log(addNewName);
console.log(isimler); //  ['Noah', 'ali', 'hasan', 'ayse']


//* pop() dizi sonundaki elemanı siler
let removeName = ogrenciler.pop()
console.log(removeName);
console.log(ogrenciler);


// * push() dizi sonuna eleman ekler

let pushEnd = sayilar.push(2222)
console.log(pushEnd);
console.log(sayilar);


//* slice(a,b)  a: index no--baslangıc a-dahil b: ikinci index dahil değil a'dan başla b'e kadar git ama b dahil değil 

let slice = isimler.slice(1,3)
console.log(slice);
console.log(isimler);

//* splice(a,b) a: index'i dahil al ve b:kadar eleman sil
//* orjinal veriyi bozar
let splice = sayilar.splice(2,4)
console.log(splice);
console.log(sayilar);
//* splice(a)--> tek index verilirse : a'dahil başla sona kadar sil
let splice1 = sayilar.splice(2)
console.log(splice1);
console.log(sayilar);

const sayilar1 = [1, 50, 2, 41, 41, 84, 8, 35, 3];

//* splice(a,b,c,d) --> a: index'i dahil b:kadar eleman sil c 'yi ve d'yi sırasıyla ekle

let splice2 = sayilar1.splice(2, 0, 100, 200)
console.log(splice2);
console.log(sayilar1);

let splice3 = sayilar1.splice(3, 1, 100, 200)
console.log(splice3);
console.log(sayilar1);

const ogrenciler1 = [
    {id : 12, isim : "sezer", yas : 30},
    {id : 22, isim : "hasan", yas : 15},
    {id : 32, isim : "fatma", yas : 55},
    {id : 13, isim : "nuriye", yas : 19},
    {id : 92, isim : "kemal", yas : 45},
    {id : 15, isim : "mustafa", yas : 75},
    {id : 44, isim : "ceren", yas : 30}
];

// * find() 
let find = ogrenciler1.find((item) =>item.id === 32)
console.log(find);
console.log(ogrenciler1);

//*  finIndex()
let findIndex = ogrenciler1.findIndex((item) => item.id === 92)
console.log(findIndex);
console.log(ogrenciler1);

//* every()

let every = sayilar1 .every((item) => item.id < 35)
console.log(every);

// * some()

let some = sayilar1.some((sayi)=> sayi < 10)
console.log(some);

// * includes("a") a:sorgu işlemi yapılır. Dizi içerisinde mi değil mi?
let includes = isimler.includes("ali")
console.log(includes);

//* forEach()
let forEach = sayilar1.forEach(function(sayi){
    console.log(sayi*2);
})
console.log(forEach);
console.log(sayilar1);

//* filter()

let evenId = ogrenciler1.filter((item) => item.id % 2 === 1)
console.log(evenId);  
console.log(ogrenciler1);

let biggerThan30 = ogrenciler1.filter((item) => item.yas > 30)
console.log(biggerThan30); 

let range = sayilar1.filter((item) => 30 > item && item >= 20)
console.log(range);

let evenBigger30 = ogrenciler1.filter((item) => item.id % 2 === 0 && item.yas > 30)
console.log(evenBigger30);

//* map()

let map = sayilar1.map((item) => item * 3)
console.log(map);
console.log(sayilar1);

//* concat()

let concat = isimler.concat(sayilar1)
console.log(concat);

//* Array.from() string bir ifadeyi Array yapoar
let arrayFrom = Array.from(`Sezer`)
console.log(arrayFrom);

//* Array() Array oluşturma
let aa = Array(5, 2)
console.log(aa);

let bb = Array(sayilar, 2)
console.log(bb);    //[Array(2), 2]
let cc = Array(3) 
console.log(cc); //[empty × 3]

//* Array.of() Array'e cevirme alternatif 
let arrayOf = Array.of(1,2,3,4,5)
console.log(arrayOf); // [1, 2, 3, 4, 5]
let empty = Array.of(2)
console.log(empty);  // [2] --> Array methodundan farkı budur


//* toString()  string bir ifadeye donusturur.


// * join() belirtilen ayracla ayrılmış dizi ögelerinden oluşan bir ifade oluşturur
let join = isimler.join(` + `)
console.log(join);  // Noah + ali + hasan + ayse

//* sort() sıralama yapar  --- ana diziyi degistirir
let sort = sayilar1.sort((a,b) => a-b) // bu fonsksiyona göre islev yapar
console.log(a);
console.log(sayilar1);

//* reverse() kaynak diziyi bozar
let reverse = sayilar1.reverse()
console.log(reverse); // [200, 100, 100, 84, 50, 41, 41, 35, 8, 3, 2, 1]
console.log(sayilar1); // [200, 100, 100, 84, 50, 41, 41, 35, 8, 3, 2, 1]

//* reduce()

const ogrenciler2 = [
    {id : 12, isim : "sezer", yas : 30, maas: 20000},
    {id : 22, isim : "hasan", yas : 15, maas: 40000},
    {id : 32, isim : "fatma", yas : 55, maas: 20000},
    {id : 13, isim : "nuriye", yas : 19, maas: 45000},
    {id : 92, isim : "kemal", yas : 45, maas: 80000},
    {id : 15, isim : "mustafa", yas : 75, maas: 70000},
    {id : 44, isim : "ceren", yas : 30, maas: 50000}
];

let sum = ogrenciler2.filter((x) => x.id % 2 === 0 && x.yas > 40).reduce((x,y)=> x + y.yas, 0)
console.log(sum);

// let yas = ogrenciler2.map((x) => x.yas).reduce((x,y)=> (x+y)) / (ogrenciler2.length).toFixed()
// console.log(yas);

// console.log(ogrenciler2.length);





// let reduce = sayilar1.reduce((x,y)=> x + y,0)
// console.log(reduce);

// let sum = ogrenciler.map((a)=> a.yas)
// console.log(sum);

// // ? Declaration
// ahmet()
// function ahmet () {
//     console.log("aaaaa");
// }
// ahmet()


// // ? Expression
// const mehmet = function() {
//     console.log("aaaa");
// }
// mehmet()

// //? Arrow 
// let x = () => {
//     console.log("asdadsada");
// }

// x()



