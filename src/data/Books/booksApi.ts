import { api } from "api/api";
import { BookType, BooksResponseType } from "./types";

export const BOOKS_TAG = "Books";
export const BOOK_DETAIL_TAG = "BookDetail";

export const booksApi = api
  .enhanceEndpoints({ addTagTypes: [BOOKS_TAG, BOOK_DETAIL_TAG] })
  .injectEndpoints({
    endpoints: (build) => ({
      getBooks: build.query<
        BooksResponseType,
        {
          page?: string;
          search?: string;
        }
      >({
        query: ({ page, search }) => ({
          method: "GET",
          url: "library/books/",
          params: { page, search },
        }),
        providesTags: [BOOKS_TAG],
      }),
      getBookById: build.query<
        BookType,
        {
          id: string;
        }
      >({
        query: ({ id }) => ({
          method: "GET",
          url: "library/books/" + id,
        }),
        providesTags: [BOOK_DETAIL_TAG],
      }),
      reserveBook: build.mutation<
        void,
        {
          book: number;
          email: string;
          name: string;
          comment?: string;
          phone?: string;
        }
      >({
        query: (args) => ({
          method: "POST",
          url: "library/reservations/",
          body: args,
        }),
      }),
    }),
  });

export const { useGetBooksQuery, useGetBookByIdQuery, useReserveBookMutation } =
  booksApi;
