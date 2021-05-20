import React, { useState } from "react";
import { ItemServices } from "../../components";
import "./styles.css";

const Services = () => {
  const [header] = useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: "I am able to give the best effort for every project I work on as well as provide solutions with my experience.",
  });

  const [state] = useState([
    {
      id: 1,
      icon: "app_development",
      heading: "App Development",
      text: "Have the ability to create, perform and improve mobile application development",
    },
    {
      id: 2,
      icon: "web_development",
      heading: "Web Development",
      text: "Have the ability to create, perform and improve website development",
    },
    {
      id: 3,
      icon: "photo_editor",
      heading: "Photo Editing",
      text: "has the ability to edit and manipulate images as needed in development",
    },
  ]);

  return (
    <div className="services" id="services">
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
                <ItemServices
                  key={item.id}
                  heading={item.heading}
                  desc={item.text}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
