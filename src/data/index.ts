import { combineReducers } from "@reduxjs/toolkit";

import bookReducer from "./Books/slice";
import { api } from "api/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  books: bookReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
