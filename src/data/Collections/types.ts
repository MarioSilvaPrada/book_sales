import { BookType } from 'data/Books/types';

export type CollectionType = {
  id: number;
  title: string;
  books_collection: BookType[];
};
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
