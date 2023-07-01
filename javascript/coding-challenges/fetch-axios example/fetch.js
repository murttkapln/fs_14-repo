fetch("https://api.github.com/users").then((res)=>{
    // console.log(res);
    if(!res.ok){
        throw new Error()
    }else{
       return res.json()
    }
})
.then((data)=>{
        domaYaz(data)
    
})


.catch((error)=> {
    console.log(error);
})


const domaYaz  = (users)=> {
    users.forEach(user =>{
        const usersDiv = document.getElementById("users")
        usersDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${user.avatar_url}" class="card-img-top  alt="{user.id}">
        </div>
        `

    });
}