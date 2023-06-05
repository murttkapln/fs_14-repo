document.title = "DOM DOM 🐱‍👤"

const myHeader = document.getElementById("header")
console.log(myHeader);
myHeader.style.backgroundColor = "red"
myHeader.style.color = "white"




const addButton = document.getElementById("btn")
console.log(addButton);

addButton.style.backgroundColor = "#bebe"
addButton.style.border = "none"
addButton.style.borderRadius = "10px"
addButton.style.padding = ".7rem"

addButton.value = "SAVE"
const başlik = document.getElementById("heading2")
console.log(başlik);
başlik.textContent = "Değişiklik yapılmıştır"
console.log(başlik.innerHTML);

const h1 = document.getElementById("heading1")
console.log(h1);
// ? Değer atama
h1.textContent = "DOM intoduction"
//? Deger Okuma
console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.innerText);

const myInputs = document.getElementsByTagName("input")
console.log(myInputs);

console.log(myInputs.length);
console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

//? Array e cevrilebilir

const myLists = document.getElementsByTagName("li")
console.log(myLists);

const myListsArr = [...myLists]
console.log(myListsArr);
myListsArr.forEach((li) => (li.style.color = "red"));

//? Alternative

const myListsArr1 = Array.from(myLists)
console.log(myListsArr1);

myListsArr1.map((li) => (li.style.listStyleType) = "none")


const lists = document.getElementsByClassName("list")
console.log(lists);

[...lists].forEach((li)=> console.log(li));

const listsArr = [...lists]
myListsArr.forEach((li) => console.log(li))

lists[2].innerText = "haloooo"
lists[1].textContent = "Aloha"

// lists[2].innerHTML = `<h1>JavaScript</h1>`
// lists[3].innerHTML = `<h1>React</h1>`
// lists[4].innerHTML = `<h1>VUE</h1>`


const header = document.querySelector("header")
console.log(header);

const itemLists = document.querySelector(".list")
console.log(itemLists);

const h2 = document.querySelector("h2")
console.log(h2);


const otherH2 = document.querySelector("section h2")

const buton = document.querySelector("section.add-item #btn")
console.log(buton);

const react = document.querySelector("section.item-list ul li:nth-child(4)")
console.log(react);
const haloo = document.querySelector("section.item-list ul li:nth-child(3)")
console.log(haloo);


const listeler = document.querySelectorAll("li")
console.log(listeler);
listeler.forEach((li) => console.log(li))
for (const liste of listeler){
    console.log(liste);
}




//? Traversing DOM

// * 1- Yukarı Yönde

const btn = document.querySelector("#btn")
console.log(btn);
console.log(btn.parentElement);
console.log(btn.parentElement.parentElement);

const addItem1 = document.querySelector(".add-item") 
console.log(addItem1);

console.log(addItem1.parentElement); //? main
console.log(addItem1.parentNode.parentNode); //? Body

const list1 = document.querySelector(".list")
console.log(list1.textContent);
console.log(list1.closest("section"));
console.log(list1.closest("body"))
console.log(list1.closest("body").querySelector("header h1").innerText);

// * 1- Asagı Yönde

console.log(addItem1.children);

console.log(addItem1.children[2]);

console.log(addItem1.firstElementChild);
console.log(addItem1.lastElementChild);
console.log(addItem1.firstChild);

console.log(document.querySelector("h1").firstChild);


// * 1- Yatay Yönde

const ul = document.querySelector("ul")

const list2 = ul.children
console.log(list2);

const js = list2[2]
console.log(js.innerText);

const css = js.previousElementSibling
console.log(css.innerText);

const django = js.nextElementSibling.nextElementSibling
console.log(django.innerHTML);