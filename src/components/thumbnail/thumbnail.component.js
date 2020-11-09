import React from 'react';
import { Link } from 'react-router-dom';
import './thumbnail.styles.scss';

function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project-image">
                    <img src={ props.image } alt="Project" />
                </div>
                <h5 className="project-title">{ props.title }</h5>
                <div className="project-category">{props.category}</div>
            </Link> 
        </div>
    );
}

export default Thumbnail;