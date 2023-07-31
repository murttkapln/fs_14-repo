import React from "react";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MovieDetail from "../pages/MovieDetail"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" elements={<Main />} />
        <Route path="/login" elements={<Login />} />
        <Route path="/register" elements={<Register />} />
        <Route path="/detail/:id" elements={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
