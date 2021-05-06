import React from 'react';

function GitHub() {
    return (
        <a
            href="https://github.com/bodybody123/"
            target="_blank" rel="noreferrer">
            <img
                className="social-media"
                src={process.env.PUBLIC_URL + "/img/GitHub-Mark-64px.png"}
                alt="GitHub" />
            GitHub
        </a>
    );
}

export default GitHub;