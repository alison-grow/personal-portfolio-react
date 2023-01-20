import React from "react";
import NavLinks from "./Links";

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <img src="https://alison-grow.github.io/img/clean-code.png" alt="sparkle computer" className="logo-img" />
                </div>
                <NavLinks />
            </div>
        </header>
    )
}