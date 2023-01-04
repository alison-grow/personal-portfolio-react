import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

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
                style={{color: '#bb5f5f'}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem 
                    onClick={handleClose}
                    style={{ backgroundColor: '#FCC7B5', fontFamily: 'Arbutus Slab, serif'}} className="menu-item"
                    >
                        <NavLink to="/" className="menu-link">
                            Home
                        </NavLink>
                </MenuItem>
                <MenuItem 
                    onClick={handleClose} 
                    style={{ backgroundColor: '#FCC7B5',fontFamily: 'Arbutus Slab, serif'}} className="menu-item"
                    >
                        <NavLink to="Projects" className="menu-link">
                            Projects
                        </NavLink>
                </MenuItem>
                <MenuItem 
                    onClick={handleClose} 
                    style={{ backgroundColor: '#FCC7B5', fontFamily: 'Arbutus Slab, serif'}} className="menu-item"
                    >
                        <NavLink to="Contact" className="menu-link">
                            Contact
                        </NavLink>
                </MenuItem>
            </Menu>
        </div>
    );
}