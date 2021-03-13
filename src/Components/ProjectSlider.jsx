import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../data/projects-data.json";
// react-id-swiper
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
//customs css

import "../Component Styles/ProjectSlider/ProjectSlider.css";

const ProjectSlider = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <Swiper {...params}>
      {ProjectDetails.map((project) => {
        const {
          id,
          title,
          description,
          images: {
            mainImage,
            firstImage,
            secondImage,
            thirdImage,
            fourthImage,
          },
          skills,
        } = project;

        return (
          <div
            className="project__slide"
            onClick={() => console.log("use history APi to change page")}
            style={{ backgroundImage: `url(${mainImage})` }}
          >
            {/* <div className="project__slideElement"> */}
            <div className="project__slideElementContent">
              <h1>{title}</h1>
              {description}
            </div>
            {/* </div> */}
          </div>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
