import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/about.css";
import { SkillProgressBar } from "../components/SkillProgressBar";
import { ContactMe } from "../components/ContactMe";
import { AdventureSvg } from "./img/AdventureSvg";
import { Container, Box, Grid, Modal, Paper } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
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
    height: "100%",
    width: "100%",
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
}));

export const About = () => {
  const classes = useStyles();
  const [contactOpen, setContactOpen] = useState(false);
  const skills = [
    { name: "reactjs", value: 75, img: "react.jpg" },
    { name: "nodejs", value: 60, img: "nodejs.jpg" },
    { name: "javascript", value: 80, img: "javascript.jpg" },
    { name: "html", value: 70, img: "html5.jpg" },
    { name: "css", value: 50, img: "css3.jpg" },
    { name: "typescript", value: 70, img: "typescript.png" },
  ];

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
    <Container maxWidth="xl" id="about-section" className="about-container">
      <Grid container className={classes.gridContainer}>
        <Grid
          id="about-my-story"
          container
          item
          xs={12}
          sm={12}
          md={6}
          justifyContent="center"
          className={classes.gridItem}
        >
          <Grid id="my-story-item" item xs={12} sm={12} md={12} lg={12}>
            <Typography
              style={{ textAlign: "center" }}
              component="h3"
              variant="h3"
            >
              My Story
            </Typography>
          </Grid>
          <Grid item>
            <AdventureSvg />
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>
              Hello there! I'm a Front End Developer from California who
              specializes in JavaScript. In additional to my knowledge of
              JavaScript, I also bring with me my passion for learning, solving
              problems, and positive, subborn attitude to overcome new
              challenges thrown my way. I have a strong{" "}
              <strong>passion for learning </strong>
              and <strong>improving myself</strong>. I know I can improve and I
              will strive to continue forward with a positive mindset. I'm
              always on the lookout for new projects to work on so feel free to
              reach out!
            </Typography>
          </Grid>
          <Grid
            id="button-group"
            container
            item
            justifyContent="center"
            spacing={2}
            style={{ padding: "10px 0" }}
          >
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={showResume}
              >
                View Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleOpen}
              >
                Contact Me
              </Button>
              <Modal
                open={contactOpen}
                onClose={handleClose}
                className={classes.contactMeModal}
              >
                <Paper className={classes.paper} elevation={4}>
                  <ContactMe />
                </Paper>
              </Modal>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          id="about-my-skills"
          container
          item
          xs={12}
          sm={12}
          md={6}
          justifyContent="center"
          className={classes.gridItem}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              component="h3"
              variant="h3"
              style={{ textAlign: "center" }}
            >
              Skills
            </Typography>
            <Grid
              container
              style={{ padding: "20px 0", height: "80%" }}
              justifyContent="center"
            >
              {skills.map((skill, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={6}
                  key={`${skill}${index}`}
                  style={{ textAlign: "center", paddingTop: 10 }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <SkillProgressBar
                      img={skill.img}
                      percentage={skill.value}
                      name={skill.name}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
