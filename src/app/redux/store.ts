// import { configureStore } from "@reduxjs/toolkit";
// import uiReducer from "./slice/uiSlice";

// export const store = configureStore({
//   reducer: {
//     ui: uiReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice/uiSlice";
import blogReducer from "./slice/blog.slice";
import loaderReducer from "./slice/loader.slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    blog: blogReducer,
    loader: loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;