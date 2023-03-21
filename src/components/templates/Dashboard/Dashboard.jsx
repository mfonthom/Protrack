import React from "react";
import { Container } from "../../../helpers/Container";
import { DHWrapper } from "./DashboardStyle";
import DashChart from "./dashChart/DashChart";
import DashRecent from "./dashRecent/DashRecent";
import DashTask from "./dashTask/DashTask";

function Dashboard() {
  return (
    <DHWrapper>
      <Container>
        <DashTask />
        <DashChart />
        <DashRecent />
      </Container>
    </DHWrapper>
  );
}

export default Dashboard;
