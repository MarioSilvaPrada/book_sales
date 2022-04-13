import React, { FC } from 'react';
import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';
import { BookType } from 'data/Books/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <S.LazyImage alt='capa' src={book.cover} />
        <p>{book.title.toUpperCase()}</p>
      </S.Container>
    </S.StyledLink>
  );
};
