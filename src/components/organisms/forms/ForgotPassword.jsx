import React from "react";
import { Container } from "../../../helpers/Container";
import { FormContent, FormWrapper, FormLine } from "./FormStyle";
import Typography from "../../atoms/Typography";
import { Input } from "../../atoms/Input";
import { Grey, Primary } from "../../../helpers/Colors";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { InputLabel } from "@mui/material";

const ForgotPassword = () => {
  return (
    <>
      <FormWrapper>
        <FormContent>
          <Container>
            <Typography variant="h1" weight={"bold"} color={Grey[800]}>
              Forgot Password
            </Typography>
            <Typography variant="p1" color={Grey[800]}>
              Enter the email address you signed up with and we’ll send you your
              password reset instructions.
            </Typography>
            <form>
              <FormLine>
                <div>
                  <InputLabel style={{ float: "left" }}>Email</InputLabel>
                  <Input placeholder="email address" type="email" id="email" />
                </div>
              </FormLine>
              <FormLine>
                <Button
                  className="forgotPass"
                  label="Send Reset Link"
                  size="large"
                  weight="semibold"
                  // style={{ width: "100%" }}
                  type="submit"
                />
              </FormLine>
            </form>
            <Typography variant="p2">
              Remember your Password?{" "}
              <Link
                to="/signin"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                  fontWeight: "700",
                }}
              >
                Sign In
              </Link>
            </Typography>
          </Container>
        </FormContent>
      </FormWrapper>
    </>
  );
};

export default ForgotPassword;
