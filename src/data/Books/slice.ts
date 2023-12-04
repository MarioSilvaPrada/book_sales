import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../";
import { BooksState } from "./types";
export const initialState: BooksState = {
  loading: false,
  hasErrors: false,
  errorMessage: "",
  books: [],
  bookDetail: null,
  nextLink: null,
  previousLink: null,
  count: 0,
};

const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBookCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    resetErrors: (state) => {
      state.hasErrors = false;
      state.errorMessage = "";
    },
  },
});

export const { isLoading, resetErrors, setBookCount } = booksSlice.actions;

export const booksSelector = (state: RootState) => state.books;

const bookReducer = booksSlice.reducer;
export default bookReducer;
