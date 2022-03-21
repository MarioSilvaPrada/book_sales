import React, { useEffect, useState } from 'react';
import { BookType } from 'data/Books/types';
import { useParams } from 'react-router-dom';
import { getSingleBook } from 'api/library';

export const BookDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState<BookType | null>(null);

  const setBookInformation = async (bookId: string) => {
    const res = await getSingleBook(bookId);
    if (res) {
      setInfo(res);
    }
  };

  useEffect(() => {
    if (id) {
      setBookInformation(id);
    }
  }, [id]);

  return info !== null ? (
    <div>
      <h1>{info.title}</h1>
      <p>{info.author}</p>
      <p>Língua: {info.language}</p>
      <img
        src={info.cover}
        alt='capa'
        style={{ width: '12rem', marginRight: '2rem' }}
      />
      <img src={info.back} alt='contra-capa' style={{ width: '12rem' }} />
      <p>Editora: {info.publisher}</p>
      <p>Número de páginas: {info.pages}</p>
      {info.year && <p>Ano: {info.year}</p>}
      {info.collection && <p>Coleção: {info.collection}</p>}
      <p>Preço: {info.price}€</p>
    </div>
  ) : (
    <div>
      <h1>No information</h1>
    </div>
  );
};
