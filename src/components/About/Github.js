import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      My Working Stats on<strong className="purple"> GitHub</strong>
      </h1>
      <GitHubCalendar
        username="robinNcode"
        blockSize={15}
        blockMargin={5}
        color="green"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
