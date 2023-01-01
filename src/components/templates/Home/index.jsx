import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Col, Row } from "../../../helpers/Container";
import {
  HeroText,
  Headings,
  HeroImg,
  RightSideImg,
  LeftSideImg,
  IconBg,
  SpecialBg,
  Sub,
  SubTab,
  SubMenu,
  SubHeader,
  SubList,
  SubButton,
  Testimonial,
  TestimonialPic,
  TestimonialDetails,
  YearPrice,
  HomeText,
} from "./HomeStyle";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { Primary } from "../../../helpers/Colors";
import Icon from "../../../assets/icon";
import Heropic from "../../../assets/images/person.jpg";
import Teampic from "../../../assets/images/teamoffice.jpg";
import Individualpic from "../../../assets/images/indi.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [sub, setSub] = useState("month");

  return (
    <>
      <div className="home">
        <section>
          <Container>
            <Row>
              <Col style={{ marginTop: "13%" }}>
                <HeroText>NEVER FEEL UNPRODUCTIVE AGAIN</HeroText>
                <Typography variant="h6">
                  The Tool for effective time and productivity management{" "}
                </Typography>{" "}
                <br />
                <Button
                  size="large"
                  weight="bold"
                  style={{ marginBottom: "30px" }}
                  label="Create Your Account"
                  onClick={() => navigate("/signup")}
                />
              </Col>
              <Col>
                <HeroImg
                  style={{ backgroundImage: `url(${Heropic})` }}
                ></HeroImg>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <SpecialBg>
            <Container>
              <Row>
                <Col>
                  <RightSideImg
                    style={{ backgroundImage: `url(${Individualpic})` }}
                  ></RightSideImg>
                </Col>
                <Col>
                  <HomeText>
                    <Typography variant="h6" style={{ color: Primary[500] }}>
                      Indiviual Account
                    </Typography>
                    <Typography variant="h2">INDIVIDUAL ACCOUNT</Typography>
                    <Typography variant="p1" style={{ lineHeight: "30.6px" }}>
                      Do you want to track your personal productivity and
                      achiueve your set goals and targets while at it. Then this
                      is the perfect places for you.
                      <br />
                      Checkout our individual plan and see how you can go from 1
                      to all your goals achieve
                    </Typography>{" "}
                    <br />
                    <Button
                      size="large"
                      weight="bold"
                      label="Create Your Account"
                      onClick={() => navigate("/signup")}
                    />
                  </HomeText>
                </Col>
              </Row>
            </Container>
          </SpecialBg>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
                <HomeText>
                  <Typography variant="h6" style={{ color: Primary[500] }}>
                    Organizational Account
                  </Typography>
                  <Typography variant="h2">ORGANIZATIONAL ACCOUNT</Typography>
                  <Typography variant="p1" style={{ lineHeight: "30.6px" }}>
                    Do you want to track your Organization's productivity and
                    achieve your set goals and targets while at it. Do you want
                    to know the track and monitor the progress of your team in
                    real time while taking note of who isn't delivering. Then
                    this is the perfect places for you.
                    <br />
                    Checkout our Organization plan and see how you and your team
                    can go from 1 to all your goals achieve
                  </Typography>{" "}
                  <br />
                  <Button
                    size="large"
                    weight="bold"
                    label="Create Your Account"
                    onClick={() => navigate("/signup")}
                  />
                </HomeText>
              </Col>
              <Col>
                <LeftSideImg
                  style={{ backgroundImage: `url(${Teampic})` }}
                ></LeftSideImg>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="features">
          <SpecialBg>
            <Container>
              <Headings>
                <Typography variant="h1" fontWeight="700">
                  CORE FEATURES
                </Typography>
                <Typography variant="p1">
                  All the neccesary things you need to checkmate personal, team
                  and organisational productivity in one place.
                </Typography>
                <Row style={{ columnGap: "40px" }}>
                  <Col>
                    <IconBg>
                      {" "}
                      <Icon.Gps width={54} />{" "}
                    </IconBg>
                    <Typography variant="h4">Tracking</Typography>
                    <Typography variant="p1">
                      Track and monitor individual, team or organisational
                      productivity in realtime, Assigned privilages to who can
                      view access information
                    </Typography>
                  </Col>
                  <Col>
                    <IconBg>
                      <Icon.Task width={54} />{" "}
                    </IconBg>
                    <Typography variant="h4">Task Management</Typography>
                    <Typography variant="p1">
                      Track and monitor individual, team or organisational
                      productivity in realtime, Assigned privilages to who can
                      view access information
                    </Typography>
                  </Col>
                  <Col>
                    <IconBg>
                      <Icon.Sms width={54} />{" "}
                    </IconBg>
                    <Typography variant="h4">Report</Typography>
                    <Typography variant="p1">
                      Track and monitor individual, team or organisational
                      productivity in realtime, Assigned privilages to who can
                      view access information
                    </Typography>
                  </Col>
                </Row>
              </Headings>
            </Container>
          </SpecialBg>
        </section>
        <section id="pricing">
          <Container>
            <Headings>
              <Typography variant="h1" style={{ fontWeight: "700" }}>
                SELECT DESIRED PLAN
              </Typography>
              <Typography variant="p1">
                A plan for everyone to stay productive
              </Typography>
              <SubTab>
                <Sub
                  className={`${sub === "month" && "active"}`}
                  onClick={() => {
                    setSub("month");
                  }}
                >
                  Pay Monthly
                </Sub>
                <Sub
                  className={`${sub === "year" && "active"}`}
                  onClick={() => {
                    setSub("year");
                  }}
                >
                  Pay Yearly
                </Sub>
              </SubTab>

              <OwlCarousel
                className="owl-theme"
                loop
                responsive={{
                  0: { items: 1 },
                  768: { items: 2 },
                  1200: { items: 3 },
                }}
                style={{
                  paddingTop: "100px",
                  columnGap: "30px",
                  //   margin: "0 30px",
                  //   padding: "0 30px",
                }}
              >
                <Col>
                  <SubMenu>
                    <SubHeader>
                      <Row>
                        <Col>
                          <Typography variant="p2">For</Typography>
                          <Typography variant="h3">INDIVIDUAL</Typography>
                        </Col>
                        <Col style={{ lineHeight: "0" }}>
                          <Typography variant="h1" style={{ fontSize: "50px" }}>
                            $0
                          </Typography>
                        </Col>
                      </Row>
                    </SubHeader>
                    <SubList>
                      <Typography variant="p2">
                        Individual Task Management
                      </Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Individual Tracking</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">
                        Individual Productivity Report
                      </Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">
                        Member to Only One Team
                      </Typography>
                    </SubList>
                    <SubButton>
                      {" "}
                      <Typography variant="p2">Try For Free</Typography>{" "}
                    </SubButton>
                  </SubMenu>
                </Col>
                <Col>
                  <SubMenu>
                    <SubHeader
                      style={{ backgroundColor: Primary[500], color: "#fff" }}
                    >
                      <Row>
                        <Col>
                          <Typography variant="p2">For</Typography>
                          <Typography variant="h3">TEAM</Typography>
                        </Col>
                        <Col style={{ lineHeight: "0" }}>
                          <Typography variant="h1" style={{ fontSize: "56px" }}>
                            {sub === "year" ? `$200` : `$20`}
                          </Typography>
                        </Col>
                      </Row>
                    </SubHeader>
                    <SubList>
                      <Typography variant="p2">
                        Everything on Individual Account
                      </Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Team Creation</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Team Task Management</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Team Tracking</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">
                        Team Report According To Privileges
                      </Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">5 Teammates</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">
                        $2 Dollars For Extra Teammates
                      </Typography>
                    </SubList>
                    <SubButton>
                      {" "}
                      <Typography variant="p2">Start Now</Typography>{" "}
                    </SubButton>
                  </SubMenu>
                </Col>
                <Col>
                  <SubMenu>
                    <SubHeader>
                      <Row>
                        <Col>
                          <Typography variant="p2">For</Typography>
                          <Typography variant="h3">ORGANZATION</Typography>
                        </Col>
                        <Col style={{ lineHeight: "0" }}>
                          <YearPrice>
                            {sub === "year" ? `$500` : `$50`}
                          </YearPrice>
                        </Col>
                      </Row>
                    </SubHeader>
                    <SubList>
                      <Typography variant="p2">
                        Everything On Team Account
                      </Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">15 Teammates</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Department Creation</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">
                        Department Task Management
                      </Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Department Tracking</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">Report</Typography>
                    </SubList>
                    <SubList>
                      <Typography variant="p2">
                        Assignment Of Privileges
                      </Typography>
                    </SubList>
                    <SubButton>
                      {" "}
                      <Typography variant="p2">Start Now</Typography>{" "}
                    </SubButton>
                  </SubMenu>
                </Col>
              </OwlCarousel>
            </Headings>
          </Container>
        </section>
        <section>
          <SpecialBg>
            <Container>
              <Headings>
                <Typography variant="h1" style={{ fontWeight: "700" }}>
                  TESTIMONIALS
                </Typography>
                <Typography variant="p1">
                  What some of our team members say about us
                </Typography>

                <OwlCarousel
                  className="owl-theme"
                  loop
                  responsive={{
                    0: { items: 1 },
                    768: { items: 2 },
                    1200: { items: 3 },
                  }}
                  margin={25}
                  style={{ paddingTop: "100px" }}
                >
                  <Testimonial>
                    <Col>
                      <TestimonialPic></TestimonialPic>
                    </Col>
                    <Col>
                      <TestimonialDetails>
                        <Typography variant="p1">
                          Track and monitor individual, team or organisational
                          productivity in realtime, Assigned privilages to who
                          can view access information
                        </Typography>
                        <Typography variant="h6">John Doe</Typography>
                      </TestimonialDetails>
                    </Col>
                  </Testimonial>
                  <Testimonial>
                    <Col>
                      <TestimonialPic></TestimonialPic>
                    </Col>
                    <Col>
                      <TestimonialDetails>
                        <Typography variant="p1">
                          Track and monitor individual, team or organisational
                          productivity in realtime, Assigned privilages to who
                          can view access information
                        </Typography>
                        <Typography variant="h6">John Doe</Typography>
                      </TestimonialDetails>
                    </Col>
                  </Testimonial>
                  <Testimonial>
                    <Col>
                      <TestimonialPic></TestimonialPic>
                    </Col>
                    <Col>
                      <TestimonialDetails>
                        <Typography variant="p1">
                          Track and monitor individual, team or organisational
                          productivity in realtime, Assigned privilages to who
                          can view access information
                        </Typography>
                        <Typography variant="h6">John Doe</Typography>
                      </TestimonialDetails>
                    </Col>
                  </Testimonial>
                  <Testimonial>
                    <Col>
                      <TestimonialPic></TestimonialPic>
                    </Col>
                    <Col>
                      <TestimonialDetails>
                        <Typography variant="p1">
                          Track and monitor individual, team or organisational
                          productivity in realtime, Assigned privilages to who
                          can view access information
                        </Typography>
                        <Typography variant="h6">John Doe</Typography>
                      </TestimonialDetails>
                    </Col>
                  </Testimonial>
                  <Testimonial>
                    <Col>
                      <TestimonialPic></TestimonialPic>
                    </Col>
                    <Col>
                      <TestimonialDetails>
                        <Typography variant="p1">
                          Track and monitor individual, team or organisational
                          productivity in realtime, Assigned privilages to who
                          can view access information
                        </Typography>
                        <Typography variant="h6">John Doe</Typography>
                      </TestimonialDetails>
                    </Col>
                  </Testimonial>
                </OwlCarousel>
              </Headings>
            </Container>
          </SpecialBg>
        </section>
      </div>
    </>
  );
};

export default Home;
