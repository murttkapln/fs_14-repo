console.log("**** CREATE NODE ****");

const langInput = document.querySelector("#input");

//? 1- Olustur
const newP = document.createElement("p");

//? 2- Eger text tabanli bir element ise text dugumunu olustur.
// const text= document.createTextNode("Bu bir yeni p elementidir.")
const text = document.createTextNode(langInput.value);

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newP.appendChild(text);
console.log(newP);

//? 4- Yeni bir elementin DOM tree 'ye bağlanmasi (append)

//* main bolumunun en sonuna yeni elementi ekler
const main = document.querySelector("main");
main.appendChild(newP);
//* item-list section'nın onune yeni elementi ekler.
//! Element.before() ve Elment.after() appendChild gibi aslında bir elementi DOM Tree 'ye baglar.
const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

//* -------------ID, CLASS --------------
//? 1) Yontem:
newP.id = "paragraph";
newP.className = "par center";
newP.name = "deneme";

//? 2) serAttribute():
newP.setAttribute("id", "new-id");
newP.setAttribute("class", "new-class");
newP.setAttribute("name", "new-class");
newP.setAttribute("type", "button");

//? 3) classList
//* classList.add()
newP.classList.add("bg-danger", "border", "border2");

console.log(newP.classList.contains("new-class")); // true

//* classList.contains()
if (newP.classList.contains("border")) {
  newP.classList.add("border-success");
}

//* classList.remove()
if (newP.classList.contains("new-class")) {
  newP.classList.remove("new-class");
}

//* classList.toggle() (bir class varsa kaldırır yoksa ekler)
newP.classList.toggle("bg-danger");

//* -------------ID, CLASS GIBI OZELLIKLERI OKUMA --------------

//? 1) Yontem:
console.log(newP.id); // new-id
console.log(newP.className); // border border2 border-success

//? 2) getAttribute()
console.log(newP.getAttribute("type")); // button
console.log(newP.getAttribute("class")); // border border2 border-success

//* -------------YENI BIR ELEMENT OLUSTURMA (INNERHTML) --------------

const ul = document.querySelector("ul");
ul.innerHTML += `
<li>C++</li>
<li>Java</li>
<li>C</li>
<li>Go</li>
`;

const newDiv = document.createElement("div");
newDiv.id = "my-div";

itemListSection.after(newDiv);
newDiv.innerHTML = `
<h2 class="par center">Languages</h2>
<ul>
<li>C++</li>
<li>Java</li>
<li>C</li>
<li>Go</li>
</ul>
`;
