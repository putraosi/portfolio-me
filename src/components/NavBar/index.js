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
              <a href="">
                <img src={IcLogo} alt="logo" />
              </a>
            </div>
          </ul>
          <ul className={click ? "navbar__right active" : "navbar__right"}>
            <li className="navbar__item">
              <a href="">Home</a>
            </li>
            <li className="navbar__item">
              <a href="">Services</a>
            </li>
            <li className="navbar__item">
              <a href="">About</a>
            </li>
            <li className="navbar__item">
              <a href="">Skills</a>
            </li>
            <li className="navbar__item">
              <a href="">Portofolio</a>
            </li>
            <li className="navbar__item">
              <a href="">Blog</a>
            </li>
            <li className="navbar__item">
              <a href="">Contact</a>
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
