import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "utils/axios";

import type User from "types/user";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios.get<User[]>("users");

  return data;
});
