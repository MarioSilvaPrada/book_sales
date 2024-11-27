import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../";
import { BooksState } from "./types";
export const initialState: BooksState = {
  count: 0,
  isFilterOpen: false,
  filterCategories: [],
  filterCollections: [],
};

const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },

    setIsFilterOpen: (state, action: PayloadAction<boolean>) => {
      state.isFilterOpen = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        field: "categories" | "collection";
        values: number[];
      }>
    ) => {
      if (action.payload.field === "categories") {
        state.filterCategories = action.payload.values;
      }

      if (action.payload.field === "collection") {
        state.filterCollections = action.payload.values;
      }
    },
  },
});

export const { setBookCount, setIsFilterOpen, setFilter } = booksSlice.actions;

export const booksSelector = (state: RootState) => state.books;

const bookReducer = booksSlice.reducer;
export default bookReducer;
