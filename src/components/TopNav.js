import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../images/ArkLogo.png";
export const TopNav = () => {
  return (
    <Navbar expand="md" className="topNav">
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} alt="" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 text-dark">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/aboutme">
              About Me
            </Link>
            <Link className="nav-link" to="/contact">
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
