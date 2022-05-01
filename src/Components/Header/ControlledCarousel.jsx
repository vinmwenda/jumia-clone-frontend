import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const items = [
    {
      image: require("../../static/images/image1.jpg"),
    },
    {
      image: require("../../static/images/image2.jpg"),
    },
    {
      image: require("../../static/images/image3.jpg"),
    },
    {
      image: require("../../static/images/image4.jpg"),
    },
    {
      image: require("../../static/images/image5.jpg"),
    },
    {
      image: require("../../static/images/image6.jpg"),
    },
    {
      image: require("../../static/images/image7.jpg"),
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map((item) => (
        <Carousel.Item key={item.image}>
          <img className="d-block w-100" src={item.image} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
