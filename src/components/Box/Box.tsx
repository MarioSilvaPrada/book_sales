import React, { FC } from 'react';
import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';
import * as S from './style';
interface IProps extends PositionProps, LayoutProps, SpaceProps, FlexboxProps {
  children: React.ReactNode;
}

export const Box: FC<IProps> = ({ children }) => {
  return <S.StyledBox>{children}</S.StyledBox>;
};
