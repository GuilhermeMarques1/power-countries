import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  background-color: var(--background);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 6rem 8rem;
  margin-bottom: 4rem;

  img {
    max-width: 500px;
    max-height: 500px;
  }

  div {    
    h1 {
      margin-bottom: 2rem;
      color: var(--text-title);
      max-width: 500px;
    }

    ul {
      list-style: none;
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--text-body);

      li + li {
       margin-top: 0.2rem;
      }
    }
  }
`;
