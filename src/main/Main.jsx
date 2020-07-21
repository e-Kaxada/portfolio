import React from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faGraduationCap, faCertificate, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle, faLightbulb, faBuilding,  } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faFacebookMessenger, faGithub,faTwitter, faLinkedin, faPinterest, faCodepen} from '@fortawesome/free-brands-svg-icons'

const Main = () => {
    return(
        <main>
            <section id="welcome" className="welcome">
                <div className="background" />
                <h1>Hi, I'm Enock Kasaadha.</h1>
                <a href="#nav_div"><i className="fas fa-arrow-down" /></a>
            </section>
            <div id="nav_div" className="nav_div">
                <nav>
                <ul>
                    <li><a href="#welcome">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects"> projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
                </nav>
            </div>
            <section id="about">
                <div className="heading" style={{bottom: '-150px', zIndex: 2, border: '5px solid #AEB6BF', width: 70, height: 70}}>
                <i className="far fa-user-circle" />
                </div>
                <div className="about">
                <div className="about_info info1">
                    <div className="info_content">
                    <p>I am Enock Kasaadha, an up to scratch front-end web developer and artistic UI/UX designer, from Kampala, Uganda.</p>
                    <p>I design web applications and make sure your client comes back to visit them because of their appearance. I have been coding for the past 2 months and hope to do so as long as you need a website that is good looking.</p>
                    <p>Besides coding, I am a graphics designer and up-coming architect with intermediate to advanced experience in Photoshop, Illustrator, InDesign and CAD programs including AutoCAD, Revvit, Sketchup and ArchiCAD. I really enjoy
                        spending a lot of time polishing up what I have previously done until it looks good to you and me.</p>
                    <p>When I am not doing anything related to any of these above, I play chess, the piano and do a lot of breathtaking photography.</p>
                    <p>With all, you can be sure to trust me with your project because I am the perfect all rounder for what you need to see being shown to the world through the internet. I will be happy to work with you.</p>
                    </div>
                </div>
                <div className="about_info info3">
                    <div className="heading">
                    <i className="fas fa-graduation-cap" />
                    <p>Education</p>
                    </div>
                    <div className="info_content">
                    <ul>
                        <li><strong>2019-present: Bugema University</strong> - Bachelors of Science in Software Engineering</li>
                        <li><strong>2017-2019: Kyambogo Univeristy</strong> - Bachelors of Interior Architecture</li>
                    </ul>
                    </div>
                </div>
                <div className="about_info info4">
                    <div className="heading">
                    <FontAwesomeIcon icon={faCertificate} />
                    <p>Certifications</p>
                    </div>
                    <div className="info_content">
                    <p>Heads up. And I am still counting till I borrow a calculator.</p>
                    <ul>
                        <li><a href="https://www.freecodecamp.org/certification/enock/responsive-web-design">Responsive web design</a></li>
                        <li><a href="https://www.freecodecamp.org/certification/enock/javascript-algorithms-and-data-structures">Javascript Data Sructures and Algorithms</a></li>
                        <li>more to come...</li>
                    </ul>
                    </div>
                </div>
                <div className="about_info info5">
                    <div className="heading">
                    <FontAwesomeIcon icon={faLightbulb}/>
                    <p>languages I speak</p>
                    </div>
                    <div className="info_content">
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>A little bit of Sass and Bootstrap</li>
                    </ul>
                    </div>
                </div>
                <div className="about_info info6">
                    <div className="heading">
                    <FontAwesomeIcon icon={faBuilding} />
                    <p>workplace</p>
                    </div>
                    <div className="info_content">
                    I am freelancing and just one call away from duty.
                    </div>
                </div>
                </div>
            </section>
            <section id="projects" className="projects">
                <h2>these are some of the my projects.</h2>
                <div className="grid_container">
                <div className="item-left item1">
                    <a href="https://codepen.io/enockkasaadha/full/RwwWpap">
                    <img src="https://screenshot.codepen.io/3613768.RwwWpap.small.c0fbc68e-9136-4b0c-8b1a-1c21f52f4162.png" />
                    </a>
                </div>
                <div className="item-middle item2">
                    <a href="https://codepen.io/enockkasaadha/full/pooyVXQ">
                    <img src="https://screenshot.codepen.io/3613768.pooyVXQ.small.1522f8d6-26a0-42a4-9ba2-1366811ba4a4.png" />
                    </a>
                </div>
                <div className="item-right item3">
                    <a href="https://codepen.io/enockkasaadha/full/jOOqEEG">
                    <img src="https://screenshot.codepen.io/3613768.jOOqEEG.small.1cd7ea90-a802-47aa-9277-7b69cc2a6e21.png" />
                    </a>
                </div>
                <div className="item-left item4">
                    <a href="https://codepen.io/enockkasaadha/full/dyyYEgj">
                    <img src="https://screenshot.codepen.io/3613768.dyyYEgj.small.45ee5486-b087-4ad8-92a2-04e28afb8a15.png" />
                    </a>
                </div>
                <div className="item-middle item5">
                    <a href="https://codepen.io/enockkasaadha/full/ZEEawZE">
                    <img src="https://screenshot.codepen.io/3613768.ZEEawZE.small.868dc12d-9e42-4dcb-9b67-7010021bf976.png" />
                    </a>
                </div>
                </div>
            </section>
            <section id="contacts" className="contacts">
                <div className="words">
                <h2>
                    <xmp> Let's &lt;code/&gt;nate...</xmp>
                </h2>
                <p>how do you take your coffee?</p>
                </div>
                <div className="links">
                <a href="https://github.com/EnockKasaadha"><FontAwesomeIcon icon= {faGithub} className="github"/></a>
                <a href="https://www.facebook.com/enock.kasaadha/"><FontAwesomeIcon icon={faFacebookMessenger} className="messenger"/></a>
                <a href="https://wa.me/256777285355"><FontAwesomeIcon icon={faWhatsapp} className="whatsapp"/></a>
                <a href="https://twitter.com/EnockKasaadha"><FontAwesomeIcon icon={faTwitter} className="twitter"/></a>
                <a href="https://www.linkedin.com/in/enock-kasaadha-b09705146/"><FontAwesomeIcon icon={faLinkedin} className="linkedIn"/></a>
                <a href="https://www.pinterest.com/enockkasaadha/"><FontAwesomeIcon icon={faPinterest} className="pinterest"/></a>
                <a href="mailto: enocksdha@gmail.com"><FontAwesomeIcon icon={"envelope-open-text"} className="mail"/></a>
                <a href="https://codepen.io/enockkasaadha"><FontAwesomeIcon icon={faCodepen} className="codepen"/></a>
                </div>
            </section>
            <footer>
                <p>2019 ©Archited</p>
            </footer>
        </main>

    )
}

export default Main;