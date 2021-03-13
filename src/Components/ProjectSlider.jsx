import React, { useEffect, useState } from "react";
import ProjectDetails from "../data/projects-data.json";

// react-id-swiper
// import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

// Import Swiper styles
// import "swiper/css/swiper.css";

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
    <div>
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
          <Swiper
            key={project.id}
            {...HeroSliderConfigs}
            getSwiper={setParallaxSwiper}
          >
            hi
          </Swiper>
        );
      })}
    </div>
  );
};

export default ProjectSlider;
