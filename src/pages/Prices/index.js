import React, { useState } from "react";
import "./styles.css";

const Prices = () => {
  const [header] = useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Pricing Plan",
    text:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });

  const [state] = useState([
    {
      id: 1,
      heading: "Basic",
      recomended: false,
      price: 50,
      msg1: "5GB Storage Space",
      msg2: "2GB Monthly Bandwidth",
      msg3: "My SQL Database",
      msg4: "100 Email Account",
      msg5: "100 Free Domain Names",
    },
    {
      id: 2,
      heading: "Standard",
      recomended: true,
      price: 80,
      msg1: "5GB Storage Space",
      msg2: "2GB Monthly Bandwidth",
      msg3: "My SQL Database",
      msg4: "100 Email Account",
      msg5: "100 Free Domain Names",
    },
    {
      id: 3,
      heading: "Premium",
      recomended: false,
      price: 50,
      msg1: "5GB Storage Space",
      msg2: "2GB Monthly Bandwidth",
      msg3: "My SQL Database",
      msg4: "100 Email Account",
      msg5: "100 Free Domain Names",
    },
  ]);

  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <div className="price">
                  {item.recomended ? (
                    <div className="price_recomended">Recomended</div>
                  ) : (
                    <div className="h-30"></div>
                  )}
                  <div className="priceHeading">{item.heading}</div>
                  <div className="price__rs">
                    <span>$</span>
                    {item.price}
                  </div>
                  <ul>
                    <li>{item.msg1}</li>
                    <li>{item.msg2}</li>
                    <li>{item.msg3}</li>
                    <li>{item.msg4}</li>
                    <li>{item.msg5}</li>
                  </ul>
                  <div className="price__btn">
                    <a href="" className="btn btn-outline">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prices;
