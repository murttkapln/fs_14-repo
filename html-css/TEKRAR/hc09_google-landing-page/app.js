let query = document.querySelector("#form-search");
let searchBtn = document.querySelector("#searchBtn");

searchBtn.onclick = function (e) {
  e.preventDefault();
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");
  query.value;
};
