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
        <LazyLoadImage
          alt='capa'
          height={426}
          width={320}
          src={book.cover} // use normal <img> attributes as props
        />
        {/* <S.Cover src={book.cover} /> */}
        <p>{book.title}</p>
      </S.Container>
    </S.StyledLink>
  );
};
