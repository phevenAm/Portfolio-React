import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";
import { BsArrowBarLeft } from "react-icons/bs";
import "../Component Styles/Projects/ProjectsPage.css";

const Projects = () => {
  return (
    <div className="projects">
      <Link to={"/"}>
        <BsArrowBarLeft className="projects__backButton" />
      </Link>
      <ProjectSlider />
    </div>
  );
};

export default Projects;
