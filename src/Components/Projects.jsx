import React, { useEffect } from "react";
import ProjectSlider from "./ProjectSlider";
import UseAnimations from "react-useanimations";
import { BsBoxArrowInLeft } from "react-icons/bs";
import "../Component Styles/Projects/ProjectsPage.css";

const Projects = () => {
  return (
    <div className="projects">
      <BsBoxArrowInLeft className="projects__backButton" />
      <ProjectSlider />
    </div>
  );
};

export default Projects;
