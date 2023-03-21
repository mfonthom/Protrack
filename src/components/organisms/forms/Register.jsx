import React from "react";
import Typography from "../../atoms/Typography";
import {
  FormContent,
  FormLine,
  FormWrapper,
  SocialIconBg,
  SidePic,
  SocialIcon,
} from "./FormStyle";
import Teampic from "../../../assets/images/teamoffice.jpg";
import { Input } from "../../atoms/Input";
import { Grey, Primary } from "../../../helpers/Colors";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { Container } from "../../../helpers/Container";
import { InputLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import Icon from "../../../assets/icon";

const onSubmit = () => {
  console.log("submitted");
};

const Register = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullname: "",
      phoneNo: "",
      email: "",
      password: "",
    },
    // validationSchema: registerSchema,
    onSubmit,
  });
  // console.log(error);
  return (
    <>
      <FormWrapper>
        <FormContent>
          <Container>
            <Typography variant="h1" weight={"bold"} color={Grey[800]}>
              Welcome to Protrack
            </Typography>
            <Typography variant="p1" color={Grey[800]}>
              Get the best out of yourself, your team and organization.
            </Typography>
            <form>
              <FormLine>
                <div>
                  <InputLabel style={{ float: "left" }}>Full Name</InputLabel>
                  <Input
                    placeholder="Jane Doe"
                    id="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <InputLabel style={{ float: "left" }}>
                    Phone Number
                  </InputLabel>
                  <Input
                    placeholder="+2348070987654"
                    id="phoneNo"
                    type="tel"
                    value={values.phoneNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </FormLine>
              <FormLine>
                <div>
                  <InputLabel style={{ float: "left" }}>Email</InputLabel>
                  <Input
                    placeholder="email address"
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <InputLabel style={{ float: "left" }}>Password</InputLabel>
                  <Input
                    placeholder="password"
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </FormLine>
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
              <Button
                type="submit"
                onSubmit={handleSubmit}
                label="Sign Up"
                size="large"
                weight="semibold"
                style={{ width: "100%", margin: "25px 0" }}
              />
            </form>
            <Typography variant="p2">Or sign up with</Typography>
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
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                  fontWeight: "700",
                }}
              >
                sign in
              </Link>
            </Typography>
          </Container>
        </FormContent>
        <SidePic style={{ backgroundImage: `url(${Teampic})` }}></SidePic>
      </FormWrapper>
    </>
  );
};

export default Register;
