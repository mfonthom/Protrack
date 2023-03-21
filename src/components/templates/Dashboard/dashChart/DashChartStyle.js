import styled from "styled-components";
import { Primary } from "../../../../helpers/Colors";

export const ChartWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
  column-gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const ChartCard = styled.div`
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(237, 237, 237, 0.7);
  border-radius: 30px;
  padding: 20px;
  width: 50%;
  column-gap: 20px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .addTask {
    background: ${Primary[50]};
    color: ${Primary[500]};
    border-radius: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DashTaskList = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  inp {
    background-color: ${Primary[100]};
    border-radius: 3;
    width: 16;
    color: #fff;
    height: 16;
  }
`;
