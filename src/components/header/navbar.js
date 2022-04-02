import React from "react";
import "./styles.css";
import { Navbar, Container, Nav } from "react-bootstrap";
//import classNames from "classnames";

// const func = () => {
// const [collapsed, setCollapsed] = useState(false);
//   return (
//     <div>
//       <nav className="navbar navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand">
//             {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"> */}
//             My Portfolio
//           </a>
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="navbar-toggler"
//             type="button"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className={classNames("navbar-collapse", {
//               collapse: collapsed,
//             })}
//           >
//             <div className="navbar-nav">
//               <a className="nav-link active" aria-current="page">
//                 Home
//               </a>
//               <a className="nav-link">Features</a>
//               <a className="nav-link">Pricing</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Item className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
