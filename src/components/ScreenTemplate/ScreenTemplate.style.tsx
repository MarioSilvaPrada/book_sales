import styled from 'styled-components';

export const Background = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto;
  border: 0.2rem solid ${({ theme }) => theme.colors.background.light};
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2rem;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
