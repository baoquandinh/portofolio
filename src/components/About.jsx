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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
                  md={3}
                  key={`${skill}${index}`}
                  style={{ textAlign: "center" , paddingTop: 10}}
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
