import React, { useState } from "react";
import "./styles.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaPlay,
} from "react-icons/fa";
import { ILPeople01 } from "../../assets";
import { ImageByType } from "../../utils";

const Banner = () => {
  const [state] = useState({
    title: "I am Osi Novandama Putra",
    desc:
      "I'm Osi, Front-End Developer with long time experience in this field",
    image: ILPeople01,
  });

  const [socialMedia] = useState([
    {
      id: 1,
      type: "facebook",
      url: "https://www.facebook.com/osi.putra.391/",
    },
    {
      id: 2,
      type: "instagram",
      url: "https://www.instagram.com/putra_osi/",
    },
  ]);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  {socialMedia.map((item) => (
                    <li>
                      <a
                        href={item.url}
                        target="_blank"
                        className="social__icon"
                      >
                        {ImageByType(item.type)}
                      </a>
                    </li>
                  ))}
                </ul>
                <h1>{state.title}</h1>
                <p>{state.desc}</p>
                <div className="header__button">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
