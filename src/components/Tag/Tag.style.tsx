import styled, { css } from 'styled-components';

const selectedStyle = css`
  color: ${({ theme }) => theme.colors.third};
  transform: scale(1.02);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Wrapper = styled.div<{ isSelected?: boolean }>`
  background: white;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  transition: 0.6s;
  ${({ isSelected }) => isSelected && selectedStyle}

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const StyledText = styled.p`
  font-size: 0.8rem;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
