import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";
import { BsArrowBarLeft } from "react-icons/bs";
import '../css/ProjectsPage.css';
import ProjectStack from "./ProjectStack";

const Projects = () =>
{
  //!detect screen size change and change project display style
  function getWindowDimensions()
  {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() =>
  {
    function handleResize()
    {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  return (
    <div className="projects">
      <Link to={"/"}>
        <BsArrowBarLeft className="projects__backButton" />
      </Link>

      {windowDimensions.width > 1000 ? <ProjectSlider /> : <ProjectStack />}
      {console.log(windowDimensions)}
      {/* //! if screen width = mobile show stack else render this component above */}
    </div>
  );
};

export default Projects;
