import React from 'react';
import GitHub from './github';

function Social(){
    let sos = [
        <GitHub />,
    ];

    let link = sos.map((val, idx) => {
        return (
            <li key={idx}>
                {val}
            </li>
        )
    })

    return(
        <div className="social-container">
            <h2>Find me on</h2>
            <ul className="social-list">
                {link}
            </ul>
        </div>
    );
}

export default Social;