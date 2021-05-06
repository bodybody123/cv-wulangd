import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Profile from './profile';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Hobby from './award';
import Footer from './footer';

function Box(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const arr = [
        <Profile />,
        <Education />,
        <Experience />,
        <Skills />,
        <Hobby />,
        <Footer />
    ];

    const contentBox = arr.map((val, idx) => {
        return (
            <div key={idx} className={"box "} data-aos="zoom-in">
                {val}
            </div>
        );
    });

    return contentBox;
}

export default Box;