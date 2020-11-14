import React from 'react';
import './project-page.styles.scss';

function ProjectPage(props) {
    return (
        <>
        <div className="project-page">
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            <ul>
                {props.bulletPoints.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
            <div>{props.children}</div>
        </div>
        </>
    );
}

export default ProjectPage;