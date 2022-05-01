// import axios from "axios";
import React, { useEffect } from "react";
import ProductsContainer from "./ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions";

const RenderProducts = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let electronics = products.filter(
    (product) => product.category === "electronics"
  );
  let jewelery = products.filter((product) => product.category === "jewelery");
  let menclothes = products.filter(
    (product) => product.category === "men's clothing"
  );
  let womenclothes = products.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <>
      <ProductsContainer
        category="Top selling"
        products={products}
        color="green"
      />
      <ProductsContainer
        category={"Electronics"}
        products={electronics}
        color="blue"
      />
      <ProductsContainer
        category={"Jewelery"}
        products={jewelery}
        color="silver"
      />
      <ProductsContainer
        category={"Men's clothing"}
        products={menclothes}
        color="grey"
      />
      <ProductsContainer
        category={"Women's clothing"}
        products={womenclothes}
        color="pink"
      />
    </>
  );
};

export default RenderProducts;
