import { useEffect, useState } from "react";
import  Container  from "react-bootstrap/Container";


const User = () => {

  const  url= 'https://randomuser.me/api/'

  const [userData, setUserData]= useState("")


  const getUser = ()=> {

       fetch(url)
       .then((res)=> res.json())
       .then((data)=>setUserData(data?.results[0]))
       .catch((err)=> console.log(err))
   }

   useEffect(()=> {
      // fetch(url)
      //  .then((res)=> res.json())
      //  .then((data)=>setUserData(data?.results[0]))
      //  .catch((err)=> console.log(err))
      //! ComponentDidMount
      // const timer = setInterval(getUser, 5000)
      getUser()
      //! ComponentWillMount
      // return ()=> {
      //    clearInterval(timer)
      // }
   },[])


  console.log(userData);
  return (
    <Container className="  d-flex justify-content-center flex-column align-items-center g-5 w-75)" >
      {/* Optional chaining */}
      <img className=" rounded-circle w-25  " src={userData?.picture?.large} alt="" />
      <h4>Hi, My name is</h4>
      <h2>{userData?.name?.first} {userData?.name?.last}</h2>
      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString()}</h4>
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6> 
      <button className="btn  btn-outline-dark rounded-4" onClick={getUser}>Get Random user</button>
    </Container>
  )
}

export default User 