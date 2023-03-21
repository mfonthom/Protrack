import styled from "styled-components";
import { Primary } from "../../../helpers/Colors";

export const TopnavWrapper = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Noti = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;

export const NotificationNo = styled.div`
  position: absolute;
  border-radius: 100%;
  background: ${Primary[500]};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 4px;
  top: 60px;
  @media screen {
    top: 40px;
  }
`;

export const DpWrapper = styled.div`
  display: flex;
  column-gap: 15px;
`;

export const Dp = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background: ${Primary[300]};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const MobileTopNavWrapper = styled.div`
  display: none;
  align-items: baseline;
  background: #fff;
  padding: 20px 0;
  box-shadow: 0px 10px 10px rgba(237, 237, 237, 0.5);
  margin-bottom: 20px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      display: flex;
      column-gap: 20px;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
