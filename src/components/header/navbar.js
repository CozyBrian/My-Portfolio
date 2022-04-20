import React, { useEffect } from "react";
import useOnScreen from "../../helpers";
import "./styles.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = ({ pagerefs }) => {
  const isVisible = useOnScreen(pagerefs[0]);
  const isVisible1 = useOnScreen(pagerefs[1]);
  const isVisible2 = useOnScreen(pagerefs[2]);
  const isVisible3 = useOnScreen(pagerefs[3]);

  const navlink = document.getElementsByClassName("nav-link");

  useEffect(() => {
    isVisible
      ? navlink[0].classList.add("active")
      : navlink[0].classList.remove("active");
    isVisible1
      ? navlink[1].classList.add("active")
      : navlink[1].classList.remove("active");
    isVisible2
      ? navlink[2].classList.add("active")
      : navlink[2].classList.remove("active");
    isVisible3
      ? navlink[3].classList.add("active")
      : navlink[3].classList.remove("active");
  });

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
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
        <Navbar.Brand href="#home">Brian Newton</Navbar.Brand>
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
