import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "../styles/home.css";
import { handleTransition } from "../components/Navbar";
import { useState } from "react";
import { IconContext } from "react-icons";

const goToWebpage = (link) => {
  window.open(link, "_target");
};

export const Home = () => {
  const titles = ["Front-end Developer", "Aspiring Back-end Developer", "Wannabe Full-Stack Developer"];
  let [counter, setCounter] = useState(0);
  let [title, setTitle] = useState(titles[counter]);

  return (
    <Container id="home-section" fluid className="home-wrapper">
      <Row className="home-banner">
        <Col className="banner-text" xl={12}>
          <Row style={{ paddingBottom: "1em" }}>
            <h1>Hello I'm Baoquan Dinh</h1>
          </Row>
          <Row>
            <h3>{title}</h3>
          </Row>
          <Row className="justify-content-center social-wrapper">
            <Col xl={4} className="align-self-center">
              <ul className="social">
                <li key="linkedin">
                  <IconContext.Provider value={{ color: "white", className: "global-class-name global-pointer" }}>
                    <AiOutlineLinkedin
                      size="2em"
                      onClick={() => goToWebpage("https://www.linkedin.com/in/baoquandinh/")}
                    />
                  </IconContext.Provider>
                </li>
                <li key="github">
                  <IconContext.Provider value={{ color: "white", className: "global-class-name global-pointer" }}>
                    <GoMarkGithub size="2em" onClick={() => goToWebpage("https://github.com/baoquandinh")} />
                  </IconContext.Provider>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="scrolldown">
        <IconContext.Provider value={{ color: "white", className: "global-class-name global-pointer" }}>
          <div>
            <FaArrowAltCircleDown size="4em" onClick={() => handleTransition("about")} />
          </div>
        </IconContext.Provider>
      </Row>
    </Container>
  );
};
