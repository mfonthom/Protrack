import React from "react";
import { Container } from "../../../helpers/Container";
import {
  FormContent,
  FormWrapper,
  SidePic,
  FormLine,
  SocialIconBg,
  SocialIcon,
} from "./FormStyle";
import Typography from "../../atoms/Typography";
import Teampic from "../../../assets/images/teamoffice.jpg";
import { Input } from "../../atoms/Input";
import { Grey, Primary } from "../../../helpers/Colors";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import { Checkbox, FormControlLabel, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Icon from "../../../assets/icon";

const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/dashboard}`);
  };
  return (
    <>
      <FormWrapper>
        <FormContent>
          <Container>
            <Typography variant="h1" weight={"bold"} color={Grey[800]}>
              Sign In
            </Typography>
            <Typography variant="p1" color={Grey[800]}>
              Get the best out of yourself, your team and organization.
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormLine>
                <div>
                  <InputLabel style={{ float: "left" }}>Email</InputLabel>
                  <Input
                    placeholder="email address"
                    type="email"
                    name="email"
                    // state={
                    //   formik.touched.email && formik.errors.email && "error"
                    // }
                    // desc={
                    //   formik.touched.email && formik.errors.email
                    //     ? formik.errors.email
                    //     : ""
                    // }
                    // value={formik.values.email}
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <InputLabel style={{ float: "left" }}>Password</InputLabel>
                  <Input
                    placeholder="password"
                    type="password"
                    name="password"
                    // state={
                    //   formik.touched.email && formik.errors.email && "error"
                    // }
                    // desc={
                    //   formik.touched.email &&
                    //   formik.errors.email &&
                    //   formik.errors.email
                    // }
                    // value={formik.values.password}
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                  />
                </div>
              </FormLine>
              <Button
                label="Sign In"
                size="large"
                weight="semibold"
                style={{ width: "100%", margin: "25px 0" }}
                type="submit"
              />
            </form>
            <FormControlLabel
              style={{
                float: "left",
                color: `${Grey[500]}`,
              }}
              control={<Checkbox style={{ color: `${Primary[400]}` }} />}
              label="Remember me"
            />
            <Typography variant="small1" style={{ textAlign: "right" }}>
              <Link
                to="/passwordReset"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                }}
              >
                Forgot Password?
              </Link>
            </Typography>

            <Typography variant="p2" style={{ paddingTop: "50px" }}>
              Or sign in with
            </Typography>
            <SocialIcon>
              <SocialIconBg>
                <Icon.Google width={30} />
              </SocialIconBg>
              <SocialIconBg>
                <Icon.Apple width={32} />
              </SocialIconBg>
              <SocialIconBg>
                {" "}
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </SocialIconBg>
            </SocialIcon>
            <Typography variant="p2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                  fontWeight: "700",
                }}
              >
                sign up
              </Link>
            </Typography>
          </Container>
        </FormContent>
        <SidePic style={{ backgroundImage: `url(${Teampic})` }}></SidePic>
      </FormWrapper>
    </>
  );
};

export default Login;
