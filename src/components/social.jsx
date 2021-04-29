import React from 'react';
import GitHub from './github';
import Email from './email';

function Social(){
    let sos = [
        <GitHub />,
        <Email />
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