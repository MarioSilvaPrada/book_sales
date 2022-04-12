import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.background.dark};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const Placeholder = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 21rem;
  border-radius: 0.5rem;
`;
