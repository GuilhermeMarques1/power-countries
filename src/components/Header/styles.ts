import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: var(--white);

  span {
    color: var(--yellow);
  }
`;

export const Logo = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const History = styled.div`
  width: 2px;
  padding: 0.1rem 0.8rem;
  margin-left: 1rem;
  border-left: 1px solid var(--white);
  
  button {
    background: none;
    border: none;
    color: var(--white);
    font-weight: 600;
    font-size: 1.2rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
