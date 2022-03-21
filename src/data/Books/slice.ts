import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../';
import { BooksState, BookType } from './types';
export const initialState: BooksState = {
  loading: false,
  hasErrors: false,
  errorMessage: '',
  books: [],
  nextLink: null,
  previousLink: null,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    getBooksSuccess: (state, action: PayloadAction<BookType[]>) => {
      state.books = action.payload;
      state.loading = false;
      state.hasErrors = false;
      state.errorMessage = '';
    },
    setLinks: (
      state,
      action: PayloadAction<{ next: string; previous: string }>
    ) => {
      state.nextLink = action.payload.next;
      state.previousLink = action.payload.previous;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.hasErrors = true;
      state.errorMessage = action.payload;
    },
    resetErrors: (state) => {
      state.hasErrors = false;
      state.errorMessage = '';
    },
  },
});

export const {
  isLoading,
  getBooksSuccess,
  setLinks,
  setErrorMessage,
  resetErrors,
} = booksSlice.actions;

export const booksSelector = (state: RootState) => state.books;

const bookReducer = booksSlice.reducer;
export default bookReducer;
