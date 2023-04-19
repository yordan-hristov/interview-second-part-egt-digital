import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./users";
import postsSlice from "./posts";

const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [postsSlice.name]: postsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export default store;
