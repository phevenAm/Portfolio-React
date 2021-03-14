import React, { useState, useEffect } from "react";
import projectsData from "../data/projects-data.json";
import "../Component Styles/SingleProject/SingleProject.css";
const SingleProject = ({ match }) => {
  const [singleProject, setSingleProject] = useState([]);

  useEffect(() => {
    const project = projectsData.filter((project) => {
      return project.title === match.params.title;
    });

    setSingleProject(project);
  }, []);
  console.log(singleProject);
  const [{ description, id, images, skills, title } = {}] = singleProject;
  console.log(images);
  return (
    <div className="project">
      <div className="project__hero">
        <h1>{title}</h1>
        <img
          src={
            images
              ? images.secondImage
              : "https://designshack.net/wp-content/uploads/placeholder-image.png"
          }
          alt="project image"
        />
      </div>

      <div className="project__images">
        <img
          src={
            images
              ? images.secondImage
              : "https://designshack.net/wp-content/uploads/placeholder-image.png"
          }
          alt="project image"
        />
        <img
          src={
            images
              ? images.secondImage
              : "https://designshack.net/wp-content/uploads/placeholder-image.png"
          }
          alt="project image"
        />
        <img
          src={
            images
              ? images.secondImage
              : "https://designshack.net/wp-content/uploads/placeholder-image.png"
          }
          alt="project image"
        />
      </div>
    </div>
  );
};

export default SingleProject;
