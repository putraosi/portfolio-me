import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IcLogo } from "../../assets";
import "./styles.css";

const NavBar = () => {
  const [state, setState] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <a href="#home">
                <img src={IcLogo} alt="logo" />
              </a>
            </div>
          </ul>
          <ul className={click ? "navbar__right active" : "navbar__right"}>
            <li className="navbar__item">
              <a href="#home" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#services" onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li className="navbar__item">
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#skills" onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li className="navbar__item">
              <a href="#portfolio" onClick={closeMobileMenu}>
                Portoflio
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="toggle" onClick={() => setClick(!click)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default NavBar;
