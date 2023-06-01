console.log("**** CREATE NODE ****");
//? 1-(Create) oluştur
const langInput = document.querySelector("#input");
// ? 2-Eger text tabanli bir element ise text dugumu olusturur.
const newP = document.createElement("p");
// const text = document.createTextNode("New p element")
const text = document.createTextNode("JavaScript");

//? 3- Olusturulan text dugumu yeni bir elemente bagla (append)
newP.appendChild(text);

console.log(newP);

//? 4- Yeni elementin DOM tree baglanmasi (append)
const main = document.querySelector("main");
main.appendChild(newP);

//* istem-list section'ın onune yeni elementi ekler.
//! Element.before() ve Element.after() appendChild gibi aslında bir elementi DOM Tree'ye baglar
const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

//* -------------------- ID,  ClASS -------------------
//? 1) Yontem

newP.id = "paragraf";
newP.className = "par center";

//? 2) setAttribute()
newP.setAttribute("id", "new-id");
newP.setAttribute("class", "new-class");
newP.setAttribute("name", "new-class");
newP.setAttribute("type", "button");

//? 3) classList

newP.classList.add("bg-danger", "border");

//* classList.contains

if (newP.classList.contains("border")) {
  newP.classList.add("border-success");
}
if (newP.classList.contains("new-class")) {
  newP.classList.remove("new-class");
}

//* classList.toggle() (bir class varsa kaldirir yoksa ekler)

newP.classList.toggle("bg-danger");

//* ------------------ ID, CLASS GIBI OZELLIKLERINI OKUMA ---------------

//? 1) Yontem
console.log(newP.id);
console.log(newP.className);

//? 2) Yontem
console.log(newP.getAttribute("type"));
console.log(newP.getAttribute("class"));

//* ----------------- YENI BIR ELEMENT OLUSTURMA (INNER HTML) -------------
const ul = document.querySelector("ul")
ul.innerHTML += `
    <li>C++</li>
    <li>java</li>
    <li>C</li>
    <li>Go</li>`

//* ----------------- YENI BIR ELEMENT OLUSTURMA (INNER HTML) -------------

const newDiv = document.createElement("div");
newDiv.id = "my-div";
itemListSection.after(newDiv)

newDiv.innerHTML = `
    <h2 class="par center">Languages</h2>
    <ul>
      <li>C++</li>
      <li>java</li>
      <li>C</li>
      <li>Go</li>
    </ul>`;
