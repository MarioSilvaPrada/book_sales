import { FC } from 'react';
import * as S from './ScreenTemplate.style';
import { SearchBar, Pagination, Spinner, CollectionFilter } from 'components';
import { useSelector } from 'react-redux';
import { booksSelector } from 'data/Books/slice';

type IProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  hasPagination?: boolean;
  searchActive?: boolean;
  currentPage?: string;
  currentCollectionId?: string;
  addFilter?: boolean;
};
export const ScreenTemplate: FC<IProps> = ({
  children,
  isLoading,
  searchActive,
  hasPagination,
  currentPage = 1,
  currentCollectionId,
  addFilter,
}) => {
  const { count } = useSelector(booksSelector);

  return (
    <S.Background>
      {searchActive && <SearchBar />}
      {addFilter && (
        <CollectionFilter currentCollectionId={currentCollectionId} />
      )}
      {hasPagination && (
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
      {hasPagination && (
        <Pagination
          total={count}
          numPerFetch={40}
          currentPage={Number(currentPage) || 1}
        />
      )}
    </S.Background>
  );
};
