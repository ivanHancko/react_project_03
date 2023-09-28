import React from "react";
import logo from "../images/trollFace.png";

const Header = () => {
  return (
    <header className="header">
      <img className="meme--logo" src={logo} alt="" />
      <h2 className="meme--heading">Meme Generator</h2>
      <h4 className="meme--title">React Course - Project 3</h4>
    </header>
  );
};

export default Header;
