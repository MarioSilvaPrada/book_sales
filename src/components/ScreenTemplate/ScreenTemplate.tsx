import { FC } from "react";
import * as S from "./ScreenTemplate.style";
import { SearchBar, Pagination, Spinner } from "components";
import { useSelector } from "react-redux";
import { booksSelector, setIsFilterOpen } from "data/Books/slice";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { FilterIcon } from "assets/icons/filter";
import { useAppDispatch } from "store";
import { Filters } from "components/Filters";
import logo from "../../assets/images/logo192.png";

type IProps = {
  children: React.ReactNode;
  isLoadingBooks?: boolean;
  searchActive?: boolean;
  currentPage?: string;
  paginationDisabled?: boolean;
};
export const ScreenTemplate: FC<IProps> = ({
  children,
  isLoadingBooks,
  searchActive,
  currentPage = 1,
  paginationDisabled,
}) => {
  const dispatch = useAppDispatch();
  const { count, isFilterOpen } = useSelector(booksSelector);
  const [searchParams] = useSearchParams();

  const hasParams = searchParams.toString().length > 0;

  const onFilterPress = () => {
    dispatch(setIsFilterOpen(!isFilterOpen));
  };

  return (
    <S.BackgroundColor>
      <Filters />
      <S.Background>
        {searchActive && (
          <TopBar>
            <LogoWrapper>
              <StyledImg src={logo} alt="logo" />
              <p>LivrosPT</p>
            </LogoWrapper>
            <SearchBar />
            {hasParams && (
              <RemoveFilterBtn to="/">Remover filtro</RemoveFilterBtn>
            )}
            <FilterWrapper onClick={onFilterPress}>
              <FilterIcon />
              Filtros
            </FilterWrapper>
          </TopBar>
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

const LogoWrapper = styled.div`
  flex-direction: column;
  font-weight: bold;
  font-size: 0.8rem;

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const StyledImg = styled.img`
  width: 4rem;
  background: white;
  border-radius: 10rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 900px) {
    width: 6rem;
  }
`;

const RemoveFilterBtn = styled(Link)`
  text-decoration: none;
  background: ${({ theme }) => theme.colors.third};
  border: none;
  padding: 0.4rem;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  width: 8rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 880px) {
    margin-top: 1rem;
    font-size: 1.2rem;
    width: 10rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

const FilterWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  @media (max-width: 900px) {
    align-self: flex-end;
  }
`;
