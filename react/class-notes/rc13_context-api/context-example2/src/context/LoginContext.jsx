import { createContext, useContext, useState } from "react";

//! Oluşturma
export const LoginContext = createContext();

//! Sarmallama(Provider) Component

const LoginProvider = ({ children }) => {
  //! Local State
  const [user, setUser] = useState({ email: "", password: "" });
  const values = {
    user,
    setUser,
  };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! Consuming Hook (Custom Hook)
export const useLoginContext = () => {
  return useContext(LoginContext);
};
export default LoginProvider;
