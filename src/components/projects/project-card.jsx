import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.css";

const ProjectCard = ({ title, disc, image, link, type }) => {
  const isMobile = type === "mobile";

  return (
    <div className="proj-box col-lg-4 col-md-6 py-3">
      <Card>
        <img
          className={isMobile ? "card-img-top" : "card-img-top-web"}
          src={image}
          alt="project"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{disc}</Card.Text>
          <Button
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Visit Github
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
