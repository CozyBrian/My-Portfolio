import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";

const ProjectCard = ({ title, disc, image }) => {
  const Image = require("./IMG_0471.PNG");
  return (
    <div className="proj-box col-lg-4 col-md-6 py-3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{disc}</Card.Text>
          <Button variant="primary">Visit Github</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;