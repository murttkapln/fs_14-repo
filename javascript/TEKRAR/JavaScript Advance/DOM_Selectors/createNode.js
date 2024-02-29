console.log("**** CREATE NODE ****");

const langInput = document.querySelector("#input")

//? 1- Olustur
const newP = document.createElement("p")

//? 2- Eger text tabanli bir element ise text dugumunu olustur.
// const text= document.createTextNode("Bu bir yeni p elementidir.")
const text = document.createTextNode(langInput.value)

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newP.appendChild(text)
console.log(newP);

//? 4- Yeni baair elementin DOM tree 'ye bağlanmasi (append)

//* main bolumunun en sonuna yeni elementi ekler
const main = document.querySelector("main")
main.appendChild(newP)
//* item-list section'nın onune yeni elementi ekler.
//! Element.before() ve Elment.after() appendChild gibi aslında bir elementi DOM Tree 'ye baglar.
const itemListSection = document.querySelector(".item-list")
itemListSection.before(newP)

//* -------------ID, CLASS --------------
//? 1) Yontem:
newP.id = "paragraph"
newP.className = "par center"
newP.name = "deneme"

//? 2) serAttribute():
newP.setAttribute("id", "new-id")
newP.setAttribute("class", "new-class")
newP.setAttribute("name", "new-class")
newP.setAttribute("type", "button")

//? 3) classList