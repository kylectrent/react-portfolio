import React from 'react';
import './content-block.styles.scss'

function ContentBlock(props) {
    return(
        <div className="content-block">
            <div>
                <h3>{props.title}</h3>
                {props.description} 
            </div>
            { props.children }
        </div>
    );
}

export default ContentBlock;