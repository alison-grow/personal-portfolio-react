import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faGoogle,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function SocialButtons() {
    return (
        <div className="social-container">
            <a href="https://www.linkedin.com/" className="linkedin social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com/alison-grow" className="github social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://twitter.com/" className="twitter social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://www.gmail.com/" className="google social" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            </a>
        </div>
    )
}