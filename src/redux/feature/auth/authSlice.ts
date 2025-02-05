import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/types";
import { verifyToken } from "src/utils/verifyToken";
import { RootState } from "../../store";

type TAuthState = {
  user: IUser | null;
  token: string | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as TAuthState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ token: string }>) => {
      state.token = payload.token;
      const user = verifyToken(payload.token) as IUser;
      state.user = user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
