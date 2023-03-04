import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { ProfileState } from "./profileSlice.types";

const tokenKey = "token";

const decodeToken = (token: string | null): ProfileState => {
  const decoded = token !== null ? jwtDecode<{ nameid: string, name: string, email: string, exp: number }>(token) : null;

  return {
    loggedIn: token !== null,
    token: token ?? null,
    userId: decoded?.nameid ?? null,
    name: decoded?.name ?? null,
    email: decoded?.email ?? null,
    exp: decoded?.exp ?? null
  };
};

const getInitialState = (): ProfileState => decodeToken(localStorage.getItem(tokenKey));

export const profileSlice = createSlice({
  name: "profile",
  initialState: getInitialState(),
  reducers: {
    setToken: (_, action: PayloadAction<string>) => {
      return decodeToken(action.payload);
    },
    resetProfile: () => {
      localStorage.removeItem(tokenKey);

      return {
        loggedIn: false,
        token: null,
        userId: null,
        name: null,
        email: null,
        exp: null
      };
    }
  }
});

export const { 
  setToken,
  resetProfile
} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
