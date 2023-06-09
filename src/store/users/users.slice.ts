import { createSlice, isPending } from "@reduxjs/toolkit";

import { getUsers, updateUser } from "./users.api";

import type User from "types/user";

interface UserState {
  users: User[];
  isLoading: boolean;
  error: {
    message: string;
  } | null;
  notification: {
    type: "success" | "error";
    value: string;
  } | null;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
  notification: null,
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getUsers
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message:
            action.error.message ||
            "Error occurred while trying to fetch all users",
        };
      })
      // updateUser
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.notification = {
          type: "error",
          value: "Updating user failed",
        };
        state.error = {
          message:
            action.error.message ||
            "Error occurred while trying to update user",
        };
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notification = {
          type: "success",
          value: "User updated successfully",
        };

        const updated = action.payload;
        const index = state.users.findIndex((u) => u.id === updated.id);

        state.users[index] = updated;
      })
      // Pending matcher
      .addMatcher(isPending(getUsers, updateUser), (state, action) => {
        state.isLoading = true;
      });
  },
});

export default usersSlice;
