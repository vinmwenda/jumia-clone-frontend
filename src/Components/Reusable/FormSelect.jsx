import React from "react";
import Form from "react-bootstrap/Form";

const FormSelect = ({ location }) => {
  //let defaultname = location.filter((p) => p.name === "Nairobi");

  return (
    <Form.Select aria-label="Default select example">
      <option style={{ outline: "none" }}>Nairobi</option>
      {location.map((county) => (
        <option key={county._id} value={county.code}>
          {county.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default FormSelect;
