import React from 'react';

const Project = (props) => {
    const {name, desc, image_url, github, host_url, tags } = props;
    return (
        <div id="project">
           <h2>{name}</h2>
            <img src={image_url} alt={`Screenshot of ${name}`}/>
            <div className="showDetails" onClick={() => {console.log('clicked')}}>Details</div>
        </div>
    );
};

export default Project;