import React, { FC } from 'react';
import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';
import { BookType } from 'data/Books/types';
import * as S from './style';
interface IProps extends PositionProps, LayoutProps, SpaceProps, FlexboxProps {
  book: BookType;
}

export const BookCard: FC<IProps> = ({ book, ...props }) => {
  return (
    <S.Container {...props}>
      <S.Cover src={book.cover} />
      <p>{book.title}</p>
    </S.Container>
  );
};
