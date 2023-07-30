import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  const {user} = useContext(LoginContext)
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
  //? Login olmadan people' components'i gösterme
  //? Kullanıcı login olduktan sonra child compenents'lere girmeye izin ver
  //? Eğer login bilgisi yoksa --> login sayfasına yönlendir.
  //? outlet  child components'leri temsil eder
};

export default PrivateRouter;
