import React, { useEffect } from 'react';
import { setBooks } from 'data/Books/actions';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';
import { BookCard, Grid } from 'components';
export const Home = () => {
  const dispatch = useAppDispatch();
  const { books, loading } = useSelector(booksSelector);

  useEffect(() => {
    // @ts-ignore
    dispatch(setBooks());
  }, [dispatch]);
  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <Grid>
      {books.map((book) => (
        <BookCard key={book.id} book={book} mb={100} />
      ))}
    </Grid>
  );
};
