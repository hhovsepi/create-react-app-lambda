import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Haig (Hike) Hovsepian </span>
            from <span className="purple"> San Diego, California.</span>
            <br />I'm a 25 year old full-stack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A guy called Hike likes to go Hiking?"{" "}
          </p>
          <footer className="blockquote-footer">Hike ²</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
