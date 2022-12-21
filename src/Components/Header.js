import React from "react";
import Dropdown from "./Dropdown";

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <img src="./img/clean-code.png" alt="sparkle computer" className="logo-img" />
                </div>
            <Dropdown />
            </div>
        </header>
    )
}