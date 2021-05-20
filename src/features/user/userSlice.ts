import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  username: string;
}
export interface IUserState {
  isAuth: boolean;
  user: IUser | null;
}

const initialState: IUserState = {
  isAuth: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.isAuth = false;
    },
    signIn: (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
    },
  },
});

export const { signOut, signIn } = userSlice.actions;

export default userSlice.reducer;
