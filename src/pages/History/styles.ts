import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--background);
`;

export const Content = styled.div`
  margin-top: 3rem;
  min-width: 1120px;
  display: flex;
  margin-bottom: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border-bottom: 1px solid #ddd;
      font-size: 20px;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      font-weight: 400;
      color: var(--text-body);
      border-radius: 0.25rem;
      font-size: 18px;
      font-weight: 400;

      img {
        height: 80px;
        width: 80px;
      }
    }

    tbody {
      tr {
        cursor: pointer;
  
        transition: filter 0.3s;
  
        &:hover {
          background-color: ${lighten(0.3, '#ffbf43')};
        }
      }
    }
  }
`;
