import { FC } from "react";
import * as S from "./ScreenTemplate.style";
import { SearchBar, Pagination, Spinner, CollectionFilter } from "components";
import { useSelector } from "react-redux";
import { booksSelector } from "data/Books/slice";
import styled from "styled-components";
import { Link } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  searchActive?: boolean;
  currentPage?: string;
  currentCollectionId?: string;
  addFilter?: boolean;
  searchField?: string;
  collectionId?: string;
};
export const ScreenTemplate: FC<IProps> = ({
  children,
  isLoading,
  searchActive,
  currentPage = 1,
  currentCollectionId,
  addFilter,
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
          <CollectionFilter currentCollectionId={currentCollectionId} />
        )}
        {!collectionId && (
          <Pagination
            total={count}
            numPerFetch={40}
            currentPage={Number(currentPage) || 1}
          />
        )}
        <S.Wrapper>
          {!isLoading ? (
            children
          ) : (
            <S.SpinnerWrapper>
              <Spinner />
            </S.SpinnerWrapper>
          )}
        </S.Wrapper>
        {!collectionId && (
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
