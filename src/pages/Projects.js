import React from 'react';
import ProjectItem from '../components/Projectitem';
import Proj1 from '../assets/dbfz.jpg';

import '../styles/Project.css'

function Projects() {
    return(
        <div className="projects">
            <h1>My personnal projects :</h1>
            <div className="projectList">
                <ProjectItem name="Social Media Website" image={Proj1} />
                <ProjectItem />
            </div>
        </div>
    );
}

export default Projects;