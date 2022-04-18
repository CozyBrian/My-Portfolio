import React, { useEffect } from "react";
import "./styles.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const page1 = document.getElementById("home");
  const page2 = document.getElementById("skills");
  const page3 = document.getElementById("projects");
  const page4 = document.getElementById("contact");

  //const rect = page1.getBoundingClientRect();

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    //console.log(rect);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.getElementById("Header");
    const scrollTop = window.scrollY;
    scrollTop >= 2
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <Navbar expand="lg" variant="dark" id="Header">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Item className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <Nav.Link href="#skills">My Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <Nav.Link href="#projects">Project</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
