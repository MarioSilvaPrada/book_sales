import React, { FC } from 'react';
import * as S from './Tag.style';

type Props = {
  children: string;
  isSelected?: boolean;
};
export const Tag: FC<Props> = ({ children, isSelected }) => (
  <S.Wrapper isSelected={isSelected}>
    <S.StyledText>{children}</S.StyledText>
  </S.Wrapper>
);
