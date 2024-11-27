import { BookType } from "data/Books/types";

export type CollectionType<T = BookType[]> = {
  id: number;
  title: string;
  books_collection: T;
};

export type CategoryResponse = {
  id: number;
  title: string;
}[];
export type CollectionResponse = {
  count: number;
  next: number;
  previous: number;
  results: CollectionType[];
};

export type CollectionState = {
  loading: boolean;
  collections: CollectionResponse | null;
  collectionsFilter: CollectionsFilterType;
};

export type CollectionsFilterType = Record<string, BookType[]>;
