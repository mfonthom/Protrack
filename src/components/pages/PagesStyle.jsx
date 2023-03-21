import styled from "styled-components";

export const DashboardPage = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: #e8e7e7;
  box-sizing: border-box;
`;
export const DashboardMenu = styled.div`
  flex: 15%;
  @media (max-width: 768px) {
    flex: 0;
  }
`;
export const DashboardContent = styled.div`
  flex: 85%;
  padding: 25px 0;
  @media (max-width: 768px) {
    flex: 100%;
  }
`;
