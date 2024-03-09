import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 40px;
`;

export const CountryContent = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  width: 20rem;
  padding: 0 0 2rem 0;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);

  img {
    border-radius: 12px 12px 0 0;
    max-height: 20rem;
    max-width: 20rem;
    margin-bottom: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0 1rem 0 1rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.98);
  }
`;

export const Title = styled.p`
  font-weight: 600;
  color: var(--text-title);
  font-size: 24px;
`;

export const Info = styled.p`
  font-weight: 400;
  color: var(--text-body);
  font-size: 18px;
`;
