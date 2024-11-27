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
  synopsis?: string;
};

export type BooksState = {
  count: number;
  isFilterOpen: boolean;
  filterCategories: number[];
  filterCollections: number[];
};

export type BooksResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BookType[];
};
