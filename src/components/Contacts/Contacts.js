import React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Contacts = () => {
    return(
        <div className="contacts-main">
            <p className="meet">
                let's meet and talk
            </p>
            <p className="coffee">
                How do you take your coffee?
            </p>
            <div className="links">
                <a href="#github"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="#linkedIn"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="#mail"><FontAwesomeIcon icon={faEnvelopeOpen}/></a>
                <a href="#twitter"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
        </div>
    )
}

export default Contacts;