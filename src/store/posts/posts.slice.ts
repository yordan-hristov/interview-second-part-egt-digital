import { createSlice } from "@reduxjs/toolkit";

import { getPosts } from "./posts.api";

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
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getPosts.fulfilled, (state, action) => ({
        ...state,
        posts: action.payload,
        isLoading: false,
      }))
      .addCase(getPosts.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error:
          action.error.message ||
          "Error occurred while trying to fetch posts for current users",
      }));
  },
});

export default postsSlice;
