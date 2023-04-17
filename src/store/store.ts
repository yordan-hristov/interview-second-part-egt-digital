import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./users";

const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export default store;
