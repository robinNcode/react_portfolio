import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/wbg_logo.png";


import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { SiQantas } from "react-icons/si";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >

        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link style={{ marginTop: 4 }} as={Link} to="/" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link style={{ marginTop: 4 }}
                as={Link} 
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link style={{ marginTop: 4 }}
                as={Link}
                to="/achievements"
                onClick={() => updateExpanded(false)}
              >
                Achievements
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link style={{ marginTop: 4 }}
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link style={{ marginTop: 4 }}
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://msmrobin.hashnode.dev/" target="_blank" style={{ marginTop: 4 }}>
                  Articles
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;