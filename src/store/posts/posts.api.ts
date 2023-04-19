import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "utils/axios";

import type Post from "types/post";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (uid: string) => {
    const { data } = await axios.get<Post[]>(`users/${uid}/posts`);

    return data;
  }
);
