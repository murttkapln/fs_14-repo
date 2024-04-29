


import { Navigate, Outlet } from "react-router-dom"

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.


const PrivateRouter=({user})=>{
  console.log(user);
  // const user = false
  return user ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter