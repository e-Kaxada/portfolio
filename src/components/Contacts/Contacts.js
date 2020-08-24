import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  return (
    <div className="contacts-main" id="contacts-main">
      <p className="meet">let's meet and talk</p>
      <p className="coffee">How do you take your coffee?</p>
      <div className="links">
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
  );
};

export default Contacts;
