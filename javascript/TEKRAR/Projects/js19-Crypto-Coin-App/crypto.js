const form = document.querySelector(".top-banner");
const input = document.querySelector(".top-banner input");

// .class1.class2 vs. .class1 .class2
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");

// localStorage:
localStorage.setItem(
  "apiKey",
  EncryptStringAES(
    "coinrankingeb9f9e14ebd72c1dcf159ff13ac95123faaafac7f6744ff8" // apiKey encrypted
  )
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getCoinDataFromApi();
  // form.reset() == e.target.reset()
  e.target.reset();
});

const getCoinDataFromApi = async () => {
  //   alert("Get Coin Data!");
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  //   console.log(apiKey);

  //* !!! template literal !!! --ES6 2015
  const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
  const options = {
    headers: {
      "x-access-token": apiKey,
    },
  };

  //? fetch vs. axios
  //   const data = await fetch(url, options)
  //     .then((res) => res.json())
  //     .then((result) => console.log(result.data.coins[0]));

  try {
    const response = await axios(url, options);
    // console.log(response?.data?.data?.coins[0]);
    const { price, name, change, iconUrl, symbol } =
      response?.data?.data?.coins[0];
    // console.log(iconUrl);

    //? Coin Control:
    const coinNameSpans = coinList.querySelectorAll("h2 span");
    //  filter vs. map(array)

    if (coinNameSpans.length > 0) {
      const filteredArray = [...coinNameSpans].filter(
        (span) => span.innerText == name
      );
      if (filteredArray.length > 0) {
        msgSpan.innerText = `You already know the data for ${name}, Please search for another coin 😊`;
        setTimeout(() => {
          msgSpan.innerText = "";
        }, 3000);
        return;
      }
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("coin");
    createdLi.innerHTML = `
    <h2 class="coin-name" data-name=${name}>
      <span>${name}</span>
      <sup>${symbol}</sup>
    </h2>
    <div class="coin-temp">$${Number(price).toFixed(6)}</div>
      <figure>
        <img class="coin-icon" src=${iconUrl}>                
        <figcaption style='color:${change < 0 ? "red" : "green"}'>
          <span><i class="fa-solid fa-chart-line"></i></span>
          <span>${change}%</span>
        </figcaption>
      </figure>
      <span class="remove-icon">
      <i class="fas fa-window-close" style="color:red"></i>
      </span>
    `;

    //! append vs appendChild => appendChild ile sadece obje verilebilir.
    // append vs. prepend
    // coinList.append(createdLi) //? sona ekler
    coinList.prepend(createdLi); //? başa ekler

    // remove function
    createdLi.querySelector(".remove-icon").addEventListener("click", () => {
      createdLi.remove();
    });
  } catch (error) {
    // error logging
    // postErrorLog("crypto.js", "getCoinDataFromApi", new Date(), error...)
    msgSpan.innerText = "Coin not found.";
    setTimeout(() => {
      msgSpan.innerText = "";
    }, 3000);
  }
};
