import React, { useState } from "react";
import {
  Nav,
  NavList,
  NavMenu,
  Logo,
  NavRow,
  NavButton,
  MobileIcon,
  MobileList,
  MobileMenu,
  MobileNav,
  MobileWrapper,
  MobileButton,
} from "./NavbarStyle";
import { Container, Col } from "../../../helpers/Container";
import Button from "../../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../atoms/Typography";
import FeatherIcon from "feather-icons-react";
import { Grey, Primary } from "../../../helpers/Colors";

const Navbar = () => {
  let navigate = useNavigate();
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div>
      <Nav>
        <Container>
          <NavRow>
            <Col>
              <Logo>
                {" "}
                <Typography variant="h1" weight={"bold"}>
                  ProTrack
                </Typography>
              </Logo>
            </Col>
            <Col>
              <NavMenu>
                <NavList>
                  {" "}
                  <Link to="#">Features</Link>
                </NavList>
                <NavList>
                  <Link to="#">Pricing</Link>
                </NavList>
                <NavList>
                  <Link to="#">About</Link>
                </NavList>
                <NavList>
                  <Link to="#">Contact</Link>
                </NavList>
              </NavMenu>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <NavButton>
                <Button
                  label="Sign up"
                  size="large"
                  weight="bold"
                  onClick={() => navigate("/register")}
                />
              </NavButton>
            </Col>
            <MobileIcon onClick={() => setShowMobile(true)}>
              <FeatherIcon icon="menu" />
            </MobileIcon>
          </NavRow>
        </Container>
      </Nav>

      <MobileNav className={showMobile && "active"}>
        <MobileWrapper>
          <MobileIcon>
            <FeatherIcon
              icon="x"
              size="24"
              color={Grey[50]}
              onClick={() => setShowMobile(false)}
            />
          </MobileIcon>
          <MobileMenu>
            <MobileList>
              {" "}
              <Link to="#">Features</Link>
            </MobileList>
            <MobileList>
              <Link to="#">Pricing</Link>
            </MobileList>
            <MobileList>
              <Link to="#">About</Link>
            </MobileList>
            <MobileList>
              <Link to="#">Contact</Link>
            </MobileList>
          </MobileMenu>
          <MobileButton>
            <Button
              size="large"
              weight="bold"
              style={{ background: `${Grey[50]}`, color: `${Primary[500]}` }}
              label="Sign up"
            />
          </MobileButton>
        </MobileWrapper>
      </MobileNav>
    </div>
  );
};

export default Navbar;
