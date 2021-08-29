import {
  Container,
  Box,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import { ComeBackLaterSvg } from "../components/img/ComeBackLaterSvg";

const useStyle = makeStyles({
  gridContainer: {
    height: "100%",
    paddingTop: "48px !important",
    backgroundColor: "#393E46",
  },
  container: {
    height: "100vh",
    paddingLeft: 0,
    paddingRight: 0,
  },
  textContainer: {
    padding: '1.5em',
    color: "#00ADB5"
  }
});

export const Projects = () => {
  const classes = useStyle();
  return (
    <Container
      maxWidth="xl"
      id="projects-section"
      className={classes.container}
    >
      <Grid
        container={true}
        justifyContent="center"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={12} md={6} className={classes.textContainer}>
          <Box>
            <Typography variant="h2" component="h2">
              This is awkward...
            </Typography>
            <Typography variant="h4" component="h4" style={{color: "#EEEEEE"}}>
              There is nothing here at the moment, please check back later!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box className={classes.boxContainer}>
            <ComeBackLaterSvg width={'100%'} height={'100%'}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
