import React from "react";
import ProjectDetails from "../data/projects-data.json";

import "react-alice-carousel/lib/alice-carousel.css";
// import "../Component Styles/Projects/ProjectsPage.css";

const Projects = () => {
  return (
    <div className="projects container">
      <div className="projects__images">
        {ProjectDetails.map(
          ({ id, title, description, images: { mainImage } }) => (
            <div className="projects__imagesContainer">
              <img
                data-title={title}
                key={id}
                src={mainImage}
                alt="main-image"
                className="projects__imagesThumbnail"
              />
              <h2 className="project__title">{title}</h2>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
