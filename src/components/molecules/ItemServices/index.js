import React from "react";
import { FaDesktop, FaMobileAlt, FaRegImages } from "react-icons/fa";
import "./styles.css";

const ItemServices = ({ icon, heading, desc }) => {
  const Icon = () => {
    switch (icon) {
      case "app_development":
        return <FaMobileAlt className="commonIcon" />;

      case "web_development":
        return <FaDesktop className="commonIcon" />;

      case "photo_editor":
        return <FaRegImages className="commonIcon" />;

      default:
        return <FaMobileAlt className="commonIcon" />;
    }
  };

  return (
    <div className="col-4">
      <div className="box">
        <div className='box-icon'>
          <Icon />
        </div>
        <div className="box-header">{heading}</div>
        <div className="box-p">{desc}</div>
      </div>
    </div>
  );
};

export default ItemServices;
