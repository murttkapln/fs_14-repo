import React from "react";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import {Route, Routes} from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MovieDetail from "../pages/MovieDetail"

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" elements={<Main />} />
        <Route path="/login" elements={<Login />} />
        <Route path="/register" elements={<Register />} />
        <Route path="/details/:id" elements={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
