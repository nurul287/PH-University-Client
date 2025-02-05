import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "src/types";
import { verifyToken } from "src/utils/verifyToken";
import { RootState } from "../../store";
import authApi from "./authApi";

type AuthState = {
  user: IUser | null;
  token: string | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.data.accessToken;
        const user = verifyToken(payload.data.accessToken) as IUser;
        state.user = user;
      }
    );
  },
});

export const { logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
