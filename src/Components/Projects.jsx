import React, { useEffect } from "react";

import ProjectSlider from "./ProjectSlider";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const Projects = () => {
  return (
    <div className="products">
      <ProjectSlider />
    </div>
  );
};

export default Projects;
