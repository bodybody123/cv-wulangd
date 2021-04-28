import React from 'react';

function Link(props) {

    return (
        <span>
            <a
                className="links"
                onClick={props.click}
                href={'#' + props.name}>
                {props.name}
            </a>
        </span>
    );
}

export default Link;