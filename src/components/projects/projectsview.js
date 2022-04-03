import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";

const ProjectView = () => {
  const image = require("./IMG_0471.PNG");

  return (
    <div className="row proj-box-con" id="projects">
      <h1 className="heading">PROJECTS</h1>
      <div className="proj-box col-lg-4 col-md-6 py-3">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="proj-box col-lg-4 col-md-6 py-3">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="proj-box col-lg-4 col-md-6 py-3">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProjectView;
