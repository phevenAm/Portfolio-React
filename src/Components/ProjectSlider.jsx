import React from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../data/projects-data.json";


const ProjectSlider = () => {
  return (
    <section class="app-slider">
      <div class="slider-container">

        {ProjectDetails.map((project) => {
          const {
            id,
            title,
            description,
            images: { mainImage },
            skills,
          } = project;

          return (
            <div key={id}>
              <Link to={`/Projects/Single_Project/${title}`}>
                <div className="slide">
                  <img src={mainImage} alt={title} />
                  <div className="project__slideElementContentText">
                    <h1>{title}</h1>
                    <p> {description}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}

      </div>
    </section>
  )
}


export default ProjectSlider;
