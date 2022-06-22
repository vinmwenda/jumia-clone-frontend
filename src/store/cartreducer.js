import { createSlice } from "@reduxjs/toolkit";
import { saveState } from "../browserData";
import { loadState } from "../browserData";
let cartdata = [];
let data = loadState("cart") || [];

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },

  reducers: {
    apiCallSuccessiful: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const { apiCallSuccessiful } = slice.actions;
export default slice.reducer;
