console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement , parentNode
const addItem = document.querySelector(".add-item");
console.log(addItem);

console.log(addItem.parentElement);
console.log(addItem.parentNode.parentNode);

//! closest(): belirtilen elementin parent 'larin ilk uygun parent 'i secer.

const list = document.querySelector(".list");
console.log(list.textContent);

console.log(list.closest("section")); //! closest(): belirtilen elementin parent'larin ilk uygun parent 'i secer.

console.log(list.closest("body").querySelector("header h1").innerText);

//* 1- Asagi Yonde traverse
//*----------------------------------------------

//? Children, firstElementChild, lastElementChild

console.log(addItem.children); // HTMLCollection(3) [h2, input#input, input#btn, input: input#input, btn: input#btn]

console.log(addItem.children[2]); // <input type="button" id="btn" value="ADD">

console.log(addItem.firstElementChild); //<h2>ADD NEW ITEM</h2>
console.log(addItem.lastElementChild); //<input type="button" id="btn" value="ADD">

console.log(addItem.firstChild); // " merhaba section "
//? firstChild bir yazi elementinin icerisindeki yazi dugumunu verir.
console.log(document.querySelector("h1").firstChild); // "DOM SELECTORS"

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling, previousElementSibling

const ul = document.querySelector("ul");

const lists = ul.children;
console.log(lists);

const js = lists[2];
console.log(js.innerText); // JavaScript

const css = js.previousElementSibling;
console.log(css.textContent); //CSS

const django = js.nextElementSibling.nextElementSibling;
console.log(django.innerText); // Django
