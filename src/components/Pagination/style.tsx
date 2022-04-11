import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from 'components';

const selectedStyle = css`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`;
export const Container = styled(Box)`
  background: ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
`;
export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  color: black;
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  ${({ selected }) => selected && selectedStyle}
`;
