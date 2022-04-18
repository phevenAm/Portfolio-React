import React, { useState, useEffect } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import projectsData from "../data/projects-data.json";
import "../Component Styles/SingleProject/SingleProject.css";
const SingleProject = ({ match }) =>
{
  const [singleProject, setSingleProject] = useState([]);

  useEffect(() =>
  {
    const project = projectsData.filter((project) =>
    {
      return project.title === match.params.title;
    });

    setSingleProject(project);
  }, []);
  console.log(singleProject);
  const [{ description, id, images, skills, title } = {}] = singleProject;
  console.log(images);
  return (
    <React.Fragment>
      <Link to={"/projects/"}>
        <BsArrowBarLeft className="projects__backButton" />
      </Link>

      <div className="project">
        <div className="project__hero">
          <h1>{title}</h1>
          <img
            src={
              images
                ? images.secondImage
                : "https://designshack.net/wp-content/uploads/placeholder-image.png"
            }
            alt={title}
          />
        </div>

        <div className="project__images">
          <img
            src={
              images
                ? images.secondImage
                : "https://designshack.net/wp-content/uploads/placeholder-image.png"
            }
            alt={title}
          />
          <img
            src={
              images
                ? images.secondImage
                : "https://designshack.net/wp-content/uploads/placeholder-image.png"
            }
            alt={title}
          />
          <img
            src={
              images
                ? images.secondImage
                : "https://designshack.net/wp-content/uploads/placeholder-image.png"
            }
            alt={title}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProject;
