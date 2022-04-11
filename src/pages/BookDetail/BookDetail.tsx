import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ScreenTemplate } from 'components';
import * as S from './BookDetail.style';
import { getSingleBookDetails } from 'data/Books/actions';
import { useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';

export const BookDetail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { bookDetail, loading } = useSelector(booksSelector);

  useEffect(() => {
    if (id) {
      dispatch(getSingleBookDetails(id));
    }
  }, [id, dispatch]);

  const onGoBack = () => {
    navigate(-1);
    dispatch(getSingleBookDetails(null));
  };

  return bookDetail !== null ? (
    <ScreenTemplate>
      <S.TopRow>
        <S.Button onClick={onGoBack}>
          <IoMdArrowRoundBack color='white' size='1.5rem' />
        </S.Button>
        <h1>{bookDetail.title}</h1>
        <S.Placeholder />
      </S.TopRow>
      <p>{bookDetail.author}</p>
      <p>Língua: {bookDetail.language}</p>
      <img
        src={bookDetail.cover}
        alt='capa'
        style={{ width: '30rem', marginRight: '2rem' }}
      />
      {bookDetail.back && (
        <img
          src={bookDetail.back}
          alt='contra-capa'
          style={{ width: '30rem' }}
        />
      )}
      <p>Editora: {bookDetail.publisher}</p>
      <p>Número de páginas: {bookDetail.pages}</p>
      {bookDetail.year && <p>Ano: {bookDetail.year}</p>}
      {bookDetail.collection && <p>Coleção: {bookDetail.collection}</p>}
      <p>Preço: {bookDetail.price}€</p>
    </ScreenTemplate>
  ) : (
    <div>
      <h1>No information</h1>
    </div>
  );
};
