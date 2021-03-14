import React, { useState, useEffect } from "react";
import projectsData from "../data/projects-data.json";
import "../Component Styles/SingleProject/SingleProject.css";
const SingleProject = ({ match }) => {
  const [singleProject, setSingleProject] = useState([]);

  useEffect(() => {
    const project = projectsData.filter((project) => {
      return project.title === match.params.title;
    });
    console.log(project);
    setSingleProject(project);
  }, []);
  console.log(singleProject);
  return <div className="singleProject">item</div>;
};

export default SingleProject;
