//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react
//* =============================================================
import { useState } from "react";


const UseStateCounter = () => {
    // let count = 0

    //? Count adinda bir state olusturduk ve baslangic degerine 0 atadik.
    const [count, setCount] = useState(0)

    const handleInc = () => {
        // count = count + 1
        setCount(count + 1)
        console.log(count);
    }

    return (
        <div>
            <h2>USER STATE HOOK</h2>
            <h1>Count:{count}</h1>
            <button onClick={handleInc}>INC</button>
            <button>CLR</button>
            <button>DEC</button>
        </div>
    )
}

export default UseStateCounter