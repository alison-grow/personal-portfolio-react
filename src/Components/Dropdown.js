import React from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function DropButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        // <DropdownButton id="dropdown-basic-button" title="&#9733; Menu &#9733;" className="drop-btn" autoClose={true}>
        //     <div className="item-container">
        //         <Dropdown.Item id="dropdown-item" href="/Home.js">Home</Dropdown.Item>
        //         <Dropdown.Item id="dropdown-item" href="/Projects.js">Projects</Dropdown.Item>
        //         <Dropdown.Item id="dropdown-item" href="/Contact.js">Contact</Dropdown.Item>
        //     </div>
        // </DropdownButton>


        <div className="dropdown-container">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ fontFamily: 'Arbutus Slab, serif' }}
            >
                <Typography style={{fontFamily: 'Arbutus Slab, serif', textTransform: 'none'}}>
                    &#9733; Menu &#9733;
                </Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} style={{ backgroundColor: '#FCC7B5', fontFamily: 'Arbutus Slab, serif'}} className="menu-item">Profile</MenuItem>
                <MenuItem onClick={handleClose} style={{ backgroundColor: '#FCC7B5',fontFamily: 'Arbutus Slab, serif' }} className="menu-item">My account</MenuItem>
                <MenuItem onClick={handleClose} style={{ backgroundColor: '#FCC7B5', fontFamily: 'Arbutus Slab, serif'}} className="menu-item">Logout</MenuItem>
            </Menu>
        </div>
    );
}