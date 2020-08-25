import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faEye , faCode} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import Enock from "../images/enock.jpg";
import Restaurant from "../images/restaurant.jpg";
import Ecommerce from "../images/ecommerce.jpg";
import Tour from "../images/tour.jpeg";
import Blog from "../images/blog.jpg";
import Bot from "../images/bot.jpeg";

const Main = () => {
  return (
    <div className="main">
      <section className="about">
        <img src={Enock} alt="Enock" />
        <h1>
          Hello! <br /> I'm Enock Kasaadha. <br /> A UI/UX Designer & <br />A
          Frontend Deveoper.
        </h1>
        <p className="about-description">
          I develop, design and redesign websites and web applications to meet
          your custom needs.
        </p>
        <div className="skills">
          <h2>Skills</h2>
          <p>
            React
            <progress value="95" max="100" />
          </p>
          <p>
            Redux
            <progress value="90" max="100" />
          </p>
          <p>
            NodeJS
            <progress value="50" max="100" />
          </p>
          <p>
            CSS
            <progress value="70" max="100" />
          </p>
          <p>
            HTML
            <progress value="80" max="100" />
          </p>
        </div>
        <div className="contacts">
          <h2>Let's meet and talk</h2>
          <h3>How do you take your coffee?</h3>
          <div className="icons">
            <a href="https://github.com/e-Kaxada" id="github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/enock-kasaadha-b09705146/"
              id="linkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:enocksdha@gmail.com" id="email">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </a>
            <a href="https://twitter.com/EKaxada" id="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://dribbble.com/eKaxada" id="dribbble">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </div>
        </div>
      </section>
      <section className="content">
        <h1>Projects</h1>
        <div className="projects">
          <div className="projects-one">
            <div className="img_wrap">
              <img src={Restaurant} alt="Enock" />
              <p className="project-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="https://github.com/e-Kaxada" id="github">
                  <FontAwesomeIcon icon={faCode} />
                </a> <a href="tobeput"><FontAwesomeIcon icon={faEye} id="eye-icon"/></a>
              </p>
            </div>
            <div className="img_wrap">
              <img src={Blog} alt="Enock" />
              <p className="project-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="https://github.com/e-Kaxada" id="github">
                  <FontAwesomeIcon icon={faCode} />
                </a> <a href="tobeput"><FontAwesomeIcon icon={faEye} id="eye-icon"/></a>
              </p>
            </div>
            <div className="img_wrap">
              <img src={Tour} alt="Enock" />
              <p className="project-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="https://github.com/e-Kaxada" id="github">
                  <FontAwesomeIcon icon={faCode} />
                </a> <a href="tobeput"><FontAwesomeIcon icon={faEye} id="eye-icon"/></a>
              </p>
            </div>
          </div>
          <div className="projects-two">
            <div className="img_wrap">
              <img src={Bot} alt="Enock" />
              <p className="project-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="https://github.com/e-Kaxada" id="github">
                  <FontAwesomeIcon icon={faCode} />
                </a> <a href="tobeput"><FontAwesomeIcon icon={faEye} id="eye-icon"/></a>
              </p>
            </div>
            <div className="img_wrap">
              <img src={Ecommerce} alt="Enock" />
              <p className="project-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="https://github.com/e-Kaxada" id="github">
                  <FontAwesomeIcon icon={faCode} />
                </a> <a href="tobeput"><FontAwesomeIcon icon={faEye} id="eye-icon"/></a>
              </p>
            </div>
            
          </div>
        </div>
      </section>
      <footer>
          <h2>Let's meet and talk</h2>
          <h3>How do you take your coffee?</h3>
          <div className="footer-icons">
            <a href="https://github.com/e-Kaxada" id="github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/enock-kasaadha-b09705146/"
              id="linkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:enocksdha@gmail.com" id="email">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </a>
            <a href="https://twitter.com/EKaxada" id="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://dribbble.com/eKaxada" id="dribbble">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </div>
        </footer>
    </div>
  );
};

export default Main;
