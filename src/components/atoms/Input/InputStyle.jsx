import styled from "styled-components";
import { Primary, Err, Grey, Info } from "./../../../helpers/Colors";

export const InputStyle = styled.input`
  width: 100%;
  height: ${(props) => (props.size === "md" ? "55px" : "40px")};
  border: ${(props) =>
    props.state === "error" ? `1px solid ${Err[500]}` : "0px"};
  border-radius: 50px;
  padding: 20px;
  box-sizing: border-box;
  background: ${Grey[50]};
  color: ${Grey[400]};
  font-size: 14px;
  ::placeholder {
    color: ${Grey[400]};
  }
  &:focus {
    outline: 1px solid ${Info[400]};
  }
`;

export const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 200px;
  border: ${(props) =>
    props.state === "error" ? `1px solid ${Err[500]}` : "0px"};
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  background: ${Grey[50]};
  color: ${Grey[400]};
  font-size: 14px;
  resize: none;
  ::placeholder {
    color: ${Grey[400]};
  }
  &:focus {
    outline: 1px solid ${Primary[300]};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 15px;
  color: ${(props) =>
    props.state === "error" ? `${Err[500]}` : `${Grey[400]}`};
  text-align: left;
`;
