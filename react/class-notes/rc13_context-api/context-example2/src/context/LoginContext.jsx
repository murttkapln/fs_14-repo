import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

//! 1- Login Context'i olusuturuldu
export const LoginContext = createContext()

//! 2- Sarmalayici (Provider) Component
export const LoginProvider = ({children})=> {
      // //! Local State
  const [user, setUser] = useState({ email: "", password: "" })

  const values = {user, setUser}
    return (
        <LoginContext.Provider value ={values}>
            {children}
        </LoginContext.Provider>
    )
}

//! 3-Consuming Hook

export const useLoginContext = ()=>{
    return useContext(LoginContext)
}
export default LoginProvider
