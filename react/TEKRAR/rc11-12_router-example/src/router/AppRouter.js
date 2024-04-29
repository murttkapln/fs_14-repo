import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Paths from "../pages/Paths";
import People from "../pages/People";
import PersonDetail from "../pages/PersonDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Aws from "../pages/Aws";
import Next from "../pages/Next";
import React from "../pages/React";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import { useState } from "react";
import FullStack from "../pages/FullStack";

const AppRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="fullstack" element={<FullStack />}>
            <Route index element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
