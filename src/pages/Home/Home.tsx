import React, { useEffect } from 'react';
import { setBooks } from 'data/Books/actions';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';
import { BookCard, Grid, ScreenTemplate } from 'components';
export const Home = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const { books, loading } = useSelector(booksSelector);

  useEffect(() => {
    if (page) {
      dispatch(setBooks(page));
      return;
    }
    dispatch(setBooks());
  }, [page, dispatch]);

  console.log({ books });
  return (
    <ScreenTemplate
      isLoading={loading}
      currentPage={page}
      hasPagination
      searchActive
    >
      <Grid>
        {books ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <h1>Nothing</h1>
        )}
      </Grid>
    </ScreenTemplate>
  );
};
