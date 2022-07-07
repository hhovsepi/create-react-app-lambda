import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import bhs from "../../Assets/bhs.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              HOW DOES IT <span className="purple"> WORK? </span>
            </h1>
            <p className="home-about-body">
              Mr.Beast once said coming up with new video ideas was <b className="purple"> a challenge</b>
              <br></br><br>
              </br>
              To tackle this challenge, the video idea generator uses <b className="purple"> powerful AI powered natural language processing </b> that generates new video ideas based on Mr. Beasts previous videos.
              {/* <br />
              <br />
              Words&nbsp; */}
              {/* <i>
                <b className="purple">Words </b> and
                also in areas related to{" "}
                <b className="purple">
                  Words
                </b>
              </i>
              <br />
              <br />
              Words
              <b className="purple"> Words</b> Words
              <i>
                <b className="purple">
                  {" "}
                  Words
                </b>
                <br></br>
                <br />Words
                <i>
                  <b className="purple"> Words </b>
                  Words
                  <b className="purple"> Words </b> Words
                  <b className="purple"> Words</b>
                </i>
                <br /><br></br>
                Words
                <b className="purple"> Words</b>
                Words
                <b className="purple"> Words </b>
                Words
                <b className="purple"> Words </b> Words
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://www.thewikifeed.com/wp-content/uploads/2021/04/mrbeast-1.jpg" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>WORDS</h1>
            <p>
            Words <span className="purple">Words</span>Words
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hhovsepi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haig-hike-hovsepian-ab4240106/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
