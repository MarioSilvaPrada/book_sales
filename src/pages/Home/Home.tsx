import React, { useEffect } from 'react';
import { getBooks } from '../../api';
export const Home = () => {
  const getLibBooks = async () => {
    await getBooks();
  };
  useEffect(() => {
    getLibBooks();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
