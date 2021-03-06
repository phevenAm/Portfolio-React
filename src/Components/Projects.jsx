import React from "react";
import ProjectDetails from "../data/projects-data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Component Styles/Projects/ProjectsPage.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      {ProjectDetails.map(({ id, images: { mainImage } }) => {
        return (
          <img
            key={id}
            width="100%"
            src={mainImage}
            alt="project"
            className="project__thumbnail"
          />
        );
      })}
    </Slider>
  );
}
