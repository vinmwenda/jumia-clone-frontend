import { createSlice } from "@reduxjs/toolkit";
import { saveState } from "../browserData";
import { loadState } from "../browserData";
let cartdata = [];
let data = loadState("cart") || [];
const slice = createSlice({
  name: "cart",
  initialState: {
    cartDetails: [...data],
    finalState: [],
  },

  reducers: {
    cartDetails: (state, action) => {
      cartdata.push(action.payload);
      saveState("cart", cartdata);

      state.cartDetails = [...loadState("cart")];
    },
  },
});

export const { cartDetails } = slice.actions;
export default slice.reducer;
