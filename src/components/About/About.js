import React from 'react';
import './About.css';

const About = () => {
    return(
        <div className="about-main" id="about-main">
            <div className="skills">
                <h3>What I do</h3>
                <p>I develop, design and redesign websites and web applications for your custom needs.</p>
            </div>
            <div className="languages">
                <h3>languages I speak</h3>
                <ul>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>NodeJS</li>
                    <li>Sass and Compass</li>
                </ul>
            </div>
            <div className="tools">
                <h3>Tools I use</h3>
                <ul>
                    <li>Visual studio code</li>
                    <li>Adobe Illustrator</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
    )
}

export default About;