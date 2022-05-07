import React, { useEffect } from 'react';
import { setBooks } from 'data/Books/actions';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';
import { BookCard, Grid, ScreenTemplate } from 'components';
import {
  getBooksFromCollection,
  getCollections,
} from 'data/Collections/actions';
import { collectionSelector } from 'data/Collections/slice';
export const Home = () => {
  const dispatch = useAppDispatch();
  const { page, collectionId } = useParams();
  const { books, loading } = useSelector(booksSelector);
  const { collectionsFilter, loading: loadingCollections } =
    useSelector(collectionSelector);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  useEffect(() => {
    if (page) {
      dispatch(setBooks(page));
      return;
    }
    dispatch(setBooks());
  }, [page, dispatch]);

  useEffect(() => {
    if (collectionId) {
      dispatch(getBooksFromCollection(collectionId));
    }
  }, [collectionId, dispatch]);

  return (
    <ScreenTemplate
      isLoading={loading || loadingCollections}
      currentPage={page}
      currentCollectionId={collectionId}
      hasPagination
      searchActive
      addFilter
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
