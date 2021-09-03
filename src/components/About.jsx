import { Avatar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContactMe } from "../components/ContactMe";
import { Container, Grid, Modal, Paper } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    minHeight: "100vh",
    backgroundColor: "#222831",
    paddingTop: "48px !important",
    color: "#EEEEEE",
    fontFamily: "Open Sans, sans-serif",
  },
  boxContainer: {
    height: "100%",
    width: "100%",
  },
  button: {
    marginBottom: 10,
    width: 250,
    fontFamily: "'Roboto', sans-serif;",
  },
  gridContainer: {
    minHeight: "100vh",
  },
  gridItem: {
    minHeight: "100vh",
    width: "50%",
  },
  typography: {
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif;",
  },
  contactMeModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    height: "550px",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    textAlign: "center",
  },
  profileImage: {
    width: 250,
    height: 250,
  },
}));

export const About = () => {
  const classes = useStyles();
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpen = () => {
    setContactOpen(true);
  };
  const handleClose = () => {
    setContactOpen(false);
  };

  const showResume = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, "_target");
  };

  return (
    <Container maxWidth="xl" id="about-section" className={classes.aboutContainer}>
      <Grid
        className={classes.gridContainer}
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <Typography className={classes.title} component="h3" variant="h3">
            About Me
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="My Beautiful Face"
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            className={classes.profileImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography className={classes.typography}>
            Hello there! I'm a Front End Developer from California who specializes in JavaScript. In additional to my
            knowledge of JavaScript, I also bring with me my passion for learning, solving problems, and can-do attitude
            to overcome any new challenges thrown my way. I have a strong <strong>passion for learning </strong>
            and <strong>improving myself</strong>. I know I can improve and I will strive to continue forward with a
            positive mindset. I'm always on the lookout for new projects to work on so feel free to reach out!
          </Typography>
        </Grid>
        <Grid container item justifyContent="center" xs={12} spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button} onClick={showResume}>
              View Resume
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleOpen}>
              Contact Me
            </Button>
            <Modal open={contactOpen} onClose={handleClose} className={classes.contactMeModal}>
              <Paper className={classes.paper} elevation={4}>
                <ContactMe />
              </Paper>
            </Modal>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
