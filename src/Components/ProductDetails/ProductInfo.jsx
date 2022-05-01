import React, { useEffect } from "react";

import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { getCartDetails } from "../../store/actions";
import { useDispatch } from "react-redux";

const ProductInfo = ({ data }) => {
  const { title, category, price } = data;

  const dispatch = useDispatch();
  const handleCart = (info) => {
    dispatch(getCartDetails(info));
  };
  useEffect(() => {
    document.title = JSON.parse(localStorage.getItem("item")).title;
  }, []);

  return (
    <>
      <div className="bold">{title}</div>
      <div>Brand:{category}</div>
      <div>Rating</div>
      <div className="bold">KSh {price}</div>
      <div>+ Shipping fee KSh 50 to CBD - UON/Globe/KOja/River Road</div>
      <div
        onClick={() => handleCart(data)}
        style={{ backgroundColor: "orange" }}
        className="cartBtn my-2"
      >
        <div style={{ flex: 0.4 }}>
          <AddShoppingCart style={{ color: "#ffffff" }} />{" "}
        </div>
        <div className="bold" style={{ color: "#ffffff" }}>
          ADD TO CART
        </div>
      </div>
      <div className="cartBtnClicked flex my-3">
        <RemoveIcon className="cartIncrement" />

        <div className="mx-3">1</div>

        <AddIcon className="cartIncrement " />
        <div className="mx-2">(1 item(s) added)</div>
      </div>
    </>
  );
};

export default ProductInfo;
