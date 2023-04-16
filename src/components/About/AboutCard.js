import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            সাধারণ, আত্মিক, অনুরাগী, ত্বরিত শিক্ষাগ্রহণকারী<br />
            Simple, Spritual, Passionate, Quick Learner
          </p>
          <br/>
          <p style={{ textAlign: 'justify' }}>
            "To be more successful, learn how to love learning. 
            The more effort you put into improving your skills, the more you will proceed toward your goals."{" "}
          </p>
          <footer className="blockquote-footer">MsM Robin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
