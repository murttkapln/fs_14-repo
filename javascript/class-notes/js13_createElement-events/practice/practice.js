console.log("**** CREATE NODE ****");

const langInput = document.querySelector("#input")

const newP = document.createElement("p")
const text = document.createTextNode(langInput.value)
newP.appendChild(text)
console.log(newP);




