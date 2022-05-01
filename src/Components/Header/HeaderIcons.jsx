import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./header.css";

const HeaderIcons = ({ Icon, text1, text2 }) => {
  return (
    <Row>
      <Col className="flex align">
        <Icon style={{ margin: "0.5rem", fontSize: "35", color: "orange" }} />
        <Col>
          {text1}
          <Col>
            <p style={{ color: "grey", fontSize: "60", fontWeight: "300" }}>
              {text2}
            </p>
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default HeaderIcons;
