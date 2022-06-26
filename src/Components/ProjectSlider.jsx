import React from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../data/projects-data.json";
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectSlider = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    // <Carousel {...settings}>
    <Carousel>
      {ProjectDetails.map((project) => {
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
            className="project__slide"
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
    </Carousel>
  );
};

export default ProjectSlider;
