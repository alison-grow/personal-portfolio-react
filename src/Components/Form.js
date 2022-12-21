import React from "react";
import { Switch } from "@mui/material";

export default function Form() {
    return (
        <div className="contact-form">
            <h1 className="contact-h1">
                Contact Me!
            </h1>
            <div className="">
                <label className="contact-label">
                    Email Address
                </label>
                <input type="text" className="contact-input" required />
            </div>
            <div className="">
                <label className="contact-label">
                    Name
                </label>
                <input type="text" className="contact-input" required />
            </div>
            <div className="">
                <label className="contact-label">
                    Phone Number
                </label>
                <input type="text" className="contact-input" required />
            </div>
            <div className="">
                <label className="contact-label">
                    Message
                </label>
                <input type="text" className="contact-input" required />
            </div>
            <div className="">
                <Switch
                <button className="submit-btn" />
            </div>
        </div>
    )
}