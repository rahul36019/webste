import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import { HashLink } from "react-router-hashlink";

function Header() {
  return (
    <nav>
      <h1>DemonStore</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#brand"}>Brand</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
}

export default Header;
