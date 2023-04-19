import { createSlice, isPending } from "@reduxjs/toolkit";

import { deletePost, getPosts, updatePost } from "./posts.api";

import type Post from "types/post";

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: {
    message: string;
  } | null;
  notification: {
    type: "error" | "success";
    value: string;
  } | null;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
  notification: null,
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getPosts
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message:
            action.error.message ||
            "Error occurred while trying to fetch posts for current users",
        };
      })
      // updatePost
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notification = {
          type: "success",
          value: "Post updated successfully",
        };

        const updated = action.payload;
        const index = state.posts.findIndex((p) => p.id === updated.id);

        state.posts[index] = updated;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message:
            action.error.message ||
            "Error occurred while trying to update the post",
        };
        state.notification = {
          type: "error",
          value: "Updating post failed",
        };
      })
      // deletePost
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notification = {
          type: "success",
          value: "Post deleted successfully",
        };

        const deletedPostId = action.meta.arg;

        state.posts = state.posts.filter((p) => p.id !== deletedPostId);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message:
            action.error.message ||
            "Error occurred while trying to delete the post",
        };
        state.notification = {
          type: "error",
          value: "Deleting post failed",
        };
      })
      // Pending matcher
      .addMatcher(isPending(getPosts, updatePost, deletePost), (state) => {
        state.isLoading = true;
      });
  },
});

export default postsSlice;
