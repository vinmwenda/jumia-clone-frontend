import { createSlice } from "@reduxjs/toolkit";
//import configureAppStore from "./storeConfiguration";
//store.dispatch(actions.productLoaded({description:"product one"}))

const slice = createSlice({
  name: "location",
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
