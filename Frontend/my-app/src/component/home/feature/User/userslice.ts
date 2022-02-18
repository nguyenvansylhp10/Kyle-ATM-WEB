import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
}
const initialState: User = {
  id: "",
  email: "",
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurentUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
      return state;
    },
  },
});
const { actions, reducer } = user;
export const { setCurentUser } = actions;
export default reducer;
