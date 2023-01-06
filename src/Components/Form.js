import React from "react";
// import { ReactDOM } from "react";
import { Switch } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export default function MyForm() {
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
    // const handleSubmit = (event) > {
    //     alert('Your email has been sent! Thank you ~');
    //     event.preventDefault();
    // }
    return (
        <div className="contact-form-container">
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
                    <GreenSwitch className="switch" sx={{}} />
                        <label className="switch-label">
                            I am not a robot.
                        </label>
                    <input type="submit" className="submit-btn" />
                </form>
            </div>
    )
}
