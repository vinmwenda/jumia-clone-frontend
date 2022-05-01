import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { Link } from "react-router-dom";
const OrderIcons = () => {
  const orderInfo = [
    { Icon: LocalShippingOutlinedIcon, type: "Door Delivery", price: 96 },
    { Icon: LocalPostOfficeOutlinedIcon, type: "Pickup Station", price: 50 },
  ];
  return (
    <>
      {orderInfo.map((info) => (
        <div key={info.type} className="flex1 smallFont my-2">
          <div>
            {" "}
            <info.Icon style={{ marginRight: "10px" }} />
          </div>

          <div style={{ flex: 1 }}>
            <div className="flex1">
              <div style={{ flex: 1 }}>{info.type}</div>
              <Link className="link" to="/">
                Details
              </Link>
            </div>
            <div>
              <div>Delivery KSh {info.price}</div>
              <div>
                Delivery by 23 February when you order within next 12hrs 37mins
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderIcons;
