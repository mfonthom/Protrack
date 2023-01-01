import React from "react";
import Typography from "../../atoms/Typography";
import { AboutHeadings, AboutText } from "./AboutStyle";
import { Col, Container, Row } from "../../../helpers/Container";
import { LeftSideImg, RightSideImg } from "../Home/HomeStyle";
import abouthero from "../../../assets/images/team_high_five.jpeg";
const About = () => {
  return (
    <>
      <div className="about">
        <AboutHeadings>
          <Typography variant="h1" weight="bold">
            ABOUT US
          </Typography>
          <Typography variant="h5">
            Compare all plans feature by feature
          </Typography>
        </AboutHeadings>
        <section>
          <Container>
            <Row>
              {" "}
              <Col>
                <RightSideImg
                  style={{ backgroundImage: `url(${abouthero})` }}
                ></RightSideImg>
              </Col>
              <Col>
                <AboutText>
                  <Typography variant="h3" weight="semi-bold">
                    OUR VISION
                  </Typography>
                  <Typography variant="p1">
                    We want to create an environment for people to know that
                    their goal acheivement is priority and nothing makes us
                    happier than seeing people tick off their achieved targets
                    from the list and moving one step closer to their goals.
                  </Typography>
                </AboutText>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col>
                <AboutText>
                  <Typography variant="h3" weight="semi-bold">
                    OUR APPROACH
                  </Typography>
                  <Typography variant="p1">
                    We want you to know that you are the Main Character and your
                    destiny is in your own hands. No one else can achieve the
                    dreams you have for yourself, your team or your ogranization
                    except you.
                  </Typography>
                </AboutText>
              </Col>
              <Col>
                <LeftSideImg
                  style={{ backgroundImage: `url(${abouthero})` }}
                ></LeftSideImg>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col>
                <RightSideImg
                  style={{ backgroundImage: `url(${abouthero})` }}
                ></RightSideImg>
              </Col>
              <Col>
                <AboutText>
                  <Typography variant="h3" weight="semi-bold">
                    OUR PROCESS
                  </Typography>
                  <Typography variant="p1">
                    From one achieved deliverables to significant miles stones
                    and a wholesome goal accomplised, that is how we hope to
                    help be a part of your success story.
                  </Typography>
                </AboutText>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
