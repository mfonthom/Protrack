import styled from "styled-components";
import { InputStyle } from "../../atoms/Input/InputStyle";
import { InputLabel } from "@mui/material";
import { Grey, Primary } from "../../../helpers/Colors";

export const FormWrapper = styled.div`
  display: flex;
`;
export const FormContent = styled.div`
  flex: 70%;
  text-align: center;
  margin-top: 40px;
`;
export const FormLine = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  > div {
    color: ${Grey[400]};
    flex-direction: column;
    width: 50%;
  }
  ${InputStyle} {
    width: 100%;
    height: 60px;
  }
  .forgotPass {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    > div {
      width: 100%;
    }
    ${InputStyle} {
      width: 100%;
    }
    .forgotPass {
      width: 100%;
    }
  }
`;
export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;
export const SocialIconBg = styled.div`
  display: block;
  margin: 7px;
  border-radius: 50%;
  background-color: ${Primary[50]};
  width: 70px;
  height: 70px;
  color: ${Primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidePic = styled.div`
  flex: 30%;
  background-size: cover !important;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
