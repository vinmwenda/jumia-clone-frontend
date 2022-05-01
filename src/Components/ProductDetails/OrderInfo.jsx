import React from "react";
import { useSelector } from "react-redux";
import jexpress from "../../static/images/jexpress.png";
import FormSelect from "../Reusable/FormSelect";
import OrderIcons from "./OrderIcons";

const OrderInfo = () => {
  const locations = useSelector((state) => state.location.list);

  return (
    <div>
      <span className="">DELIVERY & RETURNS</span>
      <hr />

      <div>
        {" "}
        <img style={{ width: "10rem" }} src={jexpress} alt="jumia express" />
        <div className="smallFont">
          Eligible for free delivery for orders above Ksh 1,000 in Nairobi
          (excluding large items)
        </div>
        <hr />
        <div>choose your location</div>
        <div className="my-2">
          <FormSelect location={locations} />
        </div>
      </div>
      <OrderIcons />
    </div>
  );
};

export default OrderInfo;
