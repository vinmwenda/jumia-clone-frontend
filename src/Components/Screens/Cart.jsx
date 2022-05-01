import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";

const Cart = () => {
  const item = useSelector((state) => state.cart.cartDetails);
  const CartInfo = () => {
    return (
      <div className="p-2" style={{ backgroundColor: "white" }}>
        <div>cart ({item.length})</div>
        <hr />
        {item.map((x) => (
          <>
            <div key={x.id} className="flex p-1">
              <div style={{ flex: 0.2 }}>
                <img style={{ height: "3rem" }} src={x.image} />
              </div>
              <div style={{ flex: 0.7 }}>{x.title}</div>
              <div style={{ flex: 0.1 }}>{x.price}</div>
            </div>
            <hr />
          </>
        ))}
      </div>
    );
  };
  const CartSummary = () => {
    return (
      <div className="p-2" style={{ backgroundColor: "white" }}>
        <div>CART SUMMARY</div>
        <hr />
        <div>dddhdhh</div>
        <hr />
      </div>
    );
  };
  return (
    <Container fluid="md" style={{ backgroundColor: "" }}>
      <div className="flex1 bgc">
        <div style={{ flex: 0.7 }} lg={8} className="p-1 m-1">
          <CartInfo />
        </div>
        <div style={{ flex: 0.3 }} className="p-2 m-1">
          <CartSummary />
        </div>
      </div>
    </Container>
  );
};

export default Cart;
