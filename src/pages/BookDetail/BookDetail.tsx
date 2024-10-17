import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Box, ReservationForm, ScreenTemplate } from "components";
import * as S from "./BookDetail.style";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useGetBookByIdQuery } from "data/Books/booksApi";
import { useGetCollectionByIdQuery } from "data/Collections/collectionsApi";
import { Helmet } from "react-helmet";

export const BookDetail = () => {
  const navigate = useNavigate();
  const { key: keyLocation } = useLocation();
  const { id = "" } = useParams();

  const { data: bookDetail, isLoading } = useGetBookByIdQuery({ id });
  const hasCollection = Boolean(bookDetail?.collection?.id);
  const { data: collection, isLoading: loadingCollection } =
    useGetCollectionByIdQuery(
      {
        id: String(bookDetail?.collection?.id),
      },
      { skip: !hasCollection }
    );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookDetail]);

  const onGoBack = () => {
    if (keyLocation === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const infoDetails = [
    {
      description: "Autor",
      text: bookDetail?.author,
    },
    {
      description: "Editora",
      text: bookDetail?.publisher,
    },
    {
      description: "Ano de publicação",
      text: bookDetail?.year,
    },
    {
      description: "Páginas",
      text: bookDetail?.pages,
    },
    {
      description: "Coleção",
      text: bookDetail?.collection?.title,
    },
    {
      description: "Categoria",
      text: bookDetail?.category,
    },
    {
      description: "Preço",
      text: `${bookDetail?.price}€`,
    },
  ];

  const otherBooks =
    collection &&
    collection?.books_collection.length > 0 &&
    collection.books_collection.filter(
      (book) => !book.is_sold && book.id !== bookDetail?.id
    );

  return (
    <>
      <Helmet>
        <title>{bookDetail?.title}</title>
        <meta
          name="description"
          content={`${bookDetail?.title} - ${bookDetail?.author}`}
        />
        <meta
          name="keywords"
          content={`${bookDetail?.title}, ${bookDetail?.author}`}
        />
      </Helmet>
      <ScreenTemplate
        isLoadingBooks={isLoading || loadingCollection}
        paginationDisabled
      >
        {bookDetail ? (
          <>
            <S.TopRow>
              <S.Button onClick={onGoBack}>
                <IoMdArrowRoundBack color="white" size="1.5rem" />
              </S.Button>
              <S.BookTitle>{bookDetail.title.toUpperCase()}</S.BookTitle>
              <S.Placeholder />
            </S.TopRow>

            {bookDetail.is_sold && <S.SoldText>Vendido</S.SoldText>}
            <S.Container>
              <S.ImageContainer>
                <S.ImageWrapper>
                  <Box flexDirection="column">
                    <S.CoverWrapper>
                      <S.StyledImg
                        src={bookDetail.cover}
                        alt="capa"
                        effect="blur"
                      />
                      <h3>Capa</h3>
                    </S.CoverWrapper>
                  </Box>

                  {bookDetail.back && (
                    <Box flexDirection="column">
                      <S.StyledImg
                        src={bookDetail.back}
                        alt="contra-capa"
                        effect="blur"
                      />
                      <h3>Contracapa</h3>
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
                  return null;
                })}

                {!bookDetail.is_sold && (
                  <S.ReservationContainer>
                    <ReservationForm bookId={bookDetail.id} />
                  </S.ReservationContainer>
                )}
              </S.InfoWrapper>
            </S.Container>
            {otherBooks && otherBooks.length > 0 && (
              <>
                <S.OthersTitle>Outros livros da mesma coleção:</S.OthersTitle>
                <S.OthersWrapper>
                  {otherBooks.map((book) => (
                    <S.OthersBookContainer key={book.id}>
                      <S.BookLink to={`/book/${book.id}`}>
                        <S.SmallImage src={book.cover} />
                        <S.Paragraph>{book.title}</S.Paragraph>
                      </S.BookLink>
                    </S.OthersBookContainer>
                  ))}
                </S.OthersWrapper>
              </>
            )}
          </>
        ) : (
          <div>
            <h1>Livro não encontrado</h1>
          </div>
        )}
      </ScreenTemplate>
    </>
  );
};
