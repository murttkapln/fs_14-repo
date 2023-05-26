const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const sonuc = document.querySelector(".sonuc");
const par = document.querySelector("p");
const random = Mat.floor(MAth.random() * 100);
console.log(random);

let counter = 7;

btn.addEventListener("click", () => {
  console.log(input.value);
if (counter > 0 && input.value > 0 && input.value < 100) {
    if (input.value < random) {
      sonuc.value = "sayıyı arttır";
      input.value =""
    }

    if (input.value > random) {
      sonuc.value = "sayıyı azalt";
      input.value =""
    }
    if (input.value == random) {
      sonuc.value = "KAZANDIN";
    }
    counter--;
} else {
    par.innerHTML = `Hakınız kalmadı sonuc: ${random}`;
    sonuc.value = "Game Over";
}
  par.innerHTML = `${counter} hakkınız kaldı`;
  input.focus()
});

input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        btn.click()
    }
})
