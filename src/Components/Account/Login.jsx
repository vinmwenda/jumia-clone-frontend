import React, { useState } from "react";
import "./account.css";
import AccountInput from "./AccountInput";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "react-bootstrap/Form";

const AccountBtn = ({ Icon, text, bgColor, type, onClick }) => {
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="accountBtn flex1 align p-2 my-3"
      type={type}
      onClick={onClick}
    >
      <Icon style={{ color: "#ffffff" }} />

      <span
        className="bold"
        style={{ flex: 1, textAlign: "center", color: "#ffffff" }}
      >
        {text}
      </span>
    </div>
  );
};
const Login = () => {
  const [data, setData] = useState({
    Email_address: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const schema = {
    Email_address: Joi.string().required(),
    Password: Joi.string().required(),
  };
  const valu = { ...data };
  const handleChange = (nam, val) => {
    valu[nam] = val;
    setData(valu);
    let item = { [nam]: val };
    let fieldSchema = { [nam]: schema[nam] };
    const { error } = Joi.validate(item, fieldSchema);
    let fieldError = {};
    if (error) fieldError[nam] = error.details[0].message;
    setErrors(fieldError);
  };
  const validate = () => {
    const { error } = Joi.validate(data, schema, { abortEarly: false });
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path[0]] = item.message;
    return err;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
  };
  console.log(errors);
  console.log(data);
  return (
    <div className="accountContainer">
      <div className="headerText">Login</div>
      <form>
        <AccountInput
          name="Email_address"
          type="email"
          onChange={(e) => {
            handleChange(e.currentTarget.name, e.currentTarget.value);
          }}
        />
        {errors && (
          <div className={errors.Email_address ? "alert alert-danger" : null}>
            {errors.Email_address}
          </div>
        )}

        <AccountInput
          name="Password"
          type="password"
          color="orange"
          onChange={(e) => {
            handleChange(e.currentTarget.name, e.currentTarget.value);
          }}
        />
        {errors && (
          <div className={errors.Password ? "alert alert-danger" : null}>
            {errors.Password}
          </div>
        )}

        <div className="flex1 align">
          <div style={{ flex: 1 }}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </div>
          <Link to="">
            <span style={{ color: "orange" }}> Forgot your password?</span>
          </Link>
        </div>
        <AccountBtn
          Icon={LocalPostOfficeIcon}
          text="LOGIN"
          bgColor="orange"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />

        <AccountBtn
          Icon={LocalPostOfficeIcon}
          text="LOGIN WITH FACEBOOK"
          bgColor="blue"
        />
      </form>
    </div>
  );
};
export { AccountBtn };
export default Login;
