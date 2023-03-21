import React from "react";
import { InputStyle, TextAreaStyle, Wrapper } from "./InputStyle";
import Typography from "../Typography";

export const Input = ({ size, state, desc, ...props }) => (
  <Wrapper state={state}>
    <InputStyle state={state} size={size} {...props} />
    <Typography variant="small1">{desc}</Typography>
  </Wrapper>
);

export const TextArea = ({ state, size, children, ...props }) => (
  <TextAreaStyle state={state} size={size} {...props}>
    {children}
  </TextAreaStyle>
);
