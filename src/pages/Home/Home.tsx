import React, { useEffect } from 'react';
import { setBooks } from 'data/Books/actions';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';
import { BookCard } from 'components';
export const Home = () => {
  const dispatch = useAppDispatch();
  const { books, loading, hasErrors } = useSelector(booksSelector);

  useEffect(() => {
    // @ts-ignore
    dispatch(setBooks());
  }, []);
  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} mb={100} />
      ))}
    </div>
  );
};
