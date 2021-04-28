import React from 'react';
import Profile from './profile';
import Education from './education';
import Experience from './experience';


function Body(props) {
    
    let header, content;

    switch (props.content) {
        case 'profile':
            header = <h1>Profile/</h1>
            content = <Profile />
            break;
        case 'education':
            header = <h1>Education/</h1>
            content = <Education />
            break;

        case 'experience':
            header = <h1>Experience/</h1>
            content = <Experience />
            break;

        default:
            header = <h1>404</h1>
            content = <div>On things that never happened</div>
            break;
    }

    return (
        <main className="content">
            <div className="heading">
                {header}
            </div>
            <div id="about-content" className="about-content">
                <div className="text">
                    {content}
                </div>
            </div>
        </main>
    );
}

export default Body;