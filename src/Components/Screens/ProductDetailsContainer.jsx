import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import ProductImage from "../ProductDetails/ProductImage";
import ProductInfo from "../ProductDetails/ProductInfo";
import OrderInfo from "../ProductDetails/OrderInfo";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MoreDetails from "../ProductDetails/MoreDetails";
import { getLocations } from "../../store/actions";
import { loadState } from "../../browserData";

const ProductDetailsContainer = () => {
  //const items = useSelector((state) => state.products.details);
  const data = loadState("item");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { category, title } = data;

  return (
    <Container>
      <div>
        <Link to="/">
          <span className="bold">{"Home >"}</span>
        </Link>
        <span className="bold">{`${category} >`}</span>
        <span className="smallFont">{title}</span>
      </div>

      <Row>
        <Col lg={3}>
          <ProductImage data={data} />
        </Col>
        <Col lg={5}>
          <ProductInfo data={data} />
        </Col>
        <Col lg={3}>
          <OrderInfo />
        </Col>
        <Row>
          <Col lg={8} className="m-2">
            <MoreDetails data={data} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ProductDetailsContainer;
