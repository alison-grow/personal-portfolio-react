import React from "react";
import MyForm from "./Form";
import { Grid } from "@mui/material";
// import { Switch } from "@mui/material";
// import { alpha, styled } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';

// import FormControlLabel from "@mui/material/FormControlLabel";

export default function Contact() {
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
            <div className="grid-container">
                <Grid container spacing={.5}>
                    <Grid xs={2}>
                        <img src="https://alison-grow.github.io/img/computer%20(1).png" alt="computer" className="column-img" />
                        <img src="https://alison-grow.github.io/img/cloud-network.png" alt="cloud network" className="column-img" />
                        <img src="https://alison-grow.github.io/img/girl.png" alt="coder girl" className="column-img" />
                        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721593.png" alt="coding languages" className="column-img" />
                    </Grid>
                    <Grid xs={8} className="accordion-grid">
                        <MyForm />
                    </Grid>
                    <Grid xs={2}>
                        <img src="https://alison-grow.github.io/img/computer%20(1).png" alt="computer" className="column-img" />
                        <img src="https://alison-grow.github.io/img/cloud-network.png" alt="cloud network" className="column-img" />
                        <img src="https://alison-grow.github.io/img/girl.png" alt="coder girl" className="column-img" />
                        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721593.png" alt="coding languages" className="column-img" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}