import React from "react";
import ProjectDetails from "../data/projects-data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Component Styles/Projects/ProjectsPage.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {ProjectDetails.map(({ id, images: { mainImage } }) => {
        return (
          <img
            key={id}
            src={mainImage}
            alt="project"
            className="project__thumbnail"
          />
        );
      })}
    </Slider>
  );
}
