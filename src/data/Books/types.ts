import { CollectionType } from "data/Collections/types";

export type BookType = {
  id: number;
  title: string;
  author: string;
  collection?: CollectionType<number>;
  language: string;
  pages: number;
  price: string;
  publisher: string;
  year?: number;
  cover: string;
  back?: string;
  is_sold: boolean;
  category?: string;
};

export type BooksState = {
  loading: boolean;
  hasErrors: boolean;
  errorMessage: string;
  books: BookType[];
  bookDetail: BookType | null;
  nextLink: string | null;
  previousLink: string | null;
  count: number;
};

export type BooksResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BookType[];
};
