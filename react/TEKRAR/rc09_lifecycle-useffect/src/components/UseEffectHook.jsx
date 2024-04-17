import { useState, useEffect } from "react"

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

const UseEffectHook = ()=> {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("componentDidMount + componentDidUpdate");
    setTimeout(()=> {
      alert("Data fetched")
    },3000)
  },[count])

  const handleInc = ()=> {
    setCount(count + 1)
  }
console.log("render");
 

  return (
    <div>
      <h1>USE EFFECT HOOK</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-danger" onClick={handleInc}>INC</button>
    </div>
  )

  //  useEffect(() => {
  //     //? componentDidMount (Dependency Array bos ise)
  //     //? componentDidMount + componentDidUpdate (Dependency array bos degilse)
  //     //? Dependecny array'Deki state her degistiginde veya ilk render sonrasi bu kod blogu tekrardan calistirilir.
  
  //     return () => {
  //       //? Cleanup function (componentWillUnmount)
  //     }
  //   }, [count]) //? Dependency Array
  //   return <div>UseEffectHook</div>
}



  

export default UseEffectHook 
