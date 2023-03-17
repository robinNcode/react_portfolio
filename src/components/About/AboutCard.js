import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Peace be upon you, I am <span className="purple">MD Shahin Mia Robin. </span>
            B.Sc. in CSE from Sonargaon University.
            <br />
            <br />
            <span className="purple Bio-style">সাধারণ, আত্মিক, অনুরাগী, ত্বরিত শিক্ষাগ্রহণকারী</span><br />
            <span className="purple Bio-style">Simple, Spritual, Passionate, Quick Learner</span>
            <br />
            <br />

            An enthusiastic Software Engineer, currently working at <span className="purple"> <a href="http://adovasoft.com/" target="_blank" rel="noreferrer">Adova Soft</a></span> since 2019.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
