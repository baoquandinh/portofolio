import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import "../styles/about.css";
import { MdFace, MdFileDownload } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: 10,
    width: 250
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Container fluid id="about-section" className="about-wrapper">
      <Row className="about-section">
        <Col xl={3} className="about-picture-section">
          <MdFace size="8em" />
        </Col>
        <Col className="about-info-section">
          <Row className="about-info-text">
            <Col>
              <h1>About Me</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
          </Row>
          <Row className="about-info-contact">
            <Col xl={12}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudDownloadIcon />}
              >
                Download Resume
              </Button>
            </Col>
            <Col xl={12}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
              >
                Contact Me
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
