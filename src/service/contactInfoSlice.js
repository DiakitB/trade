import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contactInfo: {},
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getContactInfo(state, action) {
      state.contactInfo = action.payload;
      console.log(action.payload);
    },
  },
});
export const { getContactInfo } = contactSlice.actions;
export default contactSlice.reducer;
