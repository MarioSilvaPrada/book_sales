import React, { FC } from 'react';
import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';
import { BookType } from 'data/Books/types';
import 'react-lazy-load-image-component/src/effects/blur.css';

import * as S from './style';
interface IProps extends PositionProps, LayoutProps, SpaceProps, FlexboxProps {
  book: BookType;
}

export const BookCard: FC<IProps> = ({ book, ...props }) => {
  return (
    <S.StyledLink
      to={{
        pathname: `/book/${book.id}`,
      }}
    >
      <S.Container {...props}>
        <S.LazyImage alt='capa' src={book.cover} effect='blur' />
        <S.BookTitle>{book.title.toUpperCase()}</S.BookTitle>
      </S.Container>
    </S.StyledLink>
  );
};
