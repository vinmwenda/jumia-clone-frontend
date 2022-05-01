import React from "react";
import "./header.css";
import Col from "react-bootstrap/Col";

const HeaderRow = () => {
  const items = [
    {
      image: require("../../static/images/officialStore.png"),
      text: "Official Stores",
    },
    {
      image: require("../../static/images/nextday.png"),
      text: "Next Day Delivery",
    },
    {
      image: require("../../static/images/jumiafood.png"),
      text: "Jumia Foods",
    },
    {
      image: require("../../static/images/bus.png"),
      text: "Bus Tckets",
    },
  ];
  return (
    <span className="flex">
      {items.map((item) => (
        <Col lg key={item.text} className="headerRow flex m-2">
          <img src={item.image} alt={item.text} />
          {item.text}
        </Col>
      ))}
    </span>
  );
};

export default HeaderRow;
