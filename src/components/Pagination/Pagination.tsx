import { FC, useEffect, useState } from 'react';
import * as S from './style';

type IProps = {
  total: number;
  numPerFetch: number;
  currentPage: number;
};
export const Pagination: FC<IProps> = ({ total, numPerFetch, currentPage }) => {
  const paginationNumber = Math.ceil(total / numPerFetch);
  const [pageNumber, setPageNumbers] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < paginationNumber; i++) {
      const num = i + 1;
      newArr.push(
        <S.StyledLink key={i} to={`/${num}`} selected={num === currentPage}>
          {num}
        </S.StyledLink>
      );
    }
    setPageNumbers(newArr);
  }, [paginationNumber, currentPage]);
  return (
    <S.Container
      flexDirection='row'
      alignItems='center'
      width='auto'
      p={3}
      mx={50}
      mt={3}
    >
      {pageNumber}
    </S.Container>
  );
};
