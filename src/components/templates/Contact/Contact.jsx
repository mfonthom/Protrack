import React from "react";
import { Col, Container, Row } from "../../../helpers/Container";
import Typography from "../../atoms/Typography";
import { AboutHeadings, AboutText } from "../About/AboutStyle";
import { LeftSideImg, RightSideImg } from "../Home/HomeStyle";
import contacthero from "../../../assets/images/team_high_five.jpeg";
import customerservice from "../../../assets/images/24:7_team.jpeg";
import Button from "../../atoms/Button";
import { InputLabel } from "@mui/material";
import { Input, TextArea } from "../../atoms/Input";
import { ContactHolder, ContactInput, ContactTextArea } from "./ContactStyle";

function Contact() {
  return (
    <>
      <div className="contact">
        <AboutHeadings>
          <Typography variant="h1" weight="bold">
            CONTACT US
          </Typography>
          <Typography variant="h5">
            Compare all plans feature by feature
          </Typography>
        </AboutHeadings>
        <section>
          <Container>
            <Row>
              <Col>
                <AboutText>
                  <Typography
                    variant="h3"
                    weight="semi-bold"
                    style={{ textTransform: "upper case" }}
                  >
                    we’re here to help you manage your task
                  </Typography>
                  <Typography variant="p1">
                    We are here to serve you and our dream is to see you dream
                    come true. You are the reason why we are here and we hope to
                    give you reasons not to quit or give up on your dream.
                  </Typography>
                </AboutText>
              </Col>
              <Col>
                <LeftSideImg
                  style={{ backgroundImage: `url(${contacthero})` }}
                ></LeftSideImg>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <AboutHeadings>
              <Typography variant="h1" weight="bold">
                let's talk
              </Typography>
              <Typography variant="h5">
                Have a project in mind that you think we’d be a great fit for
                it? We’d love to know what you’re thinking
              </Typography>
              <ContactHolder>
                <form>
                  <ContactInput>
                    <div>
                      <InputLabel style={{ float: "left" }}>
                        Full Name
                      </InputLabel>
                      <Input
                        placeholder="enter your full name"
                        type="name"
                        id="name"
                      />
                    </div>
                    <div>
                      <InputLabel style={{ float: "left" }}>Email</InputLabel>
                      <Input
                        placeholder="enter your email"
                        type="email"
                        id="email"
                      />
                    </div>
                  </ContactInput>
                  <ContactTextArea>
                    <div>
                      <InputLabel style={{ float: "left" }}>Message</InputLabel>
                      <TextArea
                        placeholder="what do you have to say"
                        type="message"
                        id="message"
                      />
                    </div>
                  </ContactTextArea>
                  <Button
                    label="Send Message"
                    size="large"
                    weight="semibold"
                    // style={{ width: "100%", margin: "25px 0" }}
                    type="submit"
                  />
                </form>
              </ContactHolder>
            </AboutHeadings>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col>
                <RightSideImg
                  style={{ backgroundImage: `url(${customerservice})` }}
                ></RightSideImg>
              </Col>
              <Col>
                <AboutText>
                  <Typography
                    variant="h3"
                    weight="semi-bold"
                    style={{ textTransform: "upper case" }}
                  >
                    24/7 customer support
                  </Typography>
                  <Typography variant="p1">
                    Our customer service reps are always a message or a call
                    away to assist you when you have a situation. Do reach out
                    to us
                  </Typography>
                </AboutText>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Contact;
