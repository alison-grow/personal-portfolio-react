import React from "react";
import DropButton from "./Dropdown";

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <img src="https://alison-grow.github.io/img/clean-code.png" alt="sparkle computer" className="logo-img" />
                </div>
            <DropButton />
            </div>
        </header>
    )
}