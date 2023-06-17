window.addEventListener("load", ()=> {
    getData()
})
/* window.onload = function(){
    getData()
} */

const getData = async () =>{

    const URL = "https://restcountries.com/v3.1/all"
    
    try {
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error("hata")
        }
        const data = await response.json()
        console.log(data[0].name.common);

    } catch (error) {
        console.log(error);
    }
}
