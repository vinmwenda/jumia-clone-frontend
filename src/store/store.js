import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { productsApi, locationApi, cartApi, userApi } from "./apiMiddleware";

export default function store() {
  return configureStore({
    reducer,
    middleware: [productsApi, locationApi, cartApi, userApi],
  });
}
