import React from "react";

const AccountInput = ({ type, name, color, value, onChange }) => {
  return (
    <>
      <div className="accountInputContainer">
        <span style={{ color: color }} className="inputLabel">
          {name}
        </span>
        <input
          className="accountInput"
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          required
        />
      </div>
    </>
  );
};

export default AccountInput;
