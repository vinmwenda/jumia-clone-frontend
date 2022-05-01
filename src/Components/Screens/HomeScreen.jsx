import React, { useEffect } from "react";

import Header from "../Header/Header";
import RenderProducts from "../Products/RenderProducts";

const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "orange" }}>
        <Header />

        <RenderProducts />
      </div>
    </>
  );
};

export default HomeScreen;
