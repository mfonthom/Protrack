import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grey } from "../../../helpers/Colors";
import Button from "../../atoms/Button";
import { Logo, MobileIcon } from "../Navbar/NavbarStyle";
import {
  SideContainer,
  SideMenu,
  SideMenuList,
  SideWrapper,
} from "./SidebarStyle";
import Icon from "../../../assets/icon";

function Sidebar() {
  return (
    <>
      <SideContainer>
        <SideWrapper>
          <Logo>
            <Link to="/">ProTrack</Link>
          </Logo>

          <SideMenu>
            <ul>
              <SideMenuList>
                {" "}
                <NavLink to="/:dashboard">
                  <Icon.Home width={24} /> Home{" "}
                </NavLink>
              </SideMenuList>
              <SideMenuList>
                <NavLink to="/:dashboard/task">
                  {" "}
                  <Icon.Timer width={24} /> Task
                </NavLink>
              </SideMenuList>
              <SideMenuList>
                <NavLink to="/:dashboard/members">
                  {" "}
                  <Icon.People width={24} /> Members
                </NavLink>
              </SideMenuList>
              <SideMenuList>
                <NavLink to="/:dashboard/report">
                  <Icon.Sms width={24} /> Report
                </NavLink>
              </SideMenuList>
              <SideMenuList>
                <NavLink to="/:dashboard/message">
                  {" "}
                  <Icon.Message width={24} /> Messages
                </NavLink>
              </SideMenuList>
              <hr style={{ color: `${Grey[50]}`, width: "100%" }} />
              <SideMenuList>
                <NavLink to="/:dashboard/settings">
                  {" "}
                  <Icon.Setting width={24} /> Settings{" "}
                </NavLink>
              </SideMenuList>
              <SideMenuList>
                <NavLink to="/:dashboard/help">
                  {" "}
                  <Icon.Support width={24} /> Help{" "}
                </NavLink>
              </SideMenuList>
            </ul>
            <Button
              label="Sign Out"
              size="large"
              weight="semi-bold"
              style={{ width: "100%" }}
            />
          </SideMenu>
        </SideWrapper>
      </SideContainer>
    </>
  );
}

export default Sidebar;
