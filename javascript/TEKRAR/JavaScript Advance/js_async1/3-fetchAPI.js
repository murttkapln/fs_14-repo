//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

let veri = "";

fetch("https://api.github.com/users")
  .then((res) => {
    //! Error Handling
    if (!res.ok) {
      throw new Error("Something Wrong", res.status);
    }
    return res.json();
  })
  .then((data) => {
    // veri = data
    // console.log(data);
    showUsers(data);
  })
  .catch((err) => console.log(err));

//   console.log(veri);

const showUsers = (users) => {
  console.log(users);
  const usersDiv = document.getElementById("users");

  users.forEach((user) => {
    // console.log(user.login);
    usersDiv.innerHTML += `
      <h2 class="text-warning" type="button">${user.login}</h2>
      <img class="w-25 border rounded-4" src=${user.avatar_url} alt="" />
  
      `;
  });
};
