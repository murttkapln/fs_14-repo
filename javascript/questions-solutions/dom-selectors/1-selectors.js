//? Selectors
const itemList = document.getElementsByClassName("list")
const newPar = document.createElement(`p`)
const  text = document.createTextNode("Murat KAPLAN")
newPar.appendChild(text)

const newHeader = document.querySelector(".item-list h2")
// newHeader.after(newPar)
newHeader.before(newPar)

// newPar.id = `a`
// newPar.className = `b`

newPar.setAttribute("id", "name")
newPar.setAttribute("class", "type")
newPar.classList.add("bg-tomato","outline","fa-plus", "fa-minus")

newPar.classList.remove("outline")
newPar.classList.remove("bg-tomato")

if (!newPar.classList.contains("fa-minus")){
    console.log("abooo");
}else{
    newPar.classList.add("yeni-geldim")
}


newPar.classList.toggle("white")

console.log(newPar.getAttribute("class"));
console.log(newPar.getAttribute("id"));
console.log(newPar.getAttribute("name"));
console.log(newPar.getAttribute("type"));




//? Yatayda  Travaerse

const ul = document.querySelector("ul")

const lists = ul.children

console.log((lists));

const js = lists[2]
console.log(js);

const a = js.previousElementSibling.previousElementSibling
a.style.color = "crimson"
console.log(a);
