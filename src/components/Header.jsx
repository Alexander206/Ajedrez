import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/components/header.scss";

import logo from "../assets/SVGLogo1.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handlerMenu = (event) => {
    setMenu(!menu);
  };

  return (
    <header>
      <figure>
        <img src={logo} alt="logo" />

        <div>
          <span>
            <strong>Chess</strong>AROK
          </span>

          <span>ONLINE</span>
        </div>
        <div></div>
      </figure>

      <nav>
        <ul className={menu ? "open" : "close"}>
          <li>
            <Link to="/Ajedrez/">Inicio</Link>
          </li>

          <li>
            <Link to="/Ajedrez/new/">Nueva partida</Link>
          </li>

          <li>
            <Link to="/Ajedrez/about/">Información</Link>
          </li>
        </ul>

        <button onClick={handlerMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </nav>
    </header>
  );
};

export default Header;
