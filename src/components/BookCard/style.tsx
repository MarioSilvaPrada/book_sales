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
