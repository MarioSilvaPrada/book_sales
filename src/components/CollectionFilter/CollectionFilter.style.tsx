import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto;
`;
export const Container = styled.div`
  margin-top: 1rem;
`;

export const FilterText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const StyledLink = styled(Link)<{ selected?: boolean }>`
  text-decoration: none;
  color: black;
  transition: 0.6s;
`;
