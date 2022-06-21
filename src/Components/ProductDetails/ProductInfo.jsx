import React, { useEffect, useState } from "react";

import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch } from "react-redux";
import axios from "axios";
const ProductInfo = ({ data }) => {
  const { title, category, price } = data;
  const [isClicked, setIsclicked] = useState(false);
  const dispatch = useDispatch();

  let cart = {};
  const handleCart = async (info) => {
    cart = { ...info };
    setIsclicked(true);
    const response = await axios.post(
      "https://jumiaclone.herokuapp.com/api/cart",
      info
    );
    Location.reload(true);
    console.log(response.data, "data");
    dispatch(getCartDetails());
    //dispatch(getCartDetails(info));
  };
  let count = 0;
  const addCart = () => {
    // const p = { ...data };
    // count = count + 1;
    // p.quantity = count;
    // dispatch(getCartDetails(p));
  };
  console.log(data);
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
      {!isClicked ? (
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
      ) : (
        <div className="cartBtnClicked flex my-3">
          <RemoveIcon className="cartIncrement" />

          <div className="mx-3">
            {JSON.parse(localStorage.getItem("item")).quantity}
          </div>

          <AddIcon
            onClick={() => {
              addCart();
            }}
            className="cartIncrement "
          />
          <div className="mx-2">(1 item(s) added)</div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
