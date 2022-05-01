import React from "react";
import Container from "react-bootstrap/esm/Container";

import Login from "../Account/Login";
import Register from "../Account/Register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Account = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ borderRight: "1px solid grey" }} md={12} lg={6}>
            <Login />
          </Col>
          <Col md={12} lg={6}>
            <Register />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
