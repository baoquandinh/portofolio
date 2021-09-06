import { Container, makeStyles, Typography, Grid, Chip } from "@material-ui/core";
import { useState } from "react";
import { Project } from "./Project";

const useStyle = makeStyles((theme) => ({
  chip: {
    cursor: "pointer",
    margin: theme.spacing(0.5),
  },
  chipContainer: {
    textAlign: "left",
  },
  container: {
    minHeight: "100vh",
    backgroundColor: "#222831",
    color: "#EEEEEE",
    fontFamily: "Open Sans, sans-serif",
  },
  gridContainer: {
    minHeight: "100vh",
    backgroundColor: "#393E46",
    paddingTop: 45
  },
  textContainer: {
    padding: "1.5em",
    color: "#00ADB5",
  },
}));

const chips = [
  { name: "JavaScript", selected: false },
  { name: "ReactJS", selected: false },
  { name: "NodeJS", selected: false },
  { name: "HTML", selected: false },
  { name: "CSS", selected: false },
  { name: "API", selected: false },
  { name: "ExpressJS", selected: false },
  { name: "MaterialUI", selected: false },
  { name: "Bootstrap", selected: false },
  { name: "Mobile Design", selected: false },
];

const projects = [
  {
    name: "Memory Game",
    description: "A simple memory game to test your skills.",
    src: "memorygame",
    chips: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Pixel Art Maker",
    description: "A single page app that allows user to draw their own pixel art.",
    src: "pixelartmaker",
    chips: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Custom Frogger Replica",
    description: "A web based Frogger replica arcade game.",
    src: "arcadegame",
    chips: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio V1",
    description: "My first portfolio I built while participating in the Front End Nanodegree Program.",
    externalSrc: "https://baoquandinh.github.io",
    chips: ["HTML", "CSS", "JavaScript", "Mobile Design"],
  },
];

export const Projects = () => {
  const classes = useStyle();
  const [chipData, setChipData] = useState(chips);

  const handleChipClick = (selectedChip) => {
    const newChipData = chipData.map((chip) => {
      if (chip.name === selectedChip.name) {
        chip.selected = !chip.selected;
      }
      return chip;
    });
    setChipData(newChipData);
  };
  return (
    <Container id="projects-section" maxWidth="xl" className={classes.container}>
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}>
        <Grid item container xs={12} md={4} direction="column" justifyContent="center">
          <Typography variant="h4">Things I have built</Typography>
          <Typography variant="subtitle2">Things to filter by</Typography>
          <Grid className={classes.chipContainer} item>
            {chipData.map((chip, index) => (
              <Chip
                key={`${chip.name}-${index}`}
                className={classes.chip}
                variant={chip.selected ? "default" : "outlined"}
                color="primary"
                label={chip.name}
                onClick={() => {
                  handleChipClick(chip);
                }}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item container xs={12} md={4} direction="column" justifyContent="center" spacing={2}>
          {projects.map((project, index) => (
            <Grid key={`${project.name}-${index}`} item>
              <Project
                name={project.name}
                description={project.description}
                chips={project.chips}
                externalSrc={project.externalSrc}
                src={project.src}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
