import React, { useState } from "react";
import "./styles.css";
import { ILPeople01 } from "../../assets";

const About = () => {
  const [header] = useState({
    subHeading: "About Me",
    text:
      "Currently focused as a developer with more than 4 years of work experience, able to work on target, work individually and in teams, learn quickly and have good analytical skills. I am enjoy Islamic lessons and sport in my spare time and just looking for a halal job.",
  });
  const [state] = useState([
    { id: 1, title: "Name:", text: "Osi Novandama Putra" },
    { id: 1, title: "Email:", text: "osiputra21@gmail.com" },
    { id: 1, title: "Phone:", text: "+62 897 7652 198" },
    { id: 1, title: "Address:", text: "Tangerang - Banten, Indonesia" },
  ]);

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={ILPeople01} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              {/* <h1>Hi There</h1>
              <div className="about__info-p1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="about__info-p2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div> */}
              <div className="info__contacts">
                <div className="row">
                  {state.map((item) => {
                    return (
                      <div className="col-6">
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
