import styled from "styled-components";
import { Err, Primary, Success, Sec } from "../../../../helpers/Colors";

export const TaskDisplay = styled.div`
  box-sizing: border-box;
  background: ${Primary[500]};
  width: 100%;
  color: #fff;
  padding: 15px;
  border-radius: 30px;
  box-shadow: 0px 10px 15px rgba(88, 160, 254, 0.25);
  display: block;
  align-items: center;
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    .IconHeader {
      display: flex;
      column-gap: 40px;
    }
    .clipIcon {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const TaskBoard = styled.div`
  display: flex;
  column-gap: 40px;
  row-gap: 10px;
  > div {
    display: flex;
    align-items: center;
  }
  @media screen {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
export const Complete = styled.div`
  background: ${Success[600]};
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  height: 20px;
  width: 20px;
  padding: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UnComplete = styled.div`
  background: ${Err[500]};
  font-size: 10px;
  font-weight: 600;
  border-radius: 10px;
  height: 20px;
  width: 20px;
  padding: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InProgress = styled.div`
  background: ${Sec[600]};
  font-size: 10px;
  font-weight: 600;
  border-radius: 10px;
  height: 20px;
  width: 20px;
  padding: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TotalWrapper = styled.div`
  text-align: center;
`;

export const TotalTask = styled.div`
  color: ${Primary[500]};
  background: #fff;
  border-radius: 20px;
  padding: 20px 30px;
  > div {
    font-size: 28px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
