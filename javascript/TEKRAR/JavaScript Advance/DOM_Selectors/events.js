//*===========================================
//*            EVENTS
//*===========================================

console.log("**** EVENTS ****");

// document.querySelector("header h1").onmouseover = function (){
//     document.querySelector("header h1").style.color = "red"
// }

//? ALternatif olarak
const heading1 = document.querySelector("header h1");

heading1.onmouseover = function () {
  heading1.style.color = "red";
};
heading1.onmouseout = function () {
  heading1.style.color = "cyan";
};

const printHello = () => {
  document.write("Hello");
};

//? onload event 'ı html ve css kodlarınızın render edilmesi akabinde calisir.

window.addEventListener("load", () => {
  document.getElementById("input").focus();
});

const addBtn = document.querySelector("#btn");
const ul = document.createElement("ul");
ul.className = "myDiv"
document.querySelector(".item-list").before(ul);

addBtn.addEventListener("click", (e) => {
  // console.log("Btn Clicked");
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.value);
  if (!input.value) {
    alert("Please enter a commnet");
  } else {
    const input = document.querySelector("#input");
    const li = document.createElement("li");
    li.classList = "list";
    ul.prepend(li);
    const textLi = document.createTextNode(input.value);
    li.appendChild(textLi);
    input.value = "";
    input.focus();
    console.log(ul.children);
  }
});

document.querySelector("#input").addEventListener("keydown", (e) => {
  // console.log(e);
  // console.log(e.code);
  // console.log(e.keyCode);
  //? Basilan tus Enter ise
  if (e.code === "Enter") {
    addBtn.click(); //? add Butonun tıklanma fonksiyonunu calıstır.
  }
});



//? silme butonu ekle ve listeden silme işlemi yap

const removeButton = document.createElement("button"); // create element
const text = document.createTextNode("REMOVE"); // create text
removeButton.appendChild(text); // butona text ' i ata

removeButton.id = "removeBtn";
removeButton.type = "button";
// console.log(input);
const section = document.querySelector(".add-item"); // DOM ' da yerini belirle
section.appendChild(removeButton); // ekle


// remove butonunu aktif hale getirme. eventListener("click",(e)=>...)
removeButton.addEventListener("click",(e)=>{
    console.log(ul.children);
    (ul.children.length > 0) ? ul.lastChild.remove() : alert("There is no item")   
})


document.querySelector("#input").addEventListener("keydown", (e) => {
    // console.log(e);
    console.log(e.code);
  (e.code === "Backspace" || e.code === "Delete") && removeButton.click();
});
