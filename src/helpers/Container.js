import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 90%;
`;
export const Row = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Col = styled.div`
  flex: 1;
`;
