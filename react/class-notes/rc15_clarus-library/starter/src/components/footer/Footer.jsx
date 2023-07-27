import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { lightIcon, darkIcon } from "../../helper/iconData";
import { FooterBtn, FooterContainer } from "./Footer.style";

const Footer = () => {
  const { myTheme, setMyTheme } = useThemeContext();

  const handleClick = () => {

  }
  return (
    <FooterContainer>
      <FooterBtn onclick={handleClick}>
        {myTheme === "light" ? lightIcon : darkIcon}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
