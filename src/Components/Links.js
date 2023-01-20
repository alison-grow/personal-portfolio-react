import React from 'react';
import { Link } from 'react-router-dom';


export default function NavLinks() {

    return (
        <div className="links-container">
            <Link className="page-links" to="/">&#9733; Home</Link>
            <Link className="page-links" to="/Projects">&#9733; Projects</Link>
            <Link className="page-links" to="/Contact">&#9733; Contact</Link>
        </div>
    );
}