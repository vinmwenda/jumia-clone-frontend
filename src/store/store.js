import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { productsApi, locationApi } from "./apiMiddleware";

export default function store() {
  return configureStore({
    reducer,
    middleware: [productsApi, locationApi],
  });
}
