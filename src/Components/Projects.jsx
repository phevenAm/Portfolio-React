import React, { useEffect } from "react";
import ProjectSlider from "./ProjectSlider";
import { BsBoxArrowInLeft } from "react-icons/bs";
import "../Component Styles/Projects/ProjectsPage.css";

const Projects = () => {
  return (
    <div className="projects">
      <BsBoxArrowInLeft />
      <ProjectSlider />
    </div>
  );
};

export default Projects;
