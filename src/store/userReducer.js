import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    list: [],
  },

  reducers: {
    userInformation: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const { userInformation } = slice.actions;
export default slice.reducer;
