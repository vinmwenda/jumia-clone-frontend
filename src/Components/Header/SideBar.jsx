import React from "react";
import Icons from "../Reusable/Icons";

import "./header.css";

import AppleIcon from "@mui/icons-material/Apple";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Col from "react-bootstrap/Col";
const SideBar = () => {
  let items = [
    {
      Icon: ShoppingBasketIcon,
      text: "Supermarket",
    },
    {
      Icon: AppleIcon,
      text: "Fruits",
    },
    {
      Icon: AutoFixHighIcon,
      text: "Health & Beauty",
    },
    {
      Icon: CottageOutlinedIcon,
      text: "Home & Office",
    },
    {
      Icon: PhoneAndroidOutlinedIcon,
      text: "Phone & Tablets",
    },
    {
      Icon: ComputerOutlinedIcon,
      text: "Computing",
    },
    {
      Icon: RadioOutlinedIcon,
      text: "Electronics",
    },
    {
      Icon: CheckroomIcon,
      text: "clothing",
    },
    {
      Icon: SportsEsportsOutlinedIcon,
      text: "Gaming",
    },
    {
      Icon: CategoryOutlinedIcon,
      text: "Other Category",
    },
  ];
  return (
    <Col>
      {items.map((item) => (
        <Col key={item.text}>
          <span className="sideBarIcon">
            <Icons Icon={item.Icon} text={item.text} />
          </span>
        </Col>
      ))}
    </Col>
  );
};

export default SideBar;
