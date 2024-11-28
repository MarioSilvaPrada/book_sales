import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { booksSelector, setBookCount } from "data/Books/slice";
import { BookCard, Grid, ScreenTemplate } from "components";
import { useGetBooksQuery } from "data/Books/booksApi";
import styled from "styled-components";
import {
  useGetCategoriesQuery,
  useGetCollectionsQuery,
} from "data/Collections/collectionsApi";
export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const { count } = useSelector(booksSelector);

  const searchField = searchParams.get("search") || undefined;
  const page = searchParams.get("page") || undefined;
  const collection = searchParams.getAll("collection") || "";
  const categories = searchParams.getAll("category") || "";

  const { data: collectionsData } = useGetCollectionsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();

  const { data, isLoading, isFetching } = useGetBooksQuery({
    search: searchField,
    page: page,
    collection: Boolean(collection?.length) ? collection : undefined,
    category: Boolean(categories?.length) ? categories : undefined,
  });

  const { results: books } = data || {};

  const hasParams = searchParams.toString().length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams, page, searchField]);

  useEffect(() => {
    if (data?.count) {
      dispatch(setBookCount(data.count));
    }
  }, [data, count, dispatch]);

  const getParamsBadges = () => {
    const componentArr = [];

    if (searchField) {
      const searchCom = (
        <BadgesContainer>
          <p>Procurar por:</p>
          <Badge>{searchField}</Badge>
        </BadgesContainer>
      );

      componentArr.push(searchCom);
    }
    if (collection.length) {
      const collectionCom = (
        <BadgesContainer>
          <p>Coleções:</p>
          <BadgeWrapper>
            {collectionsData?.results
              ?.filter((col) => collection.includes(String(col.id)))
              .map((col) => (
                <Badge>{col.title}</Badge>
              ))}
          </BadgeWrapper>
        </BadgesContainer>
      );

      componentArr.push(collectionCom);
    }

    if (categories.length) {
      const categoriesCom = (
        <BadgesContainer>
          <p>Categorias:</p>
          <BadgeWrapper>
            {categoriesData
              ?.filter((cat) => categories.includes(String(cat.id)))
              .map((cat) => (
                <Badge>{cat.title}</Badge>
              ))}
          </BadgeWrapper>
        </BadgesContainer>
      );

      componentArr.push(categoriesCom);
    }

    return componentArr;
  };

  return (
    <ScreenTemplate
      isLoadingBooks={isLoading || isFetching}
      currentPage={page}
      searchActive
    >
      {hasParams && getParamsBadges()}
      <Grid>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </ScreenTemplate>
  );
};

const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 1rem;
  font-size: 0.8rem;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
