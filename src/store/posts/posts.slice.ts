import { createSlice } from "@reduxjs/toolkit";

import type Post from "types/post";

const initialState: {
  posts: Post[];
  isLoading: boolean;
  error: null | string;
} = {
  posts: [],
  isLoading: true,
  error: null,
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
});

export default postsSlice;
