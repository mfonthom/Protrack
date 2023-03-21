import React from "react";
import { ChartCard, ChartWrapper, DashTaskList } from "./DashChartStyle";
import Typography from "../../../atoms/Typography";
import { Grey, Primary } from "../../../../helpers/Colors";
import Icon from "../../../../assets/icon";
import CustomizedCheckbox from "../../../atoms/Checkbox";

const DashChart = () => {
  return (
    <div>
      <ChartWrapper>
        <ChartCard>
          <div>
            <div>
              {" "}
              <Typography variant="p1">Productivity Chart</Typography>
            </div>
            <div>
              {" "}
              <Typography variant="small2" style={{ color: `${Grey[60]}` }}>
                Last 7 days
              </Typography>
            </div>
          </div>
          <div>chart</div>
        </ChartCard>
        <ChartCard>
          <div>
            <div>
              {" "}
              <Typography variant="p1">Today's Task</Typography>
            </div>
            <div className="addTask">
              {" "}
              <Icon.Add width={24} />
            </div>
          </div>
          <div style={{ display: "block" }}>
            <DashTaskList>
              <CustomizedCheckbox />
              <Typography variant="p2"> Work on Project</Typography>
            </DashTaskList>
            <DashTaskList>
              <CustomizedCheckbox />
              <Typography variant="p2"> Design Project</Typography>
            </DashTaskList>
            <DashTaskList>
              <CustomizedCheckbox />
              <Typography variant="p2"> Creat Project brief</Typography>
            </DashTaskList>
            <DashTaskList>
              <CustomizedCheckbox />
              <Typography variant="p2"> Work on Project</Typography>
            </DashTaskList>
          </div>
        </ChartCard>
      </ChartWrapper>
    </div>
  );
};

export default DashChart;
