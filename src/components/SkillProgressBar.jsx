import "../styles/skills-progress-bar.css";
import { Typography } from "@material-ui/core";
import {
  Box,
} from "@material-ui/core";

export const SkillProgressBar = ({ img, percentage, name }) => {
  const strokeDashOffset = 440 - (440 * percentage) / 100;
  return (
    <Box className="box">
      <div className="percent">
        <svg>
          <circle
            style={{ strokeDashoffset: `${strokeDashOffset}` }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
          <circle
            style={{ strokeDashoffset: `${strokeDashOffset}` }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
        </svg>
        <div
          className="symbol"
          style={{ backgroundImage: `url(/images/${img})` }}
        >
          <Typography className="text">{name.toUpperCase()}</Typography>
        </div>
      </div>
    </Box>
  );
};
