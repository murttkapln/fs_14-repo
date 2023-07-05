//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

import { useState } from "react";

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

const UseStateCounter = () => {
    const [count, setCount] = useState(0)
    const handleInc =()=> {
        setCount(count +1)
    }
    const handleDec =()=> {
        setCount(count -1)
    }
    const handleClear =()=> {
        setCount(0)
    }
    return (
      <div>
        <h2>USE STATE HOOK</h2>
        <h1>Count: <span className="fw-bold text-danger">{count}</span></h1>
        <button className="btn btn-dark m-2" onClick={handleInc}>INC</button>
        <button className="btn btn-success m-2"  onClick={handleClear}>CLR</button>
        <button className="btn btn-warning m-2" onClick={handleDec}>DEC</button>
      </div>
    )
  }
  
  export default UseStateCounter