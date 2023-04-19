import { createSlice } from "@reduxjs/toolkit";

import { getUsers, updateUser } from "./users.api";

import type User from "types/user";

const initialState: {
  users: User[];
  isLoading: boolean;
  error: null | string;
} = {
  users: [],
  isLoading: true,
  error: null,
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getUsers.fulfilled, (state, action) => ({
        ...state,
        users: action.payload,
        isLoading: false,
      }))
      .addCase(getUsers.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error:
          action.error.message ||
          "Error occurred while trying to fetch all users",
      }))

      .addCase(updateUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))

      .addCase(updateUser.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error:
          action.error.message || "Error occurred while trying to update user",
      }))
      .addCase(updateUser.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default usersSlice;
