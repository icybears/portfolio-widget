import React, { Component } from 'react';
import Project from './Project';

const ProjectsView = (props) => {
    const {projects} = props;
        return (
            <div id="projects-view">
                {
                    projects.map( (project) => <Project key={project.name} {...project}/>)
                }
            </div>
        );
    
}

export default ProjectsView;