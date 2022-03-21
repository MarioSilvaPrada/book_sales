import styled from 'styled-components';
import { space, layout, position, flexbox } from 'styled-system';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`;

export const Cover = styled.img`
  width: 20rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
