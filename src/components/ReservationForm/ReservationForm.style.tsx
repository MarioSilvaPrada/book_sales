import styled from 'styled-components';

export const Container = styled.div``;

export const Note = styled.p`
  text-align: left;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.background.dark};
  border: 1px solid ${({ theme }) => theme.colors.background.dark};
  font-weight: bold;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
`;
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

export const TextArea = styled.textarea`
  border: 0.1rem solid ${({ theme }) => theme.colors.background.dark};
  height: 5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
