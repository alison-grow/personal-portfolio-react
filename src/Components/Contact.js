import React from "react";
import { Switch } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

// import FormControlLabel from "@mui/material/FormControlLabel";

export default function Contact() {
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[100],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[100],
        },
      }));
    return (
        <div className="contact-page-content">
            <div className="jumbotron">
                <h1 className="jumbotron-h1">
                    Contact Me!
                </h1>
                <h2 className="jumbotron-h2">
                    Send me an email
                </h2>
            </div>
            <div className="contact-form-container d-flex">
                <form>
                    <h3 className="contact-h3">
                    ✉ Email ✉
                    </h3>
                    <label className="form-label">
                        Name: 
                    </label>
                        <input placeholder="name" type="text" name="name" className="form-input" />
                    <label className="form-label">
                        Email Address: 
                    </label>
                        <input placeholder="email" type="text" name="name" className="form-input" />
                    <label className="form-label">
                        Message: 
                    </label>
                    <textarea placeholder="type your message here" className="form-textarea" /><br></br>
                    <GreenSwitch className="switch" />
                        <label className="switch-label">
                            I am not a robot.
                        </label>
                    <input type="submit" className="submit-btn" />
                </form>
            </div>
        </div>
    )
}