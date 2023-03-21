import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { Primary, Grey } from "../../helpers/Colors";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 24,
  height: 24,
  //   boxShadow:
  //     theme.palette.mode === 'dark'
  //       ? '0 0 0 1px rgb(16 22 26 / 40%)'
  //       : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: `${Primary[50]}`,

  "input:hover ~ &": {
    backgroundColor: `${Primary[50]}`,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: `${Grey[300]}`,
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: `${Primary[500]}`,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 24,
    height: 24,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export default function CustomizedCheckbox() {
  return (
    <div>
      <BpCheckbox />
      {/* <BpCheckbox defaultChecked /> */}
      {/* <BpCheckbox disabled /> */}
    </div>
  );
}
