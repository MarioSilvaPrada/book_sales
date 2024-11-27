import styled from "styled-components";
import { Box } from "components";

export const Container = styled(Box)`
  width: 100%;
  margin: 0 5rem;
`;

export const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  align-items: center;
  display: flex;
`;

export const SearchInput = styled.input`
  width: auto;
  padding: 0.7rem 0.8rem 0.7rem 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.background.dark};
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Submit = styled.input`
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  bottom: 0.2rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.dark};
  color: white;
  cursor: pointer;
  padding: 0 0.5rem;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0.5rem;
  margin-top: 0.2rem;
`;
