import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../';
import { BooksState, BookType, ResponseType } from './types';
export const initialState: BooksState = {
  loading: false,
  hasErrors: false,
  errorMessage: '',
  books: [],
  bookDetail: null,
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
    setBookCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    getBooksSuccess: (state, action: PayloadAction<ResponseType>) => {
      state.books = action.payload.results;
      state.nextLink = action.payload.next;
      state.previousLink = action.payload.previous;
      state.loading = false;
      state.hasErrors = false;
      state.errorMessage = '';
    },
    setBookDetail: (state, action: PayloadAction<BookType | null>) => {
      state.bookDetail = action.payload;
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
  setErrorMessage,
  resetErrors,
  setBookDetail,
  setBookCount,
} = booksSlice.actions;

export const booksSelector = (state: RootState) => state.books;

const bookReducer = booksSlice.reducer;
export default bookReducer;
