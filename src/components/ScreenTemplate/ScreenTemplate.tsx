import { FC } from "react";
import * as S from "./ScreenTemplate.style";
import { SearchBar, Pagination, Spinner, CollectionFilter } from "components";
import { useSelector } from "react-redux";
import { booksSelector } from "data/Books/slice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGetCollectionsQuery } from "data/Collections/collectionsApi";

type IProps = {
  children: React.ReactNode;
  isLoadingBooks?: boolean;
  isLoadingCollections?: boolean;
  searchActive?: boolean;
  currentPage?: string;
  currentCollectionId?: string;
  addFilter?: boolean;
  paginationDisabled?: boolean;
  searchField?: string;
  collectionId?: string;
};
export const ScreenTemplate: FC<IProps> = ({
  children,
  isLoadingBooks,
  searchActive,
  currentPage = 1,
  currentCollectionId,
  addFilter,
  paginationDisabled,
  collectionId,
  searchField,
}) => {
  const { count } = useSelector(booksSelector);

  return (
    <S.BackgroundColor>
      <S.Background>
        <TopBar>
          {searchActive && <SearchBar />}
          {(!!collectionId || !!searchField) && (
            <RemoveFilterBtn to="/">Remover filtro</RemoveFilterBtn>
          )}
        </TopBar>

        {addFilter && (
          <CollectionFilterComponent
            currentCollectionId={currentCollectionId}
          />
        )}
        {!paginationDisabled && (
          <Pagination
            total={count}
            numPerFetch={40}
            currentPage={Number(currentPage) || 1}
          />
        )}
        <S.Wrapper>
          {!isLoadingBooks ? (
            children
          ) : (
            <S.SpinnerWrapper>
              <Spinner />
            </S.SpinnerWrapper>
          )}
        </S.Wrapper>
        {!paginationDisabled && (
          <Pagination
            total={count}
            numPerFetch={40}
            currentPage={Number(currentPage) || 1}
          />
        )}
      </S.Background>
    </S.BackgroundColor>
  );
};

type CollectionFilterProps = {
  currentCollectionId?: string;
};

const CollectionFilterComponent = ({
  currentCollectionId,
}: CollectionFilterProps) => {
  const { data, isLoading } = useGetCollectionsQuery();
  if (isLoading) {
    return <Spinner />;
  }
  if (!data) return <h2>Sem filtros disponíveis</h2>;
  return (
    <CollectionFilter
      currentCollectionId={currentCollectionId}
      collectionResponse={data}
    />
  );
};

const RemoveFilterBtn = styled(Link)`
  text-decoration: none;
  background: ${({ theme }) => theme.colors.third};
  border: none;
  padding: 0.4rem;
  border-radius: 0.5rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 880px) {
    margin-top: 1rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
