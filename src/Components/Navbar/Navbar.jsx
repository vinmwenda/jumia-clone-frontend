import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Icons from "../Reusable/Icons";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Search from "./Search";
import gif from "../../static/images/top.gif";
import jumiaIcon from "../../static/images/jumiaIcon.png";
import { loadState } from "../../browserData";
import { useSelector } from "react-redux";

const Navbar = () => {
  let [count, setCount] = useState();
  let newCount = useSelector((state) => state.cart.list);
  count = newCount.length === 0 ? count : newCount;
  let func = () => {
    setCount(count);
  };
  useEffect(() => {
    func();
  }, []);

  const styles = {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="topCont">
            <img src={gif} alt="jumia" />
          </Col>
        </Row>
      </Container>
      <div className=" navContainer">
        <Container className="p-3 ">
          <Row>
            <Col lg={2} xs={12} className="hover">
              <Link to="/">
                {" "}
                <img style={{ width: "9rem" }} src={jumiaIcon} alt="icon" />
              </Link>
            </Col>
            <Col xs sm lg={6}>
              <Search />
            </Col>
            <Col lg={4} xs={12}>
              <Row>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      size="sm"
                      id="dropdown-basic "
                      style={styles}
                    >
                      <Icons Icon={AccountCircleOutlinedIcon} text="Account" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                      <Dropdown.Item
                        style={{
                          backgroundColor: "orange",

                          borderRadius: "5px",
                        }}
                      >
                        <Link to="/account">
                          <span style={{ color: "#ffffff" }}>SIGN IN</span>
                        </Link>
                      </Dropdown.Item>
                      <hr style={{ color: "grey" }} />
                      <Dropdown.Item>
                        <Link to="/account">
                          {" "}
                          <Icons
                            Icon={AccountCircleOutlinedIcon}
                            text="My Account"
                          />
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Icons
                          Icon={LocalPostOfficeOutlinedIcon}
                          text="Orders"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Icons
                          Icon={FavoriteBorderOutlined}
                          text="Saved Items"
                        />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      size="sm"
                      id="dropdown-basic "
                      style={styles}
                    >
                      <Icons Icon={HelpOutlineOutlinedIcon} text="Help" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">hello</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col style={styles}>
                  <Link to="/cart">
                    <div className="flex">
                      <ShoppingCartOutlinedIcon />
                      <span className="counter">
                        {count ? count.length : 0}
                      </span>
                    </div>
                    <span className="mx-2">cart</span>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* < */}
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <Icons />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Icons />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <Icons />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </>
  );
};

export default Navbar;
