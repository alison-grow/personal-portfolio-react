import React from "react";
import Dropdown from "./Dropdown";

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/1753/1753751.png" alt="sparkle computer" className="logo-img" />
                </div>
            <Dropdown />
            </div>
        </header>
    )
}