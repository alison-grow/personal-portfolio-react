import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function DropButton() {
    return (
        <DropdownButton id="dropdown-basic-button" title="&hearts; Menu &hearts;" className="drop-btn" autoClose={true}>
            <div className="item-container">
                <Dropdown.Item id="dropdown-item" href="/Home.js">Home</Dropdown.Item>
                <Dropdown.Item id="dropdown-item" href="/Projects.js">Projects</Dropdown.Item>
                <Dropdown.Item id="dropdown-item" href="/Contact.js">Contact</Dropdown.Item>
            </div>
        </DropdownButton>
    );
}







// export default function Dropdown() {
//     return (
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-btn">
//                 Dropdown Button
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     )
// }