import { Chip, Typography, makeStyles, Box } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyle = makeStyles((theme) => ({
  arrowIcon: {
    width: 30,
  },
  card: {
    width: "200px",
    height: "200px",
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "#00ADB5",
  },
  projectTitle: {
    cursor: "pointer",
    "&:hover $arrowIcon": {
      width: 45,
    },
    "&:hover": {
      color: "#00ADB5",
    },
  },
  projectTitleContainer: {},
}));

export const Project = ({ name, description, chips, externalSrc, src }) => {
  const classes = useStyle();
  const handleClick = (source) => {
    if (!source) return;
    if (source === "/") {
      window.open(source, '_self');
    } else {
      window.open(source, "_target");
    }
    return;
  };
  return (
    <Box>
      <Box>
        <Typography
          className={classes.projectTitle}
          variant="h5"
          onClick={() => {
            handleClick(externalSrc ?? src);
          }}>
          {name} <ArrowRightAltIcon className={classes.arrowIcon} fontSize="large" />
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Box>
      <Box>
        {chips.map((chip, index) => (
          <Chip
            key={`card-${chip}-${index}`}
            className={classes.chip}
            variant="outlined"
            color="default"
            label={chip}
          />
        ))}
      </Box>
    </Box>
  );
};
