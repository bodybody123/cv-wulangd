import React from 'react';

function GitHub() {
    return (
        <a
            href="mailto:wdhanadipa@gmail.com"
            target="_blank" rel="noreferrer">
            <img
                className="social-media"
                src={process.env.PUBLIC_URL + "/img/email-48.png"}
                alt="Email" />
        </a>
    );
}

export default GitHub;