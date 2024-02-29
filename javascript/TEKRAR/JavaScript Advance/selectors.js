console.log("***** SELECTORS *****");

document.title = "DOM DOM 🚀";

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

// document.getElementById("header").style.border = "1px solid red"
const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.backgroundColor = "red";
myHeader.style.color = "yellow";

//* Add Buton
const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = "#bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "10px";
addButon.style.padding = "0.6rem";

//? Derğer Atama
addButon.value = "SAVE";

//* h1
const h1 = document.getElementById("heading1");
console.log(h1);

//? Değer atama
h1.textContent = "DOM INTRODUCTION";

//? Değer Okuma
console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

//*===========================================
//*            GETELEMENSTAGNAME()
//*===========================================

const myInputs = document.getElementsByTagName("input");
console.log(myInputs); // [input#input, input#btn, input: input#input, btn: input#btn]
console.log("Size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h2")[0]);
//? indisle erişime ek olarak item() metodu ile de erişim yapılabilir.
console.log(myInputs.item(1));

//? Array  e' cevrilebilir.
const myList = document.getElementsByTagName("li");
const myListArr = [...myList]; //? Array 'e cevir.
console.log(myListArr); // [li.list, li.list, li.list, li.list, li.list]

myListArr.forEach((li) => (li.style.color = "cyan"));

//? Alternatif olarak:
const myListArr1 = Array.from(myList); //? Array 'e cevir.
console.log(myListArr1);
myListArr1.map((li) => (li.style.listStyleType = "none"));

//*===========================================
//*            GETELEMENTSBYCLASSNAME()
//*===========================================

const lists = document.getElementsByClassName("list"); //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
console.log(lists);

const listsArr = [...lists];
listsArr.forEach((li) => console.log(li));

// [...lists].forEach((li)=>console.log(li)) //* Alternatif

// lists[2].innerHTML =" JavaScript Language"
lists[2].innerHTML = `<h1>JavaScript</h1>`;
lists[3].innerText = `<h1>React</h1>`;
lists[4].textContent = `<h1>Vue</h1>`;

//*===========================================
//*             QUERYSELECTOR()
//*===========================================
// ! QUery Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer

//? id secildi (#)
const header = document.querySelector("#header");
console.log(header);

//? class secildi (.)
const itemList = document.querySelector(".list");
console.log(itemList);

//? tag 'ı secilmis oldu.
const h2 = document.querySelector("h2");
console.log(h2);

//? CSS 'deki selector mantığı kullanılabilir.
const otherH2 = document.querySelector("section h2");

const buton = document.querySelector("section.add-item #btn");
console.log(buton);

const react = document.querySelector("section.item-list ul li:nth-child(4)");
console.log(react);

//*===========================================
//*             QUERYSELECTORALL()
//*===========================================

const listeler = document.querySelectorAll("ul li");
console.log(listeler); // NodeList(5) [li.list, li.list, li.list, li.list, li.list]

listeler.forEach((li)=>console.log(li))

//? Alternatif olarak
for(const liste of listeler){
    console.log(liste);
}
