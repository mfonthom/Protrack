import styled from "styled-components";
import { Err, Grey, Sec, Success } from "../../../../helpers/Colors";

export const DashRecentWrapper = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const ProgressWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 20px 20px rgba(237, 237, 237, 0.7);
  border-radius: 30px;
  > div {
    display: flex;
    column-gap: 40px;
    .CircularProgressbar-path {
      stroke: ${(props) =>
        props.style === "progress"
          ? Sec[600]
          : props.style === "completed"
          ? Success[600]
          : Grey[700]};
    }
    .CircularProgressbar-trail {
      stroke: ${Grey[50]};
    }
    .CircularProgressbar-text {
      font-weight: 400;
      fill: ${Grey[800]};
      stroke: none;
    }
    @media (max-width: 768px) {
      display: flex;
      column-gap: 20px;
      width: 100%;
      justify-content: start;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const ProgressRate = styled.div`
  color: ${(props) =>
    props.type === "progress"
      ? Sec[600]
      : props.type === "completed"
      ? Success[600]
      : Grey[700]};
  font-weight: 700;
  font-size: 12px;
`;
