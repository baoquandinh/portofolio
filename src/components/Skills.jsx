import { Container, Row, Col } from "react-bootstrap";
import "../styles/skills.css";

export const Skills = () => {
  const skills = [
    { name: "reactjs", value: 70 },
    { name: "nodejs", value: 35 },
    { name: "javascript", value: 80 },
    { name: "html", value: 70 },
    { name: "css", value: 70 },
  ];
  return (
    <Container id="skills-section" className="skills-wrapper">
      <Row className="skills-main-body">
        <Col lg={3}>
          <h3>
            <span>Skills</span>
          </h3>
        </Col>
        <Col className="skills-main-info">
          <Row className="skills-main-info-header">
            <h3>
              <span>My Language Proficiency</span>
            </h3>
          </Row>
          <Row className="skills-bars">
            <Col>
              <ul>
                {skills.map((skill, index) => (
                  <li key={`${skill}${index}`}>
                    <span
                      className="bar-expand"
                      style={{ width: `${skill.value}%` }}
                    ></span>
                    <em className="bar-title">{skill.name.toUpperCase()}</em>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
