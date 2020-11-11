import React from 'react';
import './content-block.styles.scss'

function ContentBlock(props) {
    return(
        <div className="content-block">
            <h3>{props.title}</h3>
            <div className="content-block-body">
                <p>{props.description}</p>
                { props.children }
            </div>
        </div>
    );
}

export default ContentBlock;