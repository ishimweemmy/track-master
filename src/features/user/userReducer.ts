import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../@types/UserState";

const initialState: UserState = {
  username: null,
  userId: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
