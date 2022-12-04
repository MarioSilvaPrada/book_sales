import styled from "styled-components";

export const BackgroundColor = styled.div`
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100rem;
  width: 100%;
`;

export const Wrapper = styled.div`
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
