import React, { useEffect } from 'react';
import { setBooks } from 'data/Books/actions';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';
import { BookCard, Grid, Pagination, SearchBar } from 'components';
export const Home = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const { books, count, loading } = useSelector(booksSelector);

  useEffect(() => {
    if (page) {
      dispatch(setBooks(page));
      return;
    }
    dispatch(setBooks());
  }, [page, dispatch]);
  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <>
      <SearchBar />
      <Pagination
        total={count}
        numPerFetch={40}
        currentPage={Number(page) || 1}
      />
      <Grid>
        {books.map((book) => (
          <BookCard key={book.id} book={book} mb={100} />
        ))}
      </Grid>
      <Pagination
        total={count}
        numPerFetch={40}
        currentPage={Number(page) || 1}
      />
    </>
  );
};
