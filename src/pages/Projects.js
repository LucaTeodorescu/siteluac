import React from 'react';
import ProjectItem from '../components/Projectitem';
import { ProjectList } from '../helpers/ProjectList';
import Proj1 from '../assets/dbfz.jpg'

import '../styles/Project.css'

function Projects() {
    return(
        <div className="projects">
            <h1>My personnal projects :</h1>
            <div className="projectList">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />
                })}
            </div>
        </div>
    );
}

export default Projects;