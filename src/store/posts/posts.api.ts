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

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post: Post) => {
    const { data } = await axios.put<Post>(`posts/${post.id}`, post);

    return data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId: number) => {
    const { data } = await axios.delete(`posts/${postId}`);

    return data;
  }
);
