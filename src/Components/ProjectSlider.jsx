import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../data/projects-data.json";
import '../Component Styles/ProjectSlider/ProjectSlider.css';
import '../css/ProjectSlider.css';




let slidePos = 0;
let slideTransMultiplier = 100;
const slides = Array.from(document.querySelectorAll('.slide'));


function loadVars() {
  console.log('kind working')
}
//position slides


const carousel = (direction) => {
  //working with slides
  console.log(slidePos)
  if (slidePos === slides.length) {
    slidePos = 0;
  }
  if (slidePos === -1) {
    slidePos = (slides.length - 1);
    console.log(slidePos)
  }

  console.log(slidePos)
  slides.forEach(function (slide) {
    if (direction === 'next') {
      slide.style.transform = `translate(-${slidePos * 100}%)`;
    }
    if (direction === 'prev') {
      slide.style.transform = `translate(-${(slidePos) * 100}%)`;
    }
  })
}

const ProjectSlider = () => {


  useEffect(() => {
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');

    slides.forEach((slide, index) => {
      slide.style.left = `${index * slideTransMultiplier}%`;
    });


    nextBtn.addEventListener('click', () => {
      console.log('next clicked');
      slidePos++;
      carousel('next', slidePos);
    });
    prevBtn.addEventListener('click', () => {
      console.log('prev licked');
      slidePos--;
      carousel('prev');
    });


  }, []);

  return (
    <section className="app-slider">
      <div className="slider-container">

        {ProjectDetails.map((project) => {
          const {
            id,
            title,
            description,
            images: { mainImage },
            skills,
          } = project;

          return (
            <Link to={`/Projects/Single_Project/${title}`} key={id}>
              <div className="slide">
                <img src={mainImage} alt={title} />
                <div className="project__slideElementContentText">
                  <h1>{title}</h1>
                  <p> {description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="btn-container">
        <button className="prevBtn btn" id="slider-btn" data-value="prev" value="prev" onClick={carousel()}>previous</button>
        <button className="nextBtn btn" id="slider-btn" data-value="next" value="next" onClick={carousel('next')}> next</button>
      </div>
    </section>
  )
}


export default ProjectSlider;
