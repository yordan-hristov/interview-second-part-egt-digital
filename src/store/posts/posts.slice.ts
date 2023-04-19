import { createSlice } from "@reduxjs/toolkit";

import { getPosts, updatePost } from "./posts.api";

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
      }))

      .addCase(updatePost.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(updatePost.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(updatePost.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error:
          action.error.message ||
          "Error occurred while trying to update the post",
      }));
  },
});

export default postsSlice;
