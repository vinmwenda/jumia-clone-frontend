import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./SideBar";

import "./header.css";
import Information from "./Information";
import VideoAds from "./VideoAds";
import HeaderRow from "./HeaderRow";
import ControlledCarousel from "./ControlledCarousel";

const Header = () => {
  return (
    <Container fluid="sm">
      <Row style={{ backgroundColor: "white" }} className="m-2">
        <Col lg={2} xs={12} className="border m-1">
          <SideBar />
        </Col>
        <Col lg sm={12} className="m-1 border">
          <ControlledCarousel />
        </Col>
        <Col lg={3} xs={12}>
          <Row className=" border m-1">
            <Information />
          </Row>
          <Row className=" border m-1">
            <VideoAds />
          </Row>
        </Col>
      </Row>
      <Row>
        {" "}
        <HeaderRow className="flex" />
      </Row>
    </Container>
  );
};

export default Header;
