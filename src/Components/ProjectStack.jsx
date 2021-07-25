import React, {useEffect, useState} from 'react'
import Card from './Card';
import ProjectDetails from "../data/projects-data.json";
const ProjectStack = () => {
    // console.log(ProjectDetails);
 return (
  <React.Fragment>
      <div className="stackContainer">
        {  ProjectDetails.map((project, index) => {
            const {
            id,
            title,
            description,
            images,
            skills 
            } = project;
    
            return (
                <Card key={index} project={project} id={id} description={description} title={title} images={images}/>
            )
          })}
      </div>
  </React.Fragment>
 )

}

export default ProjectStack
