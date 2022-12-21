import React from "react";

export default function Dropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-btn">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}