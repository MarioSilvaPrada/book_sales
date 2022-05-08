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
`;

export const StyledLink = styled(Link)<{ selected?: boolean }>`
  text-decoration: none;
  color: black;
  transition: 0.6s;
`;

export const RemoveFilterBtn = styled(Link)`
  text-decoration: none;
  position: absolute;
  left: 0;
  background: ${({ theme }) => theme.colors.third};
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
  position: relative;
`;
