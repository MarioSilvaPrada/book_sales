import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.colors.background.dark};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.dark};
  color: white;
  cursor: pointer;
`;
