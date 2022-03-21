import React, { FC } from 'react';
import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
  ShadowProps,
  BorderProps,
  BackgroundProps,
} from 'styled-system';
import * as S from './style';
interface IProps
  extends PositionProps,
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    ShadowProps,
    BorderProps,
    BackgroundProps {
  children: React.ReactNode;
}

export const Box: FC<IProps> = ({ children, ...props }) => {
  return <S.StyledBox {...props}>{children}</S.StyledBox>;
};
