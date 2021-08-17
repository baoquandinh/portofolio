import { Container, Row, Col } from "react-bootstrap";
import "../styles/skills.css";
import { SkillProgressBar } from "../components/SkillProgressBar";

export const Skills = () => {
  const skills = [
    { name: "reactjs", value: 75, img: "react.jpg" },
    { name: "nodejs", value: 60, img: "nodejs.jpg" },
    { name: "javascript", value: 80, img: "javascript.jpg" },
    { name: "html", value: 70, img: "html5.jpg" },
    { name: "css", value: 50, img: "css3.jpg" },
  ];
  return (
    <Container id="skills-section" className="skills-wrapper">
      <Row className="skills-text-container">
        <h1>Skills</h1>
      </Row>
      <Row className="skills-main-body">
        {skills.map((skill, index) => (
          <Col sm={12} md={3} key={`${skill}${index}`}>
            <SkillProgressBar img={skill.img} percentage={skill.value} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
