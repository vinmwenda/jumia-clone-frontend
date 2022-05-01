import React from "react";

const Icons = ({ Icon, text }) => {
  return (
    <div className="align">
      <Icon style={{ margin: "0.5rem", color: "black", fontSize: "20" }} />

      {text}
    </div>
  );
};

export default Icons;
