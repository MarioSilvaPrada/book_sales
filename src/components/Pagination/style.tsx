import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from 'components';

const selectedStyle = css`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`;
export const Container = styled(Box)`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
`;
export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  color: black;
  width: 2rem;
  height: 2rem;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  ${({ selected }) => selected && selectedStyle}
`;

export const StyledNumber = styled.span``;
