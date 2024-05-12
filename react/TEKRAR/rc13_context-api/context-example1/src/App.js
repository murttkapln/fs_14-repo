import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import People from "./pages/People";
import PrivateRouter from "./pages/PrivateRouter";
import PersonDetail from "./pages/PersonDetail";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";

function App() {
  //! Local State
  const [user, setUser] = useState({ email: "", password: "" });

  console.log(user);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path="people" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
