import React from "react";
import DropButton from "./Dropdown";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <img src="https://alison-grow.github.io/img/clean-code.png" alt="sparkle computer" className="logo-img" />
                </div>
            <Link to="/Contact">Contact</Link>
            <Link to="/Projects">Projects</Link>
            <DropButton />
            </div>
        </header>
    )
}