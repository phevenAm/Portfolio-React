import React, { useEffect, useState } from "react";
import ProjectDetails from "../data/projects-data.json";
// react-id-swiper
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
//customs css

import "../Component Styles/ProjectSlider/ProjectSlider.css";
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

const ProjectSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
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
          <div className="project__slide">
            <div
              key={project.id}
              className="project__slideElement"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
              style={{ backgroundImage: `url(${mainImage})` }}
            >
              {/* <img
                src={mainImage}
                alt="project"
                className="project__slideElementImage"
              /> */}
            </div>
            ;
          </div>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
