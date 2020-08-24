import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="nav_div" className="nav_div">
      <nav>
        <ul>
          <li>
            <a href="#home-main">home</a>
          </li>
          <li>
            <a href="#about-main">about</a>
          </li>
          <li>
            <a href="#projects-main"> projects</a>
          </li>
          <li>
            <a href="#contacts-main">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
