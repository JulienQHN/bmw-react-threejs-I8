import React from "react";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <img className="logoImg" src={logo} alt="BMW logo"></img>
        <div className="logo">BMW ReactJs + ThreeJs</div>
        <nav>
          <ul>
            <li className="btn">
              <a href="/">Experience</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
