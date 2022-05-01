import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
// import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";

const CardItem = ({ name, price, image, product, id }) => {
  let newName = `${name.substr(0, 20)}...`;
  const dispatch = useDispatch();

  const handleProductDetails = (item) => {
    dispatch({
      type: "products/productDetails",
      payload: item,
    });
    localStorage.setItem("item", JSON.stringify(item));
  };

  return (
    <>
      <Link key={name} to={`/${name.split(" ").join("-")}`}>
        <Card
          onClick={() => handleProductDetails(product)}
          className="cardContainer zoom p-1 m-1"
          style={{ width: "12rem", height: "17em" }}
        >
          <Card.Img variant="top" className="cardImage" src={image} />
          <Card.Body>
            <Card.Title style={{ fontSize: "13px", flexWrap: "nowrap" }}>
              {newName}
            </Card.Title>
            <Card.Text>
              Ksh <span className="bold">{price}</span>
            </Card.Text>
            {/* <Button variant="primary"></Button> */}
          </Card.Body>
        </Card>
      </Link>
      <Outlet />
    </>
  );
};

export default CardItem;
