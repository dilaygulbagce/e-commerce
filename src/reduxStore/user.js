import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: {name: "",
  surname: "",
  email: "",
  address: ""}
 },
  reducers: {
    register: (state, action) => {
      state.user = action.payload.user;
    }
  
  },
});

export const { register } =
userSlice.actions;
export default userSlice.reducer;
