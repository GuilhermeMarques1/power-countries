import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  left: 2rem;
  top: 10rem;

  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  background: none;
  border: none;
  padding: 0.6rem 1rem;
  border: 1px solid var(--yellow);
  color: var(--text-title);
  font-size: 18px;
  border-radius: 12px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
