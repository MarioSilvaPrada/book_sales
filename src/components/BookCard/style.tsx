import styled from 'styled-components';
import { space, layout, position, flexbox } from 'styled-system';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.div`
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 20rem;

  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const LazyImage = styled(LazyLoadImage)`
  border-radius: 0.5rem;
  width: 100%;
`;

export const BookTitle = styled.p`
  font-weight: bold;
  @media (max-width: 470px) {
    font-size: 1.2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SoldText = styled.p`
  position: absolute;
  top: 40%;
  left: 10%;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  z-index: 2;
  color: #f32424;
  font-weight: bold;
  font-size: 3rem;
  border: 2px solid #f32424;
  transform: rotate(-50deg);
`;

export const BlackLayer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 0.5rem;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
`;
