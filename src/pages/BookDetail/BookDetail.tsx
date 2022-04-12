import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ReservationForm, ScreenTemplate } from 'components';
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

  return (
    <ScreenTemplate isLoading={loading}>
      {bookDetail ? (
        <>
          <S.TopRow>
            <S.Button onClick={onGoBack}>
              <IoMdArrowRoundBack color='white' size='1.5rem' />
            </S.Button>
            <h1>{bookDetail.title}</h1>
            <S.Placeholder />
          </S.TopRow>
          <p>{bookDetail.author}</p>
          <p>Língua: {bookDetail.language}</p>
          <S.StyledImg
            src={bookDetail.cover}
            alt='capa'
            style={{ marginRight: '2rem' }}
          />
          {bookDetail.back && (
            <S.StyledImg src={bookDetail.back} alt='contra-capa' />
          )}
          <p>Editora: {bookDetail.publisher}</p>
          <p>Número de páginas: {bookDetail.pages}</p>
          {bookDetail.year && <p>Ano: {bookDetail.year}</p>}
          {bookDetail.collection && <p>Coleção: {bookDetail.collection}</p>}
          <p>Preço: {bookDetail.price}€</p>
          <ReservationForm bookId={bookDetail.id} />
        </>
      ) : (
        <div>
          <h1>No data</h1>
        </div>
      )}
    </ScreenTemplate>
  );
};
