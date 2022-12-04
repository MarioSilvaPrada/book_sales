import React, { useEffect } from "react";
import { setBooks } from "data/Books/actions";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { booksSelector } from "data/Books/slice";
import { BookCard, Grid, ScreenTemplate } from "components";
import {
  getBooksFromCollection,
  getCollections,
} from "data/Collections/actions";
import { collectionSelector } from "data/Collections/slice";
export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { books, loading } = useSelector(booksSelector);
  const { collectionsFilter, loading: loadingCollections } =
    useSelector(collectionSelector);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);
  const searchField = searchParams.get("search") || undefined;
  const page = searchParams.get("page") || undefined;
  const collectionId = searchParams.get("collectionId") || undefined;

  useEffect(() => {
    if (searchField) {
      dispatch(setBooks(undefined, searchField));
    }
    if (page) {
      dispatch(setBooks(page));
      window.scrollTo(0, 0);
      return;
    }

    if (collectionId) {
      dispatch(getBooksFromCollection(collectionId));
    }

    if (!page && !searchField) {
      dispatch(setBooks());
    }
  }, [dispatch, searchParams, collectionId, page, searchField]);

  return (
    <ScreenTemplate
      isLoading={loading || loadingCollections}
      currentPage={page}
      currentCollectionId={collectionId}
      searchActive
      addFilter
      searchField={searchField}
      collectionId={collectionId}
    >
      <Grid>
        {collectionId
          ? collectionsFilter[collectionId]?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          : books.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </ScreenTemplate>
  );
};
