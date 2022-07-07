import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import mb from "../../Assets/mb.gif";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <h1>Mr. Beast <strong> Video Idea Generator</strong></h1>
          <img src={mb} alt="home-logo" className="home-logo" />
           {/* add a button */}
          <button className="home-button">
            
              <span>Generate Video Idea</span>
            
          </button>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
