import "../styles/skills-progress-bar.css";
import {
  Container,
  Box,
  Grid,
  Modal,
  Paper,
  makeStyles,
} from "@material-ui/core";

export const SkillProgressBar = ({ img, percentage }) => {
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
        ></div>
      </div>
    </Box>
  );
};
