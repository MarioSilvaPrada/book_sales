import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
  position: relative;
`;
