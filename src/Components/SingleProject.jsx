import React from "react";

import "../Component Styles/SingleProject/SingleProject.css";
const SingleProject = ({
  title,
  description,
  images: { mainImage, firstImage, secondImage, thirdImage, fourthImage },
}) => {
  return (
    <div className="singleProject">
      <img
        src={mainImage}
        alt="showcase"
        className="singleProject__mainImage"
      />
    </div>
  );
};

export default SingleProject;
