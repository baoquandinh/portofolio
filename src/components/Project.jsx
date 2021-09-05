import { Chip, Typography, makeStyles, Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
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
    borderRadius: 0,
    // backgroundColor: '#00ADB5'
  },
  projectTitle: {
    cursor: "pointer",
    "&:hover $arrowIcon": {
      width: 45
    },
    "&:hover": {
        color: "#00ADB5"
    }
  },
}));

export const Project = ({ name, description, chips }) => {
  const classes = useStyle();
  console.log(name, description, chips);
  return (
    <Box>
      <Typography className={classes.projectTitle} variant="h5">
        {name} <ArrowRightAltIcon className={classes.arrowIcon} fontSize="large"/>
      </Typography>
      <Typography variant="subtitle1">{description}</Typography>
      {chips.map((chip, index) => (
        <Chip key={`card-${chip}-${index}`} className={classes.chip} variant="outlined" color="default" label={chip} />
      ))}
    </Box>
  );
};
