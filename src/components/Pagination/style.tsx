import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from 'components';
export const Container = styled(Box)``;
export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  color: black;
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
  color: ${({ selected }) => (selected ? 'red' : 'black')};
`;
