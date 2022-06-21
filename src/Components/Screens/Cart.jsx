import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import jexpress from "../../static/images/jexpress.png";

const Cart = () => {
  const item = useSelector((state) => state.cart.list) || [];
  const count = [];

  console.log(count);
  let prices = [];
  item.forEach((p) => prices.push(p.price));
  console.log(prices);
  let sum = 0;

  const totalPrice = () => {
    prices.forEach((p) => {
      sum = p + sum;
    });
    sum = sum.toFixed(2);
  };
  totalPrice();
  console.log(sum);
  const CartInfo = () => {
    return (
      <div className="p-2" style={{ backgroundColor: "white" }}>
        <div>cart ({item.length})</div>
        <hr />
        {item.map((x) => (
          <>
            <div key={x._id} className="flex p-1">
              <div style={{ flex: 0.2 }}>
                <img style={{ height: "3rem" }} src={x.image} alt={x.title} />
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
        <div className="flex">
          <div style={{ flex: 1 }}> Subtotal</div>{" "}
          <div className="bold">{sum}</div>
        </div>
        <hr />
        <div>Jumia Express items are eligible for free delivery </div>
        <div>
          {" "}
          <img style={{ width: "10rem" }} src={jexpress} alt="jumia express" />
        </div>
        <div className="checkoutBtn my-3">CHECKOUT ({sum})</div>
      </div>
    );
  };
  return (
    <Container fluid="md" style={{ backgroundColor: "" }}>
      <Row className="flex1 bgc">
        <Col lg={7} className="p-1 m-1">
          <CartInfo />
        </Col>
        <Col lg={4} className="p-2 m-1">
          <CartSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
