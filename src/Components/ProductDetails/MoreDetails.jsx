import React from "react";

const MoreDetails = ({ data }) => {
  const { description, image, title } = data;
  return (
    <>
      <div>
        Product Details
        <hr />
      </div>
      <div>
        <img style={{ width: "80%", height: "auto" }} src={image} alt={title} />
      </div>
      <div>{description}</div>
    </>
  );
};

export default MoreDetails;
