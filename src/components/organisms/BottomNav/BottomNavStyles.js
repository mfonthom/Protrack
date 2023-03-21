import styled from "styled-components";
import { Grey, Primary } from "../../../helpers/Colors";

export const BottomNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${Grey[800]};

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }
`;

export const BNMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  font-size: 12px;
  column-gap: 10px;
  flex-wrap: wrap;
  > a {
    text-decoration: none;
  }
`;

export const BNIconWrap = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: center;
`;
export const BNIconBg = styled.div`
  display: block;
  background: ${Primary[50]};
  border-radius: 50px;
  width: 40px;
  height: 40px;
  color: ${Primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
