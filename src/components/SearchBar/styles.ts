import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${lighten(0.08, "#00204b")};
  border-radius: 0.8rem;
  padding-right: 1rem;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  border: none;
  width: 20rem;
  background: ${lighten(0.08, "#00204b")};
  color: #d7d7d7;
  
  padding: 0 1.2rem;
  height: 2.1rem;
  border-radius: 0.8rem;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  &:focus {
    outline: none;
  }
`;
