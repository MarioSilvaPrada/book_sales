import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../';
import { BooksState, BookType, ResponseType } from './types';
export const initialState: BooksState = {
  loading: false,
  hasErrors: false,
  errorMessage: '',
  books: [],
  nextLink: null,
  previousLink: null,
  count: 0,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    getBooksSuccess: (state, action: PayloadAction<ResponseType>) => {
      state.books = action.payload.results;
      state.nextLink = action.payload.next;
      state.previousLink = action.payload.previous;
      state.count = action.payload.count;
      state.loading = false;
      state.hasErrors = false;
      state.errorMessage = '';
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

export const { isLoading, getBooksSuccess, setErrorMessage, resetErrors } =
  booksSlice.actions;

export const booksSelector = (state: RootState) => state.books;

const bookReducer = booksSlice.reducer;
export default bookReducer;
