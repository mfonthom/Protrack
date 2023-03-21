import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../organisms/BottomNav/BottomNav";
import Sidebar from "../organisms/Sidebar/Sidebar";
import Topnav from "../organisms/Topnav/Topnav";
import { DashboardContent, DashboardMenu, DashboardPage } from "./PagesStyle";

function DashboardLayout() {
  return (
    <div>
      <DashboardPage>
        <DashboardMenu>
          <Sidebar />
        </DashboardMenu>
        <DashboardContent>
          <Topnav />
          <Outlet />
          <BottomNav />
        </DashboardContent>
      </DashboardPage>
    </div>
  );
}

export default DashboardLayout;
