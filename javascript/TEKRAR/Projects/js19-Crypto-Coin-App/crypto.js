const form = document.querySelector(".top-banner");
const input = document.querySelector(".top-banner input");

// .class1.class2 vs. .class1 .class2
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");

// localStorage:
localStorage.setItem(
  "apiKey",
  EncryptStringAES(
    "coinrankingeb9f9e14ebd72c1dcf159ff13ac95123faaafac7f6744ff8"
  )
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getCoinDataFromApi();
  // form.reset() == e.target.reset()
  e.target.reset();
});

const getCoinDataFromApi = () => {
  //   alert("Get Coin Data!");
};
