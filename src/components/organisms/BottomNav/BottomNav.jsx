import React from "react";
import Icon from "../../../assets/icon";
import {
  BNIconBg,
  BNIconWrap,
  BottomNavWrapper,
  BNMenu,
} from "./BottomNavStyles";
import Typography from "../../atoms/Typography";
import { Container } from "../../../helpers/Container";

const BottomNav = () => {
  return (
    <Container>
      <BottomNavWrapper>
        <div>
          <BNMenu>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Affiliate</li>
            <li>FAQ</li>
            <li>How it works</li>
            <li>Contacts</li>
            <li>Blogs</li>
          </BNMenu>
          <Typography variant="small2">
            &copy; 2022 Protrack.All right reserved.
          </Typography>
        </div>
        <div>
          <BNIconWrap>
            <BNIconBg>
              <Icon.Facebook />
            </BNIconBg>
            <BNIconBg>
              <Icon.LinkedIn />
            </BNIconBg>
            <BNIconBg>
              <Icon.Instagram />
            </BNIconBg>
          </BNIconWrap>
          <Typography variant="small2">Powered by Dungada Tech Ltd.</Typography>
        </div>
      </BottomNavWrapper>
    </Container>
  );
};

export default BottomNav;
