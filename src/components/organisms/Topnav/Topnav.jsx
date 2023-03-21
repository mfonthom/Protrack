import Icon from "../../../assets/icon";
import { Container } from "../../../helpers/Container";
import Typography from "../../atoms/Typography";
import {
  Dp,
  DpWrapper,
  Noti,
  NotificationNo,
  TopnavWrapper,
  MobileTopNavWrapper,
} from "./TopnavStyle";
import Profilepic from "../../../assets/images/textpic.webp";
import { Grey } from "../../../helpers/Colors";
import FeatherIcon from "feather-icons-react";
import { MobileIcon } from "../Navbar/NavbarStyle";
import { useState } from "react";

const Topnav = () => {
  const [mobileSide, setMobileSide] = useState();
  return (
    <>
      <TopnavWrapper>
        <Container>
          <div>
            <Typography
              variant="h3"
              weight="bold"
              style={{ color: `${Grey[800]}` }}
            >
              Hi Samuel
            </Typography>
            <Typography
              variant="p2"
              weight="semi-bold"
              style={{ color: `${Grey[300]}` }}
            >
              Welcome to your dashboard
            </Typography>
          </div>
          <Noti>
            <div>
              <Icon.Notification width={24} />{" "}
              <NotificationNo>4</NotificationNo>
            </div>
            <DpWrapper>
              <div>
                <Dp style={{ backgroundImage: `url(${Profilepic})` }}></Dp>
              </div>
              <div>
                {" "}
                <Typography
                  variant="p2"
                  weight="bold"
                  style={{ color: `${Grey[800]}` }}
                >
                  Samuel Linus
                </Typography>
                <Typography variant="small1" style={{ color: `${Grey[400]}` }}>
                  @samuel
                </Typography>
              </div>
            </DpWrapper>
          </Noti>
        </Container>
      </TopnavWrapper>

      <MobileTopNavWrapper>
        <Container>
          <div>
            <div>
              <Dp style={{ backgroundImage: `url(${Profilepic})` }}></Dp>
            </div>{" "}
            <div>
              <Icon.Notification width={24} />{" "}
              <NotificationNo>4</NotificationNo>
            </div>
          </div>

          <div>
            <MobileIcon onClick={() => setMobileSide(true)}>
              <FeatherIcon icon="menu" />
            </MobileIcon>
          </div>
        </Container>
      </MobileTopNavWrapper>
    </>
  );
};

export default Topnav;
