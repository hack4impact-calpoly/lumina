import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    storeName: (state, name) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = name;
    },
    storeEmail: (state, email) => {
      state.email = email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeEmail, storeName } = signUpSlice.actions;

export default signUpSlice.reducer;
