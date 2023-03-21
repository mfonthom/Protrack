import Icon from "../../../../assets/icon";
import Typography from "../../../atoms/Typography";
import {
  Complete,
  InProgress,
  TaskDisplay,
  TotalTask,
  TotalWrapper,
  UnComplete,
  TaskBoard,
} from "./DashTaskStyle";
const DashTask = () => {
  return (
    <div>
      <TaskDisplay>
        <div>
          <div className="IconHeader">
            <div className="clipIcon">
              <Icon.MenuBoard />
            </div>
            <div>
              <Typography variant="h4" weight="semi-bold">
                {" "}
                Task{" "}
              </Typography>
              <Typography variant="small1">
                Manage individual, team or organisational tasks
              </Typography>
            </div>
          </div>

          <TotalWrapper>
            <TotalTask>
              <div>30</div>
            </TotalTask>

            <Typography variant="small2" weight="bold">
              Total Tasks
            </Typography>
          </TotalWrapper>
        </div>

        <TaskBoard>
          <div>
            <Complete>08</Complete>
            <Typography variant="small2" weight="semi-bold">
              Completed
            </Typography>
          </div>
          <div>
            <UnComplete>09</UnComplete>
            <Typography variant="small2" weight="semi-bold">
              UnCompleted
            </Typography>
          </div>
          <div>
            <InProgress>100</InProgress>
            <Typography variant="small2" weight="semi-bold">
              InProgress
            </Typography>
          </div>
        </TaskBoard>
      </TaskDisplay>
    </div>
  );
};

export default DashTask;
