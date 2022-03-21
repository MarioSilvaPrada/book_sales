import React, { FC } from 'react';
import * as S from './style';

type IProps = {
  children: React.ReactNode;
};

export const Grid: FC<IProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
