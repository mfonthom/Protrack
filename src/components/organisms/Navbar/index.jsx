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
import { NavLink, Link, useNavigate } from "react-router-dom";
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
                <NavLink exact activeClassName="active" to="/">
                  ProTrack
                </NavLink>
              </Logo>
            </Col>
            <Col>
              <NavMenu>
                <NavList>
                  <a href="/#features">Features</a>
                </NavList>
                <NavList>
                  <a href="/#pricing">Pricing</a>
                </NavList>
                <NavList>
                  <NavLink activeClassName="active" to="/about" className="">
                    About
                  </NavLink>
                </NavList>
                <NavList>
                  <NavLink activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </NavList>
              </NavMenu>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <NavButton>
                <Button
                  label="Sign up"
                  size="large"
                  weight="bold"
                  onClick={() => navigate("/signup")}
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
              <a href="/#features">Features</a>
            </MobileList>
            <MobileList>
              <a href="/#pricing">Pricing</a>
            </MobileList>
            <MobileList>
              <Link to="/about">About</Link>
            </MobileList>
            <MobileList>
              <Link to="/contact">Contact</Link>
            </MobileList>
          </MobileMenu>
          <MobileButton>
            <Button
              size="large"
              weight="bold"
              style={{ background: `${Grey[50]}`, color: `${Primary[500]}` }}
              label="Sign up"
              onClick={() => navigate("/signup")}
            />
          </MobileButton>
        </MobileWrapper>
      </MobileNav>
    </div>
  );
};

export default Navbar;
