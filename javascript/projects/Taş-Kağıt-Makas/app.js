//* ------ Selectors ------- */

const selectionArticles = document.querySelector(".selection");

//? Secilen elemanlarin tasiyicilari
const yourCoiceDiv = document.getElementById("your-choice");
const pcCoiceDiv = document.getElementById("pc-choice");

//? message
const messagePar = document.querySelector(".message");
const pcScoreSpan = document.getElementById("pc-score");

//? Score
const scoreCardSection = document.querySelector(".score-card");

//* ------ Variables ------- */
let userSelectionImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
let pcRandom;

//? Colors
const YELLOW = "#ffc548";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//* ------ Event Listeners ------- */

selectionArticles.addEventListener("click", (e) => {
  // console.log(e.target.id);

  if (e.target.id) {
    userSelectionImg.src = `./assets/${e.target.id}.png`;
    userSelectionImg.alt = e.target.id;
    yourCoiceDiv.appendChild(userSelectionImg);
    createPcSelection();
  }

  //? Alternatif
  /*    if (
      e.target.id === "rock" ||
      e.target.id === "paper" ||
      e.target.id === "scissor"
    ) {
      userSelectionImg.src = `./assets/${e.target.id}.png`;
      userSelectionImg.alt = `${e.target.id}`;
      yourCoiceDiv.appendChild(userSelectionImg);
    }
   */
});

//* ------ Functions ------- */

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = `${pcRandom}`;
  pcCoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  // console.log(userSelectionImg.alt);
  // console.log(pcSelectImg.alt);

  //? Eşitlik Durumu
  if (userSelectionImg.alt == pcRandom) {
    draw();
  } else {
    if (userSelectionImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectionImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectionImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
};

const draw = () => {
  messagePar.textContent = "Its draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "You Lost 😢😢😢";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {};

//! Ilkel Yontem
//? Resimler
/* const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor"); */

/* rockImg.addEventListener("click", () => {
  image.src = "./assets/rock.png";
  image.alt = "rock";
  yourCoiceDiv.appendChild(image);

  //? innerHTML
  // yourCoiceDiv.innerHTML =   ` <img src="./assets/rock.png" alt="scissor"/>`
});

paperImg.addEventListener("click",()=>{
    image.src="./assets/paper.png"
    image.alt = "paper"
    yourCoiceDiv.appendChild(image)
})
scissorImg.addEventListener("click",()=>{
    image.src="./assets/scissor.png"
    image.alt = "scissor"
    yourCoiceDiv.appendChild(image)
}) */
