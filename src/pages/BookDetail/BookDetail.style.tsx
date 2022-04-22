import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.background.dark};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const BookTitle = styled.h1`
  @media (max-width: 920px) {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Placeholder = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1510px) {
    flex-direction: column;
  }
`;

export const CoverWrapper = styled.div`
  margin-right: 2rem;
  @media (max-width: 1510px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const StyledImg = styled(LazyLoadImage)`
  width: 21rem;
  border-radius: 0.5rem;

  @media (max-width: 490px) {
    width: 100%;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StyledText = styled.p`
  margin-left: 0.5rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  margin-left: 2rem;
  width: 50%;

  @media (max-width: 920px) {
    margin-left: 0;
    width: 100%;
    margin-top: 2rem;
  }
`;

export const DetailsTitle = styled.h2`
  text-align: left;
  margin-bottom: 1rem;
`;

export const ReservationContainer = styled.div`
  margin-top: 2rem;
`;
