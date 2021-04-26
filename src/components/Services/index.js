import React, { useState } from "react";
import "./styles.css";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";

const Services = () => {
  const [header] = useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });
  const [state] = useState([
    {
      id: 1,
      icon: "FaGithub",
      heading: "App Development",
      text:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy",
    },
    {
      id: 2,
      icon: "FaCamera",
      heading: "Photography",
      text:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy",
    },
    {
      id: 3,
      icon: "FaCircleNotch",
      heading: "Web Design",
      text:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy",
    },
    {
      id: 4,
      icon: "FaApple",
      heading: "Web Development",
      text:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy",
    },
    {
      id: 5,
      icon: "FaFileVideo",
      heading: "Video Editing",
      text:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy",
    },
    {
      id: 6,
      icon: "FaSearchDollar",
      heading: "SEO Expert",
      text:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy",
    },
  ]);

  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((item) => {
              return (
                <div className="col-4">
                  <div className="services__box">
                    <FaGithub className="commonIcon" />
                    <div className="services__box-header">{item.heading}</div>
                    <div className="services__box-p">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
