export type BookType = {
  id: number;
  title: string;
  author: string;
  collection?: string;
  language: string;
  pages: number;
  price: string;
  publisher: string;
  year?: number;
  cover: string;
  back?: string;
  is_sold: boolean;
};

export type BooksState = {
  loading: boolean;
  hasErrors: boolean;
  errorMessage: string;
  books: BookType[];
  nextLink: string | null;
  previousLink: string | null;
};
