//* ------ Selectors ------- */

const selectionArticles = document.querySelector(".selection");

//? Secilen elemanlarin tasiyicilari
const yourCoiceDiv = document.getElementById("your-choice");
const pcCoiceDiv = document.getElementById("pc-choice");

//? message
const messagePar = document.querySelector(".message");

//? Score
const scoreCardSection = document.querySelector(".score-card");
const yourScoreSpan = document.getElementById("your-score");
const pcScoreSpan = document.getElementById("pc-score");

//? Modal
const modalCardSection = document.querySelector(".modal-card");
const finalMessagePar = document.getElementById("final-message");

const playAgainBtn = document.getElementById("play-again");

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

playAgainBtn.addEventListener("click", (e) => {
  // modalCardSection.classList.toggle("show")
  // modalCardSection.classList.remove("show")
  modalCardSection.style.display = "none";
  window.location.reload();
});

//* ------ Functions ------- */

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcRandom = "rock";
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
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "Its draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
};

const openModal = () => {
  modalCardSection.classList.add("show");
  if (yourScoreSpan.textContent === "10") {
    //? eger kullanici 10 puana ulasti ise kullanici kazanmistir.
    finalMessagePar.textContent = "👏 You Win 👏";
    document.querySelector(".modal").style.backgroundColor = GREEN;
    playAgainBtn.style.color = GREEN;
  } else {
    //? eger pc 10 puana ulasti ise pc kazanmistir.
    finalMessagePar.textContent = "😢 You Lost 😢";
    document.querySelector(".modal").style.backgroundColor = RED;
    playAgainBtn.style.color = RED;
  }
};
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
