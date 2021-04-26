import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IcLogo } from "../../assets";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerSection">
          <div className="row justifyContent">
            <div className="col-6">
              <div className="footerSection-logo">
                <img src={IcLogo} alt="" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <ul className="footerCircle">
                <li>
                  <a href="" className="social__icon">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="" className="social__icon">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="" className="social__icon">
                    <FaPinterest />
                  </a>
                </li>
                <li>
                  <a href="" className="social__icon">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
