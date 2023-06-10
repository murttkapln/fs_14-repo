const menuBtn = document.querySelector(".fa-bars");
const menuLinks = document.querySelector(".header__links");

menuBtn.addEventListener("click",()=>{
    menuLinks.classList.toggle("show");
})