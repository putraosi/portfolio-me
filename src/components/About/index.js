import React, { useState } from "react";
import "./styles.css";
import { ILPeople01 } from "../../assets";

const About = () => {
  const [header] = useState({
    subHeading: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });
  const [state] = useState([
    { id: 1, title: "Name:", text: "Jonathan Doe" },
    { id: 1, title: "Email:", text: "Jonathan@mail.com" },
    { id: 1, title: "Phone:", text: "+1 234 567 890" },
    { id: 1, title: "LinkedIn:", text: "Jonathan_123" },
  ]);

  return (
    <div className="about">
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
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="about__info-p2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
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
