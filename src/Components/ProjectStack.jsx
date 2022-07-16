import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from './Card';
import ProjectDetails from "../data/projects-data.json";
import '../css/PStack.css';
const ProjectStack = () => {
    // console.log(ProjectDetails);
    return (
        <React.Fragment>
            <div className="stackContainer">
                {ProjectDetails.map((project, index) => {
                    const {
                        id,
                        title,
                        description,
                        images,
                        skills
                    } = project;

                    return (
                        <Link to={`/Projects/Single_Project/${title}`} key={index}>
                            <Card key={index} project={project} id={id} description={description} title={title} images={images} />
                        </Link>
                        // <Card key={index} project={project} id={id} description={description} title={title} images={images} />
                    )
                })}
            </div>
        </React.Fragment>
    )

}

export default ProjectStack
