import React from "react";
import ProjectDetails from "../data/projects-data.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../Component Styles/Projects/ProjectsPage.css";

const Projects = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = ProjectDetails.map(({ id, images: { mainImage } }) => {
    return (
      <img
        key={id}
        src={mainImage}
        alt="project"
        className="project__thumbnail"
        onDragStart={handleDragStart}
      />
    );
  });
  console.log(items);

  return (
    <div className="projects">
      <AliceCarousel
        mouseTracking
        items={items}
        className="projects__carusel"
      />
    </div>
  );
};

export default Projects;
