import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 50,
    borderColor : "#1692bf",
  },
  colorPrimary: {
    backgroundColor: "#dfe8eb",
    borderColor : "#1692bf",
  },
  bar: {
    borderRadius: 50,
    backgroundColor: "#1692bf",
    borderColor : "#1692bf",
    
  }
}))(LinearProgress);

export default function 
  Progress(props) {
    return (
      <div>
        <BorderLinearProgress variant="determinate" value={props.value} />
      </div>
    );
}
