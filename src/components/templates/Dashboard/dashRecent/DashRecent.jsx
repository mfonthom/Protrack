import React from "react";
import {
  DashRecentWrapper,
  ProgressRate,
  ProgressWrapper,
} from "./DashRecentStyle";
import Typography from "../../../atoms/Typography";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Grey, Sec, Success, Err } from "../../../../helpers/Colors";

const DashRecent = () => {
  const percentage = 70;
  return (
    <div>
      <DashRecentWrapper>
        <Typography variant="h4" weight="semi-bold">
          Recent Task
        </Typography>
        <ProgressWrapper>
          <div>
            <div style={{ width: 100, height: 100 }}>
              {" "}
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: `${Grey[800]}`,
                  pathColor: `${Sec[600]}`,
                  trailColor: `${Grey[50]}`,
                })}
              />
              <Typography
                variant="small1"
                weight="semi-bold"
                style={{ color: `${Grey[500]}` }}
              >
                Time Elapse
              </Typography>
            </div>
            <div>
              <Typography variant="h6" weight="semi-bold">
                {" "}
                Protrack UI/UX Design Project
              </Typography>
              <Typography variant="p2">
                Design all the onboarding screens
              </Typography>
              <Typography variant="small2">Personal</Typography>
            </div>
          </div>

          <ProgressRate type="progress">
            <Typography>In Progress</Typography>
          </ProgressRate>
        </ProgressWrapper>

        <ProgressWrapper>
          <div>
            <div style={{ width: 100, height: 100 }}>
              {" "}
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: `${Grey[800]}`,
                  pathColor: `${Sec[600]}`,
                  trailColor: `${Grey[50]}`,
                })}
              />
              <Typography
                variant="small1"
                weight="semi-bold"
                style={{ color: `${Grey[500]}` }}
              >
                Time Elapse
              </Typography>
            </div>
            <div>
              <Typography variant="h6" weight="semi-bold">
                {" "}
                Protrack UI/UX Design Project
              </Typography>
              <Typography variant="p2">
                Design all the onboarding screens
              </Typography>
              <Typography variant="small2">Personal</Typography>
            </div>
          </div>

          <ProgressRate>
            <Typography>In Progress</Typography>
          </ProgressRate>
        </ProgressWrapper>

        <ProgressWrapper>
          <div>
            <div style={{ width: 100, height: 100 }}>
              {" "}
              <CircularProgressbar
                className="CircularProgressbar-path"
                style="progress"
                value={percentage}
                text={`${percentage}%`}
              />
              <Typography
                variant="small1"
                weight="semi-bold"
                style={{ color: `${Grey[500]}` }}
              >
                Time Elapse
              </Typography>
            </div>
            <div>
              <Typography variant="h6" weight="semi-bold">
                {" "}
                Protrack UI/UX Design Project
              </Typography>
              <Typography variant="p2">
                Design all the onboarding screens
              </Typography>
              <Typography variant="small2">Personal</Typography>
            </div>
          </div>

          <ProgressRate type="completed">
            <Typography>In Progress</Typography>
          </ProgressRate>
        </ProgressWrapper>
      </DashRecentWrapper>
    </div>
  );
};

export default DashRecent;
