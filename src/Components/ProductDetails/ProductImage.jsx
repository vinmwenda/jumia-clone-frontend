import React from "react";

const ProductImage = ({ data }) => {
  const { image, title } = data;
  return (
    <>
      <img
        className="p-2"
        style={{ width: "13rem", height: "17rem" }}
        src={image}
        alt={title}
      />
    </>
  );
};

export default ProductImage;
