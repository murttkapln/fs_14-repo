import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";
import PersonDetail from "../components/PersonDetail";
import Paths from "../pages/Paths";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import FullStack from "../pages/FullStack";
import Aws from "../pages/Aws";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React from "../pages/React";
import Next from "../pages/Next";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { useState } from "react";

const AppRouter = () => {
  const [user , setUser ] = useState(false)
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="fullstack" element={<FullStack />}>
            <Route index element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route element={<PrivateRouter user={user}/>}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login  setUser={setUser}/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;