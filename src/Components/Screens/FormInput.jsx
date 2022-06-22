import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Joi from "joi-browser";
import { formField } from "../../static/data/data";
import { getUserInfo } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const FormInput = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    First_name: "",
    Last_name: "",
    Username: "",
    Email_address: "",
    Password: "",
    Confirm_Password: "",
  });
  useEffect(() => {}, []);
  const [errors, setErrors] = useState();
  const account = {};
  console.log(errors);

  const schema = {
    First_name: Joi.string().required(),
    Last_name: Joi.string().required(),
    Username: Joi.string().required(),
    Email_address: Joi.string().required(),
    Password: Joi.string().required(),
    Confirm_Password: Joi.string().required(),
  };
  const validateField = (name, val) => {
    let newName = name.split(" ").join("_");
    const item = { [newName]: val };
    const fieldSchema = { [newName]: schema[newName] };
    const { error } = Joi.validate(item, fieldSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = (name, val) => {
    let newName = name;

    account[newName] = val;
    let newData = { ...data };

    newData[newName] = val;
    setData(newData);
    const error = validateField(name, val);

    const fieldError = { ...errors };
    fieldError[newName] = error;
    setErrors(fieldError);
  };
  const validate = () => {
    const result = Joi.validate(data, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    if (errors) return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();

    setErrors(validate());
    dispatch(getUserInfo());
    await axios.post("https://jumiaclone.herokuapp.com/api/users", data);
  };

  console.log(data);
  return (
    <Container>
      <div
        className="bold mb-3"
        style={{ textAlign: "center", color: "orange" }}
      >
        Create Account
      </div>
      <Col md={5} style={{ margin: "auto" }}>
        <Form>
          {formField.map((field) => (
            <Form.Group key={field.name} className="mb-3">
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                name={field.name}
                value={data[field.name]}
                onChange={(e) =>
                  handleChange(e.currentTarget.name, e.currentTarget.value)
                }
              />
              {errors ? (
                <div
                  className={errors[field.name] ? "alert alert-danger" : null}
                >
                  {errors[field.name]}
                </div>
              ) : null}
            </Form.Group>
          ))}

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept the Terms & conditions and Privacy and Cookie Notice."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I want to receive Jumia Newsletters with the best deals and offers"
            />
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            {" "}
            <Button
              onClick={(e) => {
                handleSubmit(e);
              }}
              variant="success"
              size="sm"
              type="submit"
              disabled={validate()}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
};

export default FormInput;
