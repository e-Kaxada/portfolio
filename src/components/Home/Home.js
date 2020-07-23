import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const text = 'hello, I\'m Enock Kasaadha.<br/>A UI/UX designer,<br/>front-end developer.'

    return(
        <div className="home-main">
            <div className="intro">
                <div className="intro-text">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(text)
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        // .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}
                />
                </div>
            <div className="image"></div>
            </div>
            <a href="ref"><FontAwesomeIcon icon={faArrowDown}/></a>
        </div>
    )
}

export default Home;