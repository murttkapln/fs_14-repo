import React from "react";
import img from "../img/Clarusway.png";

const Header = () => {
  return (
    <header>
      <nav className="bg-dark text-light">
        <img className="w-25 p-2" src={img} alt="" />
      </nav>
      <h1 className="text-center" >Lesson Reminder</h1>
    </header>
  );
};

export default Header;
