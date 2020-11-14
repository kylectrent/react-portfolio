import React from 'react';
import './content-block.styles.scss'

function ContentBlock(props) {
    return(
        <div className="content-block" style={{maxWidth: props.maxWidth}}>
            <h3>{props.title}</h3>
            <div className="content-block-body">
                <p style={{fontSize: props.fontSize}}>{ props.description }</p>
                { props.children }
            </div>
        </div>
    );
}

export default ContentBlock;