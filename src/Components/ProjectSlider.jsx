import React from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../data/projects-data.json";
import Slider from "react-slick";

import '../css/ProjectSlider.css';
import "../Component Styles/ProjectSlider/ProjectSlider.css";

const ProjectSlider = () =>
{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {ProjectDetails.map((project) =>
        {
          const {
            id,
            title,
            description,
            images: { mainImage },
            skills,
          } = project;

          return (
            <div
              key={id}
              className="project__slide slick-list"
              onClick={() => console.log("use history APi to change page")}
            >
              <Link to={`/Projects/Single_Project/${title}`}>
                <div className="project__slideElementContent">
                  <img src={mainImage} alt={title} />
                  <div className="project__slideElementContentText">
                    <h1>{title}</h1>
                    <p> {description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
