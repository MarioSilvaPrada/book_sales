import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Box, ReservationForm, ScreenTemplate } from 'components';
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

  const infoDetails = [
    {
      description: 'Autor',
      text: bookDetail?.author,
    },
    {
      description: 'Editora',
      text: bookDetail?.publisher,
    },
    {
      description: 'Ano de publicação',
      text: bookDetail?.year,
    },
    {
      description: 'Coleção',
      text: bookDetail?.collection,
    },
    {
      description: 'Preço',
      text: `${bookDetail?.price}€`,
    },
  ];

  return (
    <ScreenTemplate isLoading={loading}>
      {bookDetail ? (
        <>
          <S.TopRow>
            <S.Button onClick={onGoBack}>
              <IoMdArrowRoundBack color='white' size='1.5rem' />
            </S.Button>
            <h1>{bookDetail.title.toUpperCase()}</h1>
            <S.Placeholder />
          </S.TopRow>

          <S.Container>
            <S.ImageContainer>
              <S.ImageWrapper>
                <Box flexDirection='column'>
                  <S.CoverWrapper>
                    <S.StyledImg src={bookDetail.cover} alt='capa' />
                    <h5>Capa</h5>
                  </S.CoverWrapper>
                </Box>

                {bookDetail.back && (
                  <Box flexDirection='column'>
                    <S.StyledImg src={bookDetail.back} alt='contra-capa' />
                    <h5>Contracapa</h5>
                  </Box>
                )}
              </S.ImageWrapper>
            </S.ImageContainer>
            <S.InfoWrapper>
              <S.DetailsTitle>Detalhes do livro:</S.DetailsTitle>
              {infoDetails.map(({ text, description }) => {
                if (!!text) {
                  return (
                    <S.InfoRow key={description}>
                      <h4>{description}: </h4>
                      <S.StyledText>{text}</S.StyledText>
                    </S.InfoRow>
                  );
                }
              })}

              <S.ReservationContainer>
                <ReservationForm bookId={bookDetail.id} />
              </S.ReservationContainer>
            </S.InfoWrapper>
          </S.Container>
        </>
      ) : (
        <div>
          <h1>Livro não encontrado</h1>
        </div>
      )}
    </ScreenTemplate>
  );
};
